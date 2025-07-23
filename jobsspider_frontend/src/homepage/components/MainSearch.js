import { TextField, Button, Divider, Select, Box, Popper, InputAdornment } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Autocomplete from '@mui/material/Autocomplete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import React, { useState, useEffect } from "react";
import { ArrowDropDown, Close } from "@mui/icons-material";
import ErrorIcon from '@mui/icons-material/Error';
import { useNavigate } from "react-router-dom";
import { getData } from "../../services/FetchNodeServices";

export default function MainSearch({ param_skill, param_city, refresh, setRefresh, exp, setExp }) {
  const [skillname, setSkillName] = useState('')
  console.log("aaaaaaaaaa", param_skill)
  const [formError, setFormError] = useState({ filename: '' })
  const [skill, setSkill] = useState({ skillid: param_skill == undefined ? 0 : param_skill['skillid'], categoryid: param_skill == undefined ? 0 : param_skill['categoryid'], subcategoryid: param_skill == undefined ? 0 : param_skill['subcategoryid'], skills: param_skill == undefined ? '' : param_skill['skills'], cityid: param_skill == undefined ? 0 : param_city['cityid'], cityname: param_skill == undefined ? '' : param_city['cityname'] });
  const [workLocation, setWorkLocation] = useState({ cityid: param_city == undefined ? 0 : param_city['cityid'], cityname: param_city == undefined ? '' : param_city['cityname'] })
  const [topSkill, setTopSkill] = useState([])
  const [expr, setExpr] = useState(0)
  const [city, setCity] = useState([])

  const navigate = useNavigate()
  const handleError = (label, message) => {
    setFormError((prev) => ({ ...prev, [label]: message }))
  }

  const fetchAllSkill = async () => {
    var res = await getData('userinterface/fetch_all_skills')
    setTopSkill(res.data)
  }
  useEffect(function () {
    fetchAllSkill();
  }, [])

  const fetchAllCity = async () => {
    var res = await getData('userinterface/fetch_all_city')
    setCity(res.data)
  }
  useEffect(function () {
    fetchAllCity();
  }, [])



  const handleExperience = (e) => {
    alert(JSON.stringify(e.target.value))
  }





  // const validateData = () => {
  //   var error = false
  //   if (skillname.length == 0) {
  //     handleError('skillname', "Please enter a job title, company, skill or department")
  //     error = true
  //   }
  // }

  // const handleClick = async () => {
  //   var error = validateData()
  //   if (error == false) {
  //     var formData = new FormData()
  //     formData.append('skillname', skillname)
  //   }
  // }






  // const handleSearch = () => {
  //   // alert(skill)
  //   // navigate('/myfilter',{state:{skill:skill}})
  //   // if (skill)
  //   //   navigate(`/myfilter/${skill}`)


  //   var tskill=skill

  //   if(exp==undefined)
  //     tskill['exp']=expr
  //   else
  //     tskill['exp']=exp
  //   const queryString = new URLSearchParams(skill).toString();
  //   navigate(`/myfilter?${queryString}`);
  //   try{setRefresh(!refresh)}catch(e){}

  const handleSearch = () => {
    var tskill = skill
    if (exp == undefined)
      tskill['exp'] = expr
    else
      tskill['exp'] = exp




    try {
      tskill['cityid'] = workLocation['cityid']
      tskill['cityname'] = workLocation['cityname']

      console.log("zzzzzzzzzzzzzzzzzzzzzzzzz1", param_skill)

    }
    catch (e) { }
    //setSkill(tskill)
    setSkill(tskill)
    const queryString = new URLSearchParams(skill).toString();
    navigate(`/myfilter?${queryString}`);
    try { setRefresh(!refresh) } catch (e) { }

  };


















  // const topSkill = [
  //   { Skillid: 1, Skill: 'MERN' },
  //   { Skillid: 2, Skill: 'Node.js' },
  //   { Skillid: 3, Skill: 'React.js' },
  //   { Skillid: 4, Skill: 'Angular' },
  //   { Skillid: 5, Skill: 'Vue.js' },
  //   { Skillid: 6, Skill: 'Python' },
  //   { Skillid: 7, Skill: 'Django' },
  //   { Skillid: 8, Skill: 'Ruby on Rails' },
  //   { Skillid: 9, Skill: 'Java' },
  // ]
  const experience = [
    { expid: 0, exp: "fresher" },
    { expid: 1, exp: "1 year" },
    { expid: 2, exp: "2 years" },
    { expid: 3, exp: "3 years" },
    { expid: 4, exp: "4 years" },
    { expid: 5, exp: "5 years" },
    { expid: 6, exp: "6 years" },
    { expid: 7, exp: "7 years" },
    { expid: 8, exp: "8 years" },
    { expid: 9, exp: "9+ years" }
  ];
  // alert(JSON.stringify(experience[exp]))
  // const worklocation = [
  //   { cityid: 1, cityname: "Mumbai" },
  //   { cityid: 2, cityname: "Delhi" },
  //   { cityid: 3, cityname: "Bengaluru" },
  //   { cityid: 4, cityname: "Hyderabad" },
  //   { cityid: 5, cityname: "Chennai" },
  //   { cityid: 6, cityname: "Pune" },
  //   { cityid: 7, cityname: "Kolkata" },
  //   { cityid: 8, cityname: "Ahmedabad" },
  //   { cityid: 9, cityname: "Itanagar" },
  // ];
  const CustomPopper = (props) => (
    <Popper
      {...props}
      placement="bottom-start"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 25],  // Slightly reduced vertical offset
          },
        },
      ]}
      style={{
        ...props.style,
        height: 'auto',  // Let the content determine height
        maxHeight: 180,  // Reduced max height
        width: 350,
        overflow: 'hidden', // Remove internal scroll
        marginTop: '8px'
      }}
    />
  );

  const CustomPopper2 = (props) => (
    <Popper
      {...props}
      placement="bottom-start"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 25],  // Slightly reduced vertical offset
          },
        },
      ]}
      style={{
        ...props.style,
        height: 'auto',
        maxHeight: 180,
        width: 200,
        marginTop: "15px",
        overflow: 'hidden', // Remove internal scroll
      }}
    />
  );

  const CustomPopper3 = (props) => (
    <Popper
      {...props}
      placement="bottom-start"
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 25],  // Slightly reduced vertical offset
          },
        },
      ]}
      style={{
        ...props.style,
        height: 'auto',
        maxHeight: 180,
        width: 350,
        overflow: 'hidden', // Remove internal scroll
      }}
    />
  );

  var update = [{ userimage: "radha.jpg", message: "Radha got job 6 hours ago" },
  { userimage: "mayank.webp", message: " Vidhi Sharma 6 hours ago" },
  { userimage: "prachi.webp", message: " kuldeep singh got job 2 hours ago" },
  { userimage: "rahul.jpg", message: " Aman got job 4 hours ago" },
  { userimage: "prachi.webp", message: "Prachi got job 9 hours ago" },
  { userimage: "mayank.webp", message: "Deepak Kumar got job 3 hours ago" },
  { userimage: "rahul.jpg", message: "Dharmender has fixed an interview" },
  ]

  const [open, setOpen] = React.useState(false)

  // const [city, setCity] = useState({})

  // const handleCities = (e, newValue) => {
  //   setCities(newValue)
  // }

  return (<div>
    {/* {`xxxxxxxxxxxxxxxxxxxxxxx ${JSON.stringify(param_skill)}`} */}
    <div style={{
      display: 'flex', alignItems: 'center', borderRadius: 12, padding: 5, position: 'relative', zIndex: 1, height: '50px', width: "125vh", border: Object.values(formError).some((error) => error)
        ? '0.5px solid #e84393' : "",
      transition: 'border-color 0.3s ease', backgroundColor: "#fff"
    }}>

      <div style={{ marginLeft: "3px", display: "flex" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <SearchIcon style={{ width: "18px", color: 'grey', marginRight: "5px" }} />
        </div>
        <div style={{ width: '155px' }}>
          <Autocomplete
            sx={{ width: "400px", '& .MuiAutocomplete-paper': { maxHeight: 150, } }}
            options={topSkill.slice()}
            // value={param_skill == undefined ? { Skillid: 0, Skill: "" } : JSON.parse(param_skill)}
            value={skill}
            onChange={(event, newValue) => {
              setSkill(newValue);
            }}
            PopperComponent={CustomPopper}
            autoHighlight
            getOptionLabel={(option) => option.skills}
            renderOption={(props, option) => (
              <Box
                component="li"
                {...props}
              >
                <div style={{ display: 'flex', width: '50px', marginRight: "20px", backgroundColor: "rgb(244, 242, 246)", height: '50px', borderRadius: '2px', alignItems: "center", justifyContent: "center", justifySelf: "center" }}>
                  <SearchIcon style={{ color: '#8395a7', width: "30px", height: "30px" }} />
                </div>
                {option.skills}
              </Box>
            )}
            renderInput={(params) => (
              <TextField

                // value={skillname}
                // error={!!formError.skillname}
                // onFocus={() => handleError('skillname', '')}
                // onChange={(e) => setSkillName(e.target.value)}

                // fullWidth
                {...params}

                placeholder="Search jobs by 'skill'"
                variant="standard"
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: '15px'
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                  endAdornment: null,
                }}
              />
            )}
          />
        </div>
        {formError.skillname && (
          <div
            style={{
              color: '#e84393',
              fontSize: '12px',
              position: 'absolute',
              top: '90px', // Adjust this to control spacing
              left: '25px', // Adjust to align with the input field

            }}
          >
            {formError.skillname}
          </div>
        )}
      </div>



      <div style={{ borderLeft: '1px solid  #bdc3c7', width: '10px', height: '45px' }}>
      </div>


      <Autocomplete
        sx={{ width: "200px" }}
        options={experience}
        onChange={(event, newValue) => {
          if (newValue) {
            try {
              setExp(newValue.expid);
            } catch (e) {
              setExpr(newValue.expid);
            }

          }
        }}

        value={experience[exp]}
        PopperComponent={CustomPopper2}
        autoHighlight
        // onChange={(e, v) => setSkill(v)}
        //  onChange={(e, v) => setExp(v)}
        // clearIcon={<Close onClick={() => setOpen(true)} />}
        popupIcon={Object.keys(exp || {}).length > 0 ? "" : <KeyboardArrowDownIcon />}
        getOptionLabel={(option) => option.exp}
        renderOption={(props, option) => (
          <Box
            component="li"

            {...props}
          >
            <div style={{ display: 'flex', width: '50px', backgroundColor: "rgb(244, 242, 246)", height: '50px', borderRadius: '2px', fontFamily: "Ubuntu", marginRight: '20px', alignItems: "center", justifyContent: "center", justifySelf: "center" }}>
              <SearchIcon style={{ color: '#8395a7', width: "30px", height: "30px" }} />
            </div>
            {option.exp}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}

            placeholder="Your Experience"
            variant="standard"
            sx={{
              '& .MuiInputBase-input': {
                fontSize: '15px'
              },
            }}
            InputProps={{
              ...params.InputProps,
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <WorkOutlineOutlinedIcon />
                </InputAdornment>
              )

            }}
          />
        )}
      />

      <div style={{ borderLeft: '1px solid  #bdc3c7', width: '10px', height: '45px' }}>
      </div>
      <div style={{ display: 'flex', alignItems: "center" }} >
        <div style={{ marginRight: '5px', display: "flex", alignItems: "center" }}>
          <RoomOutlinedIcon style={{ width: "5px", color: 'grey', width: "18px", marginRight: "5px" }} />
        </div>
        <div>
          <Autocomplete
            PopperComponent={CustomPopper3}
            sx={{ width: "260px" }}
            options={city}
            value={workLocation}
            autoHighlight
            onChange={(event, newValue) => {
              setWorkLocation(newValue);

            }}

            popupIcon={Object.keys(city || {}).length > 0 ? "" : ""}
            getOptionLabel={(option) => option.cityname}
            renderOption={(props, option) => (
              <Box
                component="li"
                {...props}
              >
                <div style={{ display: 'flex', marginRight: '20px', width: '50px', backgroundColor: "rgb(244, 242, 246)", height: '50px', borderRadius: '2px', alignItems: "center", fontFamily: "Ubuntu", justifyContent: "center", justifySelf: "center", }}>
                  <SearchIcon style={{ color: '#8395a7', width: "30px", height: "30px" }} />
                </div>
                {option.cityname}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search for an area or city"
                variant="standard"
                sx={{
                  '& .MuiInputBase-input': {
                    fontSize: '15px'
                  },
                }}
                InputProps={{
                  ...params.InputProps,
                  disableUnderline: true,
                }}
              />
            )}
          />
        </div>

      </div>

      <Button onClick={() => handleSearch()} style={{ width: 170, borderRadius: "5px", height: "40px", fontWeight: "bolder", fontSize: 12, background: '#b03a84', color: "#fff" }}>Search jobs</Button>

    </div>
  </div>)

}

