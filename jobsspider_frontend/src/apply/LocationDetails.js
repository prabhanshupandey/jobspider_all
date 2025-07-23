import {Divider} from "@mui/material"
import map from "../assets/map.png"
import{ Paper} from "@mui/material"
import Button from '@mui/material/Button';
import { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from "@mui/icons-material/MyLocation";
export  default function LocationDetails({progress=3}){
             

      return(<div style={{background:"#fff", width:'100%', height:"100vh",display:"flex",justifyContent:"center",alignItems:"center", border:"1px solid black"}}>
       <div  style={{display:"flex",width:"100%",height:"auto",backgroundColor:"pink",justifyContent:"center"}}>
             

          

    <Paper style={{width:"55%", height:"73vh",background:"#fff",borderRadius:"8px"}}>
                <div style={{  width: "95%",height: "auto" , display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding:40}} >
                              <div style={{ fontSize: "18px", fontWeight: 600 ,display:"flex",alignItems:"center"}}>
                              <div>          
                             <ArrowBackIcon style={{marginRight:"5px"}}/>
                             </div>  
                             Location  Details
                              </div>
                              <div style={{  width: "60%", height: 12, borderRadius: 8, backgroundColor: "#e5e7eb",marginRight:"30px" }} >
                              <div
                         style={{
                        height: '100%',
                        width:` ${progress}%`,
                        backgroundColor: ' #165B48',
                        borderRadius: '8px',
                        transition: 'width 0.3s ease-in-out',
                      }}
                    />
                  </div>
                  </div>  
               
              
           <Divider  style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%"}}/> 
          <div style={{paddingTop:30}}>
     <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
      <img src={map} style={{width:"20%"}}/> 
      </div>       
      
     <div style={{fontWeight:600, fontSize:"16px", lineHeight:"24px",color:"#190A28",textAlign:"center"}}>
     Discover the best jobs near you       
     </div>
     <div style={{
  fontSize: "14px",
  lineHeight: "20px",
  marginLeft: "36.5%",
  textAlign: "center",
  borderRadius: "5px", 
  backgroundColor:'#93C5FD1A',
  width: "27%",
  marginBottom: "20px",
  marginTop: "10px",
  padding: "6px 0" 
}}>
  Please share your current location
</div>

     <div style={{fontSize:"12px",lineHeight:"16px", color:"#8C8594",textAlign:"center"}}>
     This will help us find the best jobs for you in your current city or a nearby city       
     </div>
     <Divider  style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%",paddingTop:35}}/> 
     </div>
     <div style={{marginLeft:"28px",marginTop:"15px"}}>
     <Button
        sx={{
          backgroundColor: "#fff",
          borderRadius: "4px",
          border: "1px solid #20826880", 
          textTransform: "none",
          width: "95%",
          height: "40px",
          color: "#165B48",
          '&:hover': {
            border: "1px solid #165B48", 
          },
        }}
      >
        Search City
      </Button>




<div style={{marginTop:"15px"}}>


<Button
      variant="contained"
      startIcon={<LocationOnIcon />}
      sx={{
        backgroundColor: "#2D8A6D",
        color: "#fff",
        textTransform: "none",
        width: "95%",
        height: "50px",
        fontWeight: "bold",
        fontSize: "18px",
        "&:hover": {
          backgroundColor: "#165B48",
        },
      }}
    >
      Pick current location
    </Button>

     </div>
     </div>
     </Paper>
     </div>
   
      </div>)
         }