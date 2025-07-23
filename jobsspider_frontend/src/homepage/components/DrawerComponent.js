import * as React from 'react';
import Box from '@mui/material/Box';
import Accordion from '@mui/material/Accordion';
import Drawer from '@mui/material/Drawer';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Divider from '@mui/material/Divider';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import { Paper } from '@mui/material';

export default function DrawerComponent({ options, openDrawer, setOpenDrawer }) {
  var menuoptions = Object.keys(options);

  const DrawerList = (
    <Paper elevation ={0}style={{fontFamily:"Ubuntu"}}>
       <div>
            <img src='/spider.png' style={{ width:50}} />
          </div>
      {/* father */}
      <Accordion disableGutters sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        > 
        <Typography component="span" style={{display:"flex", marginTop:"10px",alignItems:"center",fontFamily:"Ubuntu"}}>
        <WorkOutlineOutlinedIcon style={{width:"15px", marginRight:"4px",color:"#a5b1c2"}} />
          Jobs
          </Typography>
      
    </AccordionSummary>

        <AccordionDetails>
          {/* 1 */}
          <Accordion  disableGutters elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
        
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <div>
                <Typography style={{color:"#a5b1c2"}} component="span">Jobs by type</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  style={{color:"#a5b1c2"}}>Work From Home</Typography>
              <Typography style={{color:"#a5b1c2"}}>Part Time Jobs</Typography>
              <Typography style={{color:"#a5b1c2"}}>Freshers Jobs</Typography>
              <Typography style={{color:"#a5b1c2"}}>Women Jobs</Typography>
              <Typography style={{color:"#a5b1c2"}}>Full Time Jobs </Typography>
              <Typography  style={{color:"#a5b1c2"}}>Night Shift Jobs</Typography>
            </AccordionDetails>
          </Accordion>

          {/* 2 */}
          <Accordion  disableGutters  elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <div>
                <Typography  style={{color:"#a5b1c2"}}component="span">
                  Jobs by city
                  </Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography  style={{color:"#a5b1c2"}}> Jobs in Aurangabad</Typography>
              <Typography  style={{color:"#a5b1c2"}}> Jobs in Agra</Typography>
              <Typography  style={{color:"#a5b1c2"}}>Jobs in Mumbai</Typography>
              <Typography  style={{color:"#a5b1c2"}}>Jobs in pune</Typography>
              <Typography  style={{color:"#a5b1c2"}}>Jobs in Banglore </Typography>
              <Typography  style={{color:"#a5b1c2"}}>All Other Cities</Typography>
            </AccordionDetails>
          </Accordion>



          {/* 3 */}
          <Accordion  disableGutters  elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              
              <div>
                <Typography style={{color:"#a5b1c2"}} component="span">Jobs by Department</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Sales & BD</Typography>
              <Typography>Customer Support</Typography>
              <Typography>Delivery/Driver/Logistics job</Typography>
              <Typography>Admin/ Back Office/Computer Operator</Typography>
              <Typography>Jobs By Qualification </Typography>
              <Typography>Restuarant/Hospitality/Toursim job</Typography>
            </AccordionDetails>
          </Accordion>

          {/* 4*/}
          <Accordion  disableGutters  elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <div>
                <Typography  style={{color:"#a5b1c2"}}component="span">Jobs by Company</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>Swiggy</Typography>
              <Typography>Zomato</Typography>
              <Typography>Blinkit</Typography>
              <Typography>Uber</Typography>
              <Typography>All Other Company </Typography>

            </AccordionDetails>
          </Accordion>


          {/* 5 */}
          <Accordion  disableGutters  elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
            >
              <div>
                <Typography  style={{color:"#a5b1c2"}}component="span">Jobs by Qualification</Typography>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>10th Pass Jobs</Typography>
              <Typography>12th Pass Jobs</Typography>
            </AccordionDetails>
          </Accordion>

        </AccordionDetails>

      </Accordion>




      {/* 2 */}

      <Accordion  disableGutters  elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
     
        
       
          <div>
            <Typography component="span" style={{display:"flex",alignItems:"center",fontFamily:"Ubuntu"}}>
                
            <StarOutlineIcon style={{width:"18px",marginRight:"4px",color:"#a5b1c2"}}/>
              Carrer Compass
              </Typography>
          </div>
        </AccordionSummary>



        <AccordionDetails>
          <Typography style={{color:"#a5b1c2",marginBottom:"3px"}}>Resume Builder</Typography>
          <Typography style={{color:"#a5b1c2",marginBottom:"3px"}}>Cover Letter</Typography>
          <Typography style={{color:"#a5b1c2", marginBottom:"3px"}}>Resume Checker</Typography>
        </AccordionDetails>
      </Accordion>


    
   
  
    <div>
    
      <Typography style={{display:"flex", alignItems:"center",marginLeft:'15px',marginTop:"10px"}}>
      < EmojiEventsIcon style={{width:"18px",marginRight:"7px",color:"#a5b1c2"}} />
        Contests
        <div style={{display:"flex" ,justifyContent:"center",marginLeft:"5px" ,marginTop:"5px",width:"25px", height:"14px",fontSize:"8px",background: "linear-gradient(339deg, rgba(253,29,29,1) 14%, rgba(252,176,69,1) 100%)", borderRadius:"2px",color:"#fff",fontFamily:"Ubuntu"}}>
          NEW
        </div>
        </Typography>
        </div>

      <div>
        <Typography style={{display:"flex", alignItems:"center",marginLeft:'15px',marginTop:"10px"}}>
          <SchoolOutlinedIcon style={{width:"18px",marginRight:"4px", marginTop:"5px",color:"#a5b1c2"}}/>
          Degree
          <div style={{display:"flex" ,justifyContent:"center",marginLeft:"5px" ,marginTop:"5px",width:"25px", height:"14px",fontSize:"8px",background: "linear-gradient(339deg, rgba(253,29,29,1) 14%, rgba(252,176,69,1) 100%)", borderRadius:"2px",color:"#fff",fontFamily:"Ubuntu"}}>
          NEW
        </div>
          </Typography>
      </div>


      <div>

        <Typography style={{display:"flex", alignItems:"center",marginLeft:'15px', marginTop:'10px'}}>
       < NotificationsNoneIcon style={{width:"18px",marginRight:"4px",color:"#a5b1c2"}}/>
          Free Job alerts on WhatsApp
          </Typography>
      </div>
      <Divider style={{border:"0.2px light  grey", marginTop:"20px"}} />
      <div>
        <Typography style={{display:"flex", alignItems:"center",marginLeft:'15px', marginTop:'20px'}}>
       < LocalPhoneOutlinedIcon style={{width:"18px",marginRight:"4px", marginTop:"5px",color:"#a5b1c2"}} />
          Contact us
          </Typography>
      </div>
      <div>
        <Typography style={{display:"flex", alignItems:"center",marginTop:'10px',marginLeft:"15px"}}>
       
        <FileDownloadOutlinedIcon style={{width:"18px",marginRight:"4px", marginTop:"5px",color:"#a5b1c2"}}/>
     
          Download Spider App
          </Typography>
      </div>


      <Accordion defaultExpanded disableGutters  elevation={0} sx={{boxShadow: "none",border: "none","&::before": { display: "none" }}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}

        >  <div>
          <Typography component="span" style={{display:"flex", alignItems:"center",marginTop:'10px'}}>
          <PersonOutlinedIcon style={{width:"18px", marginRight:"5px",color:"#a5b1c2"}}/>
            Login
            </Typography>
            </div>

        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{color:"#a5b1c2",marginBottom:"3px"}}>Candiate</Typography>
          <Typography style={{color:"#a5b1c2"}}>Employer</Typography>
        </AccordionDetails>
      </Accordion>


    </Paper>
  )


















  return (
    <div>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
