import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
export default function Links() {
   const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [showAll, setShowAll] = useState(false);
  const Links = [
    "Download Spider App",
   "Free Job Alerts",
    "Careers",
    "Contact Us",
    "Vulnerability Disclosure Policy",
    "International Jobs",
  ];
  const Legal= [
    "Privacy Policy",
    "User Terms & Conditions",
    "Employer Terms of Service",
    "Employer FAQs",
    ]
  const Resources = [
   " Blog",
"Sitemap",


  ];

  
  
  const visibleJob1 = showAll ? Links : Links.slice(0, 5);
  const visibleJob2 = showAll ?  Legal: Legal.slice(0, 5);
  const visibleJob3 = showAll ?  Resources: Resources.slice(0, 5);
  
  

  return (<div style={{width:"100%",marginBottom:"7%"}}>
    <div style={{padding:10,width:'100%',display:'flex',alignItems:'center'}}>
       
    <div  style={{width:'80%'}}>
          <Grid container spacing={2} >
        
    
        
        
          <Grid size={matches?4:4}>
          <div  style={{fontSize:19,fontWeight:"bolder",}}>
        Links
         </div>
            {visibleJob1.map((city, index) => (
              <Grid xs={12}  key={index} >
              {city}
              </Grid>
            ))}
            
          </Grid>
          
      
        <Grid size={matches?4:4}   > 
        <div  style={{fontSize:16,fontWeight:"bolder"}}>
         Legal
         </div>
            {visibleJob2.map((city, index) => (
              <Grid xs={12}  key={index}>
                 {city}
              </Grid>
            ))}
          </Grid>


          <Grid size={matches?4:4}   > 
          <div  style={{fontSize:16,fontWeight:"bolder"}}>
         Resources
         </div>
            {visibleJob3.map((city, index) => (
              <Grid size={12}  key={index} >
                {city}
              </Grid>
            ))}
          </Grid>

          
          
      </Grid>
    </div>
    </div>
    </div>
  );
}  
