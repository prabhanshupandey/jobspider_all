import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {Divider} from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function Popularjobs() {
  const theme = useTheme();
const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [showAll, setShowAll] = useState(false);
  const popularjobs1 = [
    "Delivery Person Jobs",
    "Accounts / Finance Jobs",
    "Sales (Field Work)",
    "Human Resource",
    "Backoffice Jobs",
    "Engineering Jobs",
    "Design / Creative Jobs",
    "Legal Jobs",
    "Logistics / Supply Chain Jobs",
    "Hospitality Jobs",
    "Internships",
    "Freelance Jobs",
    "Consulting Jobs",
    "Government Jobs",
    "NGO / Non-Profit Jobs",
,    
    
  ];
  const popularjobs2 = [
    "Business Development ",
    " Telecaller / BPO",
    " Work from Home Jobs",
    "Part Time Jobs",
    "Full Time Jobs",
    "Data Entry Jobs",
    "Content Writing Jobs",
    "Graphic Design Jobs",
    "Social Media Jobs",
    "Event Management Jobs",
    "Retail Jobs",
    "Manufacturing Jobs",
    "Construction Jobs",
    "Automotive Jobs",
    "Aviation Jobs"
  ]
  const  popularjobs3= [
    "Night Shift Jobs",
    "Freshers Jobs",
    "Jobs for Women",
    "Jobs for 10th pass",
    "Jobs for 12th pass",
    "Research & Development Jobs",
    "Quality Assurance Jobs",
    "Project Management Jobs",
    "Administrative Jobs",
    "Security Jobs",
    "Journalism / Media Jobs",
    "Photography Jobs",
    "Fitness / Wellness Jobs",
    "Real Estate Jobs",
    "Travel / Tourism Jobs",


  ];

  
  
  const visibleJob1 = showAll ? popularjobs1 : popularjobs1.slice(0, 4);
  const visibleJob2 = showAll ? popularjobs2 : popularjobs2.slice(0, 4);
  const visibleJob3 = showAll ? popularjobs3 : popularjobs3.slice(0, 4);
  
  

  return (
    <div style={{width:"100%",display:"flex", alignItems:"center",padding:"10px"}}>
           <div  style={{width:"80%"}}>
            <Grid container spacing={2} >

          
           <Grid size={12}>
           <div  style={{fontSize:19,fontWeight:"bolder"}}>
              Popular Jobs
          </div>
         </Grid>
        
      
          <Grid size={ matches?4:6}>
            {visibleJob1.map((city, index) => (
              <Grid size={12}  key={index} >
              {city}
              </Grid>
            ))}
            
          </Grid>
          
       
        <Grid size={ matches?4:6} > 
            {visibleJob2.map((city, index) => (
              <Grid size={12}  key={index} >
                 {city}
              </Grid>
            ))}
          </Grid>


           {matches?<Grid size={4} > 
            {visibleJob3.map((city, index) => (
              <Grid size={12}  key={index} >
                {city}
              </Grid>
            ))}
          </Grid>:<></>  }

         <Grid  size={12}style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
         <Button 
            variant="standard"
            onClick={() => setShowAll(!showAll)}
            style={{ marginTop: "16px",color:"",fontFamily:"Ubuntu",color:"#2d3436",}}
          >
            {showAll ? "View Less" : "View More"}
            {showAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </Button>
         
          </Grid> 
          
      
      </Grid>
      { matches? <Divider style={{border:"0.5px light grey",borderRadius:"1px"}}>
      </Divider> :<></>}
      
     </div>
     </div>
    
  );
}
