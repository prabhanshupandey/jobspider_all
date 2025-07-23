import { TextField,InputAdornment, Button, Divider, Select, Box, Popper } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';
import Autocomplete from '@mui/material/Autocomplete';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import React, { useState } from "react";



import Grid from "@mui/material/Grid2";

export default function ShrinkSearchComponent() {

  const experience = [
    { expid: 1, exp: "fresher" },
    { expid: 2, exp: "1 year" },
    { expid: 3, exp: "2 years" },
    { expid: 4, exp: "3 years" },
    { expid: 5, exp: "4 years" },
    { expid: 6, exp: "5 years" },
    { expid: 7, exp: "6 years" },
    { expid: 8, exp: "7 years" },
    { expid: 9, exp: "8 years" },
    { expid: 10, exp: "9+ years" }
  ];

  const worklocation = [
    { cityid: 1, cityname: "Mumbai" },
    { cityid: 2, cityname: "Delhi" },
    { cityid: 3, cityname: "Bangalore" },
    { cityid: 4, cityname: "Hyderabad" },
    { cityid: 5, cityname: "Chennai" },
    { cityid: 6, cityname: "Pune" },
    { cityid: 7, cityname: "Kolkata" },
    { cityid: 8, cityname: "Ahmedabad" },
    { cityid: 9, cityname: "Jaipur" },
    { cityid: 10, cityname: "punjab" },
  ];

  const CustomPopper = (props) => (
    <Popper
      {...props}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0, 120]



          },
        },
      ]}



      style={{
        ...props.style,
        marginTop: "500",
        width: 500,
        overflowY: "auto",

      }}
    />
  )
  const CustomPopper2 = (props) => (
    <Popper
      {...props}
      modifiers={[
        {
          name: "offset",
          options: {
            offset: [0,70],



          },
        },
      ]}

      style={{
        ...props.style,
        marginTop: "500",
        width: 500,
        overflowY: "auto",

      }}

    />
  );



  const [open, setOpen] = React.useState(false)
  const [skill, setSkill] = useState({})
  const [city, setCity] = useState({})


  return (<div>
    <div style={{ width: "500px", height: "300px", backgroundColor: "#fff" }}>
      <Grid space container={2}>


        <Grid size={12}>
        <TextField
  placeholder="Search jobs by 'company'"
   
  variant="standard"
  style={{
    backgroundColor: "rgb(244, 242, 246)",
    marginTop: "5px",
    fontSize: "15px",
    width:"500px",
    height:"45px",

  }}
          InputProps={{
            disableUnderline:true,
           
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon/>
              </InputAdornment>
            ),
          }}

/>
        </Grid>

        <Grid size={12}>

          <Autocomplete
            fullWidth
            style={{ marginTop: "8px" 
             }}
            options={experience}
            PopperComponent={CustomPopper}
            autoHighlight
            onChange={(e, v) => setSkill(v)}
            // clearIcon={<Close onClick={() => setOpen(true)} />}
            popupIcon={Object.keys(skill || {}).length > 0 ? "" : <KeyboardArrowDownIcon />}
            getOptionLabel={(option) => option.exp}
            renderOption={(props, option) => (
              <Box
                component="li"

                {...props}
              >
                <div style={{ display: 'flex', width: '50px', backgroundColor: "rgb(244, 242, 246)", height: '50px', borderRadius: '2px', marginRight: '7px', alignItems: "center", fontFamily: "Ubuntu", justifyContent: "center", justifySelf: "center" }}>
                  <SearchIcon style={{ color: '#8395a7', width: "30px", height: "30px" }} />
                </div>
                {option.exp}
              </Box>
            )}
            renderInput={(params) => (
            

              <TextField

                style={{ backgroundColor: "rgb(244, 242, 246)" ,width:"500px",
                  height:"45px"}}

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
                   disableUnderline:true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <WorkOutlineOutlinedIcon />
                    </InputAdornment>
                  )

                  // endAdornment:null  


                }}

              />

            )}

          />
  

        </Grid>

        <Grid size={12}>

          <Autocomplete
            PopperComponent={CustomPopper2}
            style={{ marginTop: "8px", display:"flex",
              alignItems:"center",}}
            fullWidth
            options={worklocation}
            autoHighlight
            onChange={(e, v) => setCity(v)}
            popupIcon={Object.keys(city || {}).length > 0 ? "" : ""}
            getOptionLabel={(option) => option.cityname}
            renderOption={(props, option) => (
              <Box
                component="li"
                {...props}
              >
                <div style={{ display: 'flex', width: '50px', backgroundColor: "rgb(244, 242, 246)", height: '50px', borderRadius: '2px', marginRight: '7px', alignItems: "center", fontFamily: "Ubuntu", justifyContent: "center", justifySelf: "center"}}>
                  <SearchIcon style={{ color: '#8395a7', width: "30px", height: "30px", alignItems: "center" }} />
                </div>
                {option.cityname}
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                style={{ backgroundColor: "rgb(244, 242, 246)" , width:"500px",
                  height:"45px", display:"flex",
                  alignItems:"center"}}
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
                 
                  startAdornment: (
                    <InputAdornment position="start">
                      <RoomOutlinedIcon/>
                    </InputAdornment>
                  )

                }}
              />
            )}
          />

          <Grid size={12}>

            <Button fullWidth style={{ borderRadius: "5px", height: "40px", marginRight: "9px", fontWeight: "bolder", marginTop: "5px", fontSize: 12, background: "#218c74", color: "#fff" }}>Search jobs</Button>
          </Grid>



        </Grid>
      </Grid>
    </div>
  </div>)

}