import { TextField, Button, Divider } from "@mui/material";
import { homeStyles } from "./HomePageCss";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Header from "./components/Header";
import React, { useEffect, useState } from 'react'
import JobAccordion from './JobAccordion';
import FindJob from "./components/FindJob";
import Footer from "./components/Footer";
import main_girl from "../assets/main_girl.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import UserReviewComponent from "./components/UserReviewComponent"
import CompanyName from "./components/CompanyName";
import ScrollComponent from "./components/ScrollComponent";
import RecentUpdateComponent from "./components/RecentUpdateComponent";
import SpiderComponent from "./components/SpiderComponent";
import TrendingJobsComponent from "./components/TrendingJobsComponent";
import MainSearch from "./components/MainSearch";
import SearchBarComponent from "./components/SearchBarComponent";
import { getData } from "../services/FetchNodeServices";
import JobCity from "./components/JobCity";
import PopularJobs from"./components/PopularJobs";
import JobComponent from "./components/JobComponent";
import HireCity from"./components/HireCity";
import GetResumeHelp from "./components/GetResumeHelp";
import TwoPeopleHireComponent from "./components/TwoPeopleHireComponent";
import JobsByDepartment from "./components/JobsByDepartment";
import UpdateScroll from "./components/UpdateScroll"
import Links from "./components/Links";


export default function CreateAccountFirst() {
const[topCompanies,setTopCompanies]=useState([]);
const[trendingJobs,setTrendingJobs]=useState([])
var update = [{ userimage: "radha.jpg", message: "Radha got job 6 hours ago" },
  { userimage: "mayank.webp", message: " Vidhi Sharma 6 hours ago" },
  { userimage: "prachi.webp", message: " kuldeep singh got job 2 hours ago" },
  { userimage: "rahul.jpg", message: " Aman got job 4 hours ago" },
  { userimage: "prachi.webp", message: "Prachi got job 9 hours ago" },
  { userimage: "mayank.webp", message: "Deepak Kumar got job 3 hours ago" },
  { userimage: "rahul.jpg", message: "Dharmender has fixed an interview" },
  
  ]












const fetchAllTopCompanies= async()=>{
   var  res=await getData('userinterface/user_top_company_display')
   setTopCompanies(res.data)
}

const fetchAllTrendingJobs= async()=>{
  var  res=await getData('userinterface/trending_jobs')
  setTrendingJobs(res.data)

}
useEffect(function(){
 fetchAllTopCompanies()
 fetchAllTrendingJobs()
},[])

  const classes = homeStyles();
  var color=['#e67e22','#ffeaa7','#fd79a8','#74b9ff','#2ecc71']
 var dataTrending=[{jobtypeid:5,trending:'Trending @ #1',jobtype:'Job for Freshers',color:'#e67e22',image:'freshers.webp'},
  {jobtypeid:1,trending:'Trending @ #2',jobtype:'Work from home Jobs',color:'#ffeaa7',image:'work-from-home-jobs.webp'},
  {jobtypeid:2,trending:'Trending @ #3',jobtype:'Jobs for Women',color:'#fd79a8',image:'women-jobs.webp'},
  {jobtypeid:3,trending:'Trending @ #4',jobtype:'Part time Jobs',color:'#74b9ff',image:'part-time-jobs.webp'},
  {jobtypeid:4,trending:'Trending @ #5',jobtype:'International Jobs',color:'#2ecc71',image:'international-jobs.webp'},
 ] 




  return (
    <div >
      <div style={{ display: 'flex', flexDirection: 'column'}} >
        <Header />
        </div>

        <div style={{width:"100%",background:"green",}}>
          <SearchBarComponent />
        </div>
        <Divider />
         
      
        <div style={{ margin: 40, width: '90%'}}>
          <TrendingJobsComponent items={trendingJobs} colors={color}  />
        </div> 


        <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginTop: 80,
          background: '#DFF2EB',
        }}
      >
        <div
          style={{
            // fontSize: matches?26:33,
            fontSize:33,
            fontWeight: "bolder",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 20,
            paddingBottom: 5,
          }}
        >
          Job Openings in Top companies
        </div>
        <div style={{ margin: 40, width: "90%" }}>
          <ScrollComponent data={topCompanies} />
        </div>
       
      </div>
          {/* <div style={{width:"100%",marginTop:"50px"}}>
          <ScrollComponent data={topCompanies} />
        </div> */}
       <div style={{ marginTop: "80px" }}>
          <UserReviewComponent />
        </div>
         
          <div style={{width:"100%",display:"flex",marginTop:"10%",alignItems:"center",justifyContent:"center"}}>
          <SpiderComponent />
        </div>
         <div style={{width:"100%",height:"100%",display:"flex",marginTop:"10%",alignItems:"center",justifyContent:"center"}}>
          <TwoPeopleHireComponent/>
         </div>
         {/* <div style={{height:"200px",marginTop:"15px"}}>
          <div style={{fontSize:"45px", fontWeight:"bold", padding:"30px",display:"flex",justifyContent:"center"}}>
         Trending job Updates on Spider
         </div>
            <UpdateScroll items={update} /> 
         </div> */}
        <div>
          <GetResumeHelp/>
         </div>
      <div style={{width:"100%",backgroundColor: "rgb(244, 242, 246)",justifyContent:"center",display:"flex",flexDirection:"column",alignItems:"center"}}>
         <div style={{width:'80%'}}><JobCity/></div>
         
         <div style={{width:'80%'}}><HireCity/></div>
         
         <div style={{width:'80%'}}><PopularJobs/></div>
         
         <div style={{width:'80%'}}><JobsByDepartment/></div>
         
         <div style={{width:'80%'}}><Links/></div>

        
       
      </div>

      <div>
      <Footer/>
      </div>  
    </div> 
   
  )
}



















