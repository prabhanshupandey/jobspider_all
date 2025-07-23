import { Paper } from "@mui/material"
import {Divider} from "@mui/material"
import TextField from '@mui/material/TextField';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from "react";
import ProgressBar from "./ProgressBar";
import Image from  "./Image";




            
export default function BasicDetails(){
             
         
const [selectedGender, setSelectedGender] = useState(null);
  const buttonStyle = (gender) => ({
  backgroundColor: selectedGender === gender ? "#e6f6f1" : "#ffffff",
   border: selectedGender === gender ? "2px solid #24816b" : "2px solid #c1bcc4", // gray border
 color: selectedGender === gender ? "#24816b" : "#000000", // black text for unselected
 borderRadius: "999px",
 padding: "8px 16px",
 cursor: "pointer",
 marginRight: "10px",
 textTransform:"none"
 });
           
                

return(<div style={{background:"#fff", width:'100%', height:"100vh",display:"flex",justifyContent:"center",alignItems:"center", border:"1px solid black"}}>
<div  style={{display:"flex",width:"100%",height:"auto",backgroundColor:"pink",border:"1px solid black",justifyContent:"center"}}>







<Paper style={{width:"40%", height:"83vh",background:"#fff",borderRadius:"8px",overflow:"hidden"}}>

  <div>
    <ProgressBar/>          
</div>  

<Divider  style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%"}}/>
<div style={{padding:"23px"}}>
<div style={{marginBottom:"9px",fontWeight:600, fontSize:"13px",color:"#190A0E"}}>
 Name             
</div>
<div>
  
<TextField
  placeholder="Enter full name"
  fullWidth
  InputProps={{
    sx: {
      height: 45,
      fontSize: "14px",
    },
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black", 
      },
      "&:hover fieldset": {
        borderColor: "black", 
      },
      "&.Mui-focused fieldset": {
        borderColor:  " #165B48",
      }
    }
  }}
/>


</div>

<div style={{ marginTop: "15px", marginBottom: "9px",fontWeight:600, fontSize:"13px",color:"#190A0E" }}>
  Date of Birth (DOB)
</div>
<div>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}>
      <DatePicker
        sx={{ width: '100%' }}
        slotProps={{
          textField: {
            fullWidth: true,
            placeholder: 'Choose date',
            size: 'small',
            InputProps: {
              style: {
                height: '45px',
              }
            },
            inputProps: {
              style: {
                padding: '8px 10px',
                fontSize: '14px',
              }
            },
            sx: {
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", 
                },
                "&:hover fieldset": {
                  borderColor: "black", 
                },
                "&.Mui-focused fieldset": {
                  borderColor: " #165B48",
                },
              }
            }
          }
        }}
      />
    </DemoContainer>
  </LocalizationProvider>
</div>




<div style={{ marginTop: "15px", marginBottom: "9px",fontWeight:600, fontSize:"13px",color:"#190A0E" }}>
        Gender
      </div>
      <div style={{ gap: 15, display: "flex" }}>
        <div>
          <Button
            style={buttonStyle("Male")}
            onClick={() => setSelectedGender("Male")}
          >
            Male
          </Button>
        </div>
        <div>
          <Button
            style={buttonStyle("Female")}
            onClick={() => setSelectedGender("Female")}
          >
            Female
          </Button>
        </div>
      </div>
   

    <div style={{marginTop:"15px",marginBottom:"9px",fontWeight:600, fontSize:"13px",color:"#190A0E"}}>
    Email Address (Optional)           
   </div>
    <div>
    <TextField
  placeholder="Enter email address"
  style={{ width: "100%" }}
  InputProps={{
    style: {
      height: "45px",
    }
  }}
  inputProps={{
    style: {
      padding: "8px 10px",
      fontSize: "14px",
    }
  }}
  sx={{
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black", 
      },
      "&:hover fieldset": {
        borderColor: "black", 
      },
      "&.Mui-focused fieldset": {
        borderColor: " #165B48",
      }
    }
  }}
/>


</div>


<div style={{marginTop:"15px",fontSize:"14px",lineHeight:"20px"}}>
<Checkbox defaultChecked style={{ color:"#24816b"}} />
Send me important job updates on Whatsapp
</div>
</div>
<Divider  style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%"}}/>

<div style={{marginLeft:"28px",marginTop:"15px"}}>
<Button variant="contained" style={{backgroundColor:" #165B48",textTransform:"none",width:"96%",height:"40px"}}>Next</Button>
</div>

</Paper> 
</div>
      
</div>)
}