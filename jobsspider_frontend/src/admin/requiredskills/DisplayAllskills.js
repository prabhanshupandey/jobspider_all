import TitleComponent from '../components/TitleComponent';
import { reqStyles } from "./RequiredSkillsCss"
import MaterialTable from "@material-table/core";
import { useState, useEffect } from 'react'
import Swal from "sweetalert2";
import Grid from "@mui/material/Grid2";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Divider, TextField } from "@mui/material";
import { postData, getData, serverURL } from "../../services/FetchNodeServices";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, } from "@mui/material";
import { useNavigate } from 'react-router';


export default function DisplayAllskills() {
  const classes = reqStyles();
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);
  const [open, setOpen] = useState(false)
  const [categoryId, setCategoryId] = useState("");
  const [subcategoryId, setSubCategoryId] = useState("");
  const[skillid,setSkillId]=useState("");
  const [skillsName, setSkillsName] = useState([]);
  const [formError, setFormError] = useState({ filename: "" })
  const [skills, setSkills] = useState([]);
  const [categoryList, setCategoryList] = useState([])
  const [subCategoryList, setSubCategoryList] = useState([]);


  const fetchAllskills = async () => {

    var response = await getData("skills/display_all_skills");
    if(response.status){
    setSkills(response.data)
  }
   else{
       Swal.fire({
              icon: "error",
              text: response.message,
              toast:true,
              // position:'top-left'
             
            });
   }
      
          }
  useEffect(() => {
    fetchAllskills();
  }, []);
  
  //    skills form....../

  const handleError = (label, message) => {
    setFormError((prev) => ({ ...prev, [label]: message }));
  };
  const validateData = () => {
    var error = false;
    if (categoryId.length == 0) {
      handleError("categoryid", "categoryid should not be blank...");
      error = true;
    }
    if (subcategoryId.length == 0) {
      handleError("subcategoryid", "subcategoryid should not be blank...");
    }

    if (skillsName.length == 0) {
      handleError("skillsname", "skillsname should not be blank...");
    }
    return error;

  };
  const HandleSkillsEdit = async () => {
    var error = validateData();
    if (error == false) {
      var body = { categoryid: categoryId, subcategoryid: subcategoryId, skills: skillsName  }
      var response = await postData("skills/edit_requiredskills_data", body)
      if (response.status) {
        Swal.fire({
          icon: "success",
          text: response.message,
          toast: true,

        });
      } else {
        Swal.fire({
          icon: "success",
          text: response.message,
          toast: false,

        })

      }
    }
  }
   
 

  const handleDelete= async()=>{
    var body={skillid:skillid}
    var response = await postData("skills/delete_skill",body)
    if(response.status){
     Swal.fire({
       icon:"success",
       text:response.message,
       toast:true,
     })
    }
    else{
     Swal.fire({
       icon:"error",
       text:response.message,
       toast:true
     })
    }
    fetchAllskills();
   
   
     };
  
    const fetchAllCategory = async()=>{
      const response =await getData("skills/show_all_category")
      setCategoryList(response.data)
    }
    useEffect (()=>{
      fetchAllCategory();
    
    },[])
  


  const fetchAllSubCategory = async (categoryid) => {
    const response = await postData("skills/show_all_subcategory", {categoryid })
    setSubCategoryList(response.data)
  }
  // const handleClick = async () => {
  //   var error = validateData();
  //   if (error == false) {

  //     const data = {
  //       categoryid: categoryId,
  //       subcategoryid: subcategoryId,
  //       skills: skillsName
  //     }
  //     var response = await postData("skills/submit_skills", data)
  //     if (response.status) {
  //       Swal.fire({
  //         icon: "success",
  //         text: response.message,
  //         toast: true,
  //       });
  //     }
  //     else {
  //       Swal.fire({
  //         icon: "error",
  //         text: response.message,
  //         toast: true
  //       });
  //     }
  //   }
  // }

  const handleCategoryChange = (e) => {
    setCategoryId(e.target.value)
    fetchAllSubCategory(e.target.value)
  }


  const fillCategoryMenu = () => {
    return categoryList.map((item) => (
      <MenuItem key={item.categoryid} value={item.categoryid}>{item.categoryname}</MenuItem>
    ));
  };
 




  const fillSubCategoryMenu = () => {
    return subCategoryList.map((item) => (
      <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
    ));
  };

 


  const openDialog = (rowData) => {
    fetchAllCategory(rowData.categoryid)
    setCategoryId(rowData.categoryid)
    fetchAllSubCategory(rowData.categoryid)
    setSubCategoryId(rowData.subcategoryid)
    setSkillId(rowData.skillid)
    setSkillsName(rowData.skills)
    setOpen(true);
  };



  const closeDialog = () => {
    setOpen(false);
  };

  /********************************************* */
  const showSkillForm = () => {

    return (
      <div>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TitleComponent title="Required Skills" />
          </Grid>
          <Grid size={12} styles={{ display: "flex", justifycontent: "Center", }}>
            <Divider styles={{ margintop: 10 }} />
          </Grid>
          <Grid size={6}>
            <FormControl fullWidth>
              <InputLabel >category Name</InputLabel>
              <Select label="categoryId" value={categoryId}
                onChange={handleCategoryChange}>

                {fillCategoryMenu()}
              </Select>

            </FormControl>
          </Grid>
          <Grid size={6} >
            <FormControl fullWidth>
              <InputLabel>SubCategory Name</InputLabel>
              <Select label="subcategoryId" value={subcategoryId}
                onChange={(e) => setSubCategoryId(e.target.value)}>
                {fillSubCategoryMenu()}
              </Select>
            </FormControl>
          </Grid>

          <Grid size={12}>
            <TextField value={skillsName} helperText={formError.skillsname} error={formError.skillsname} onFocus={() => handleError("skillname", "")} onChange={(e) => setSkillsName(e.target.value)} label="skills" fullWidth />


          </Grid>
          <Grid size={6}>
            <Button variant="contained" onClick={HandleSkillsEdit} fullWidth>Edit</Button>
          </Grid>
          <Grid size={6}>
            <Button variant="contained"  onClick={handleDelete}fullWidth>Delete</Button>
          </Grid>
        </Grid>
      </div>
    )
  }
  /*************************************************** */
  const showDialog = () => {
    return (
      <Dialog open={open}>
        <DialogContent>{showSkillForm()}</DialogContent>
        <DialogActions>
          <Button onClick={() => closeDialog()}>Close</Button>
        </DialogActions>
      </Dialog>
    );
  };

  function showAllSkills() {
    return (
      <MaterialTable
        title="Required skill sets"
        columns={[
          { title: "ID", field: "skillid" },
          { title: "categoryid", field: "categoryname" },
          { title: "subcategoryid", field: "subcategoryname" },
          { title: "skills", field: "skills" },

        ]}

        data={skills}
        options={{
          pageSize: 3,
          pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
          toolbar: true,
          paging: true
      }}
        actions={[

          {
            icon: "edit",
            tooltip: "Save User",
            onClick: (event, rowData) => openDialog(rowData),
          },
          {
            icon: "add",
            tooltip: "add skill",
            isFreeAction: true,
            onClick: (event) => navigate("/DashBoard/skills")
          }
        ]}

      />
    );
  }

  return (
    <div className={classes.root}>
      <div className={classes.box}>
        {showAllSkills()}
        {showDialog()}
      </div>

    </div>

  );
}



