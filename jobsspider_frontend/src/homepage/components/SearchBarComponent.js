import { TextField, Button, Divider, Select, Box, Popper } from "@mui/material"
import UpdateScroll from "./UpdateScroll"

import MainSearch from "./MainSearch";
import {useTheme}from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ShrinkSearchComponent from "./ShrinkSearchComponent";
import SingleShrinkSearchComponent from "./SingleShrinkSearchComponent";
import homepage from"../../assets/HomePage.png"

export default function SearchBarComponent() {
  
  const theme=useTheme()
  const matches=useMediaQuery(theme.breakpoints.up('sm'));
  const topSkill = [
    { Skillid: 1, Skill: 'MERN' },
    { Skillid: 2, Skill: 'Node.js' },
    { Skillid: 3, Skill: 'React.js' },
    { Skillid: 4, Skill: 'Angular' },
    { Skillid: 5, Skill: 'Vue.js' },
    { Skillid: 6, Skill: 'Python' },
    { Skillid: 7, Skill: 'Django' },
    { Skillid: 8, Skill: 'Ruby on Rails' },
    { Skillid: 9, Skill: 'Java' },
  ]
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
  ];

  

  var update = [{ userimage: "radha.jpg", message: "Radha got job 6 hours ago" },
  { userimage: "mayank.webp", message: " Vidhi Sharma 6 hours ago" },
  { userimage: "prachi.webp", message: " kuldeep singh got job 2 hours ago" },
  { userimage: "rahul.jpg", message: " Aman got job 4 hours ago" },
  { userimage: "prachi.webp", message: "Prachi got job 9 hours ago" },
  { userimage: "mayank.webp", message: "Deepak Kumar got job 3 hours ago" },
  { userimage: "rahul.jpg", message: "Dharmender has fixed an interview" },
  
  ]


  return (
    <div style={{  width: "100%", height: "600px", backgroundColor:  "#f1f2f6" }}>

      <div style={{ display: 'flex',alignItems:"center" }} />
       <div style={{ fontSize:matches? 24:16, fontWeight: 'bold', display: 'flex', justifyContent: 'flex-start', marginLeft:matches?95: 20, marginTop:matches? 110:70, color: "#b03a84" }}>
        INDIA’S #1 JOB PLATFORM
      </div>
      <div style={{ fontSize:matches? 40:32, fontWeight: 'bolder', display: 'flex',  justifyContent:'flex-start', marginLeft:matches?95: 20, marginTop:matches? 25:15 }}>
        One Search, Millions of Jobs
      </div>
      <div style={{ fontSize:matches? 25:18, display: 'flex', justifyContent: 'flex-start', marginLeft:matches?95: 20, marginBottom:matches? "60px":'60%', marginTop: "5px" }}>
        Discover 50 lakh+ career opportunities
      </div>
     {matches?<div style={{marginLeft:'85px'}}>
        <MainSearch/>
      </div>:<SingleShrinkSearchComponent/>}
        <div >
        <img src={homepage} style={{ width:matches?'':'200px', marginLeft:matches?'70%':'30%',marginBottom:matches?'':60, marginTop:matches?-391:-500}} />
      </div>
      {/* <div style={{ marginBottom: '10px', marginTop: "100px" }}>
         <UpdateScroll items={update} />
      </div> */}
    </div>
    
  )

}


