import Grid from "@mui/material/Grid2";
import { Button, Divider, TextField } from "@mui/material";
import { useState, useEffect } from 'react'
import { postData, getData } from "../../services/FetchNodeServices";
import { Select, InputLabel, FormControl, MenuItem } from "@mui/material";
import Swal from "sweetalert2";
import TitleComponent from "../components/TitleComponent";
import { reqStyles } from "./RequiredSkillsCss";
export default function () {
  {
    const classes = reqStyles();
    const [categoryId, setCategoryId] = useState("")
    const [subCategoryId, setSubCategoryId] = useState("")
    const [skillsName, setSkillsName] = useState("")
    const [categoryList, setCategoryList] = useState([])
    const [subCategoryList, setSubCategoryList] = useState([])
    const [formError, setFormError] = useState({ filename: "" })


    const handleError = (label, message) => {
      setFormError((prev) => ({ ...prev, [label]: message }))
    }

    const validateData = () => {
      var error = false
      if (categoryId.length == 0) {
        handleError("categoryname", "should not be blank....")
        error = true;
      }
      if (subCategoryId.length == 0) {
        handleError("subcategoryname", "should not be blank....")
        error = true;
      }
      if (skillsName.length == 0) {
        handleError("skillname", "should not be blank....")
        error = true;
      }
      return error

    }
    const fetchAllCategory = async () => {
      const response = await getData("skills/show_all_category")

      setCategoryList(response.data)


    }
    useEffect(() => {

      fetchAllCategory();
    }, []);



    const fillCategoryMenu = () => {
      return categoryList.map((item) => (
        <MenuItem key={item.categoryid} value={item.categoryid}>{item.categoryname}</MenuItem>
      ));
    };
    const fetchAllSubCategory = async (categoryid) => {
      const response = await postData("skills/show_all_subcategory", { categoryid })
      setSubCategoryList(response.data)
    }


    const handleCategoryChange = (e) => {
      setCategoryId(e.target.value)
      fetchAllSubCategory(e.target.value)
    }

    const fillSubCategoryMenu = () => {
      return subCategoryList.map((item) => (
        <MenuItem value={item.subcategoryid}>{item.subcategoryname}</MenuItem>
      ));
    };

    const handleClick = async () => {
      var error = validateData();
      if (error == false) {

        const data = {
          categoryid: categoryId,
          subcategoryid: subCategoryId,
          skills: skillsName
        }
        var response = await postData("skills/submit_skills", data)
        if (response.status) {
          Swal.fire({
            icon: "success",
            text: response.message,
            toast: true,
          });
        }
        else {
          Swal.fire({
            icon: "error",
            text: response.message,
            toast: true
          });
        }
      }
    }


    return (


      <div className={classes.root}>
        <div className={classes.box}>
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
                <Select
                  label="categoryId"
                  value={categoryId}
                  onChange={handleCategoryChange}
                >
                  {fillCategoryMenu()}
                </Select>

              </FormControl>
            </Grid>
            <Grid size={6} >
              <FormControl fullWidth>
                <InputLabel>SubCategory Name</InputLabel>
                <Select label="subcategoryId" value={subCategoryId}
                  onChange={(e) => setSubCategoryId(e.target.value)}>
                  {fillSubCategoryMenu()}

                </Select>
              </FormControl>
            </Grid>

            <Grid size={12}>
              <TextField value={skillsName} helperText={formError.skillsname} error={formError.skillsname} onFocus={() => handleError("skillname", "")} onChange={(e) => setSkillsName(e.target.value)} label="skills" fullWidth />


            </Grid>
            <Grid size={6}>
              <Button variant="contained" onClick={handleClick} fullWidth>Save</Button>
            </Grid>
            <Grid size={6}>
              <Button variant="contained" fullWidth>Reset</Button>
            </Grid>
          </Grid>

        </div>

      </div>
    )
  }
}