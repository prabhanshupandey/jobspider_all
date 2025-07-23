import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Typography, List, ListItem } from '@mui/material';
import { Link, Button, Divider } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




export default function Footer() {
     const theme = useTheme();
      const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box
      sx={{
        height: 300,
        width:matches?490: "100%",
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding:2,
        border: '2px solid grey',
        backgroundColor: '#190A28'
      }}
    >  
<div style={{flexGrow:1,display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div style={{ width:"750px",alignItems:"center",justifyContent:"center"}}>
    <div style={{display:"flex"}}>
      <div>
        <div style={{  display:"flex", justifyContent:"center"}}  >
          <img src='/spider.png' style={{width:60}} />
        </div>
        <div style={{ fontWeight: "700", fontSize: 24, color: '#fff'}}>
          JobSpider
        </div>
        </div>
        
        { matches?<div style= {{ borderLeft: '1px solid  #bdc3c7',margin:"10px", width: '10px', height: '85px' }}>
          </div>:<></>}
        <div style={{display:"flex",flexDirection:"column",marginLeft:matches?"":"25px"}}> 
        <div style={{  alignItems: "center", height:"106px", flexGrow: 14 }} >
        <div style={{height:"180px",width:"90%"}}>

           <div>
         

            <div style={{ fontWeight: "700", fontSize: 24, color: '#fff', display: "flex", alignItems: "center",  }}>
            
              <div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <Typography variant="h6" style={{ width:"350px",   fontSize: 25 }} ><b>Follow us on social media</b></Typography>
              </div>
                  <div style={{alignItems:'center',marginTop:10,display:"flex"}}>
                    <FacebookIcon style={{ marginRight:12, fontSize:'35px' }} />


                    <LinkedInIcon style={{marginRight:12,  fontSize:'35'}}/>
                    <InstagramIcon style={{marginRight:12,  fontSize:'35px'}} />

                    <TwitterIcon style={{marginRight:12, fontSize:'35px' }} />

                    <YouTubeIcon style={{marginRight:12, fontSize:'35px'}} />

                  </div>
                  
              </div>
            </div>
          </div>
 
         
        </div>
       
      </div>
      </div> 
      </div>
      <Divider style={{ width:matches? 450:600, alignItems: "center", justifyContent: "center", backgroundColor: "#fff", marginTop: 7 }} />
      <div style={{display:"flex",  width:matches?"55%":"77%",flexDirection:matches?"column":"row", justifyContent:matches?"center":"",justifyContent:"space-between", marginTop: 7 }}>
      <div  style={{width:"109%",display:"flex", justifyContent:matches?"center":"space-between", alignItems:"center",flexDirection:matches?"column":"row"}}>
         
            <div>
              <Typography variant="h9" style={{color:"#fff"}}>© 2025 JobsSipder | All rights reserved</Typography>
            </div>
              <div>
              <Typography variant="h9" style={{color:"#fff"

              }}> Privacy Policy</Typography>
            </div>

            <div>
              <Typography variant="h9"style={{color:"#fff"}}>Terms & Conditions</Typography>
            </div>
         
          </div>
          </div> 
          </div>







      {matches?<></>:  <div style={{
            width: 450,
            height: 170,
            border: "2px",
            borderRadius: 20,
            backgroundColor: "white",
            
            
          
          }}>
            <div>
              <Typography
                variant="h6"
                style={{ color: "black", fontWeight: "bold", marginTop: 25, marginLeft: 20 }}
              >
                Apply on the go
              </Typography>
              <Typography
                variant="h8"
                style={{ fontSize:"19px",color: "black", marginTop: 10, marginLeft: 20, marginBottom: 5 }}
              >
                Get real-time job updates on our App
              </Typography>
              <div style={{ display: 'flex' }}>
                <img src="playstore.png" style={{ height: 180, width: 180,marginTop:-50,marginLeft:10}} />
                <img src='qrcode.png' style={{ width: 100, height: 100,marginLeft:130,marginTop:-43}} />
              </div>
 
           </div>
       </div>}
       </div>
    </Box>
  );
}



















