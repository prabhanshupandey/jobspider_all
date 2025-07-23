
// import {Divider, InputAdornment, Paper} from "@mui/material"
// import {Button} from "@mui/material";
// import {TextField} from "@mui/material";
// import map from "../assets/map.png";
// import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
// import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
// import LocationOnIcon from "@mui/icons-material/MyLocation";
// export default function SearchCity(){
//      return(<div style={{width:"100%",backgroundColor:"#fff",height:"auto",justifyContent:"center", display:"flex"}}>
//        <div style={{width:"100%",height:"90vh", background:"pink",borderRadius:"5px",justifyContent:"center",display:"flex",alignItems:"center"}}>
//        <Paper style={{width:"40%", height:"70vh",background:"#fff",borderRadius:"10px"}} > 
//               <div style={{padding:"15px",display:"flex"}}>
//        <div style={{color:"#190A28",fontWeight: 600,fontSize:"16px",lineHeight:"24px",marginBottom:"20px"}}>
//        Search your city
//        </div>
//        <div style={{marginLeft:"auto"}}>
//         <ClearRoundedIcon/>      
//        </div>
//         </div>

//      <Divider  style={{ border: "1px light grey", borderRadius: "1px", width: "100%"}}/>


//        <div style={{padding:"15px"}}>
//   <Button
      
//       startIcon={<LocationOnIcon style={{marginLeft:"10px"}} />}
//       sx={{
//         backgroundColor: "#E5F8F1",
//         color: "#2D8A6D",
//         textTransform: "none",
//         width: "97%",
//         height: "50px",
//         justifyContent:"flex-start",
//         fontWeight: 600,
//         lineHeight:"20px",
//         fontSize: "14px",
       
//       }}
//     >
//       Use my current location
//     </Button>
  
// <TextField
//   placeholder="Enter your Pincode or City"
//   variant="outlined"
//   fullWidth
//   InputProps={{
//     startAdornment: (
//       <InputAdornment position="start">
//         <RoomRoundedIcon />
//       </InputAdornment>
//     ),
//     sx: {
//       height: 45,
//       fontSize: "14px",
//       marginTop:"10px"
//     },
//   }}
//   sx={{
//     width: "97%",
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor:"grey", 
//       },
//       "&:hover fieldset": {
//         borderColor: "black",
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "#165B48", 
//       },
//     },
//   }}
// />
// </div>

 
//   <div style={{paddingTop:"50px"}}>
//    <div style={{display:"flex",justifyContent:"center",textAlign:"center"}}>
//    <img src={map} style={{width:"30%"}}/> 
//    </div> 
//    <div style={{color:"#190A28",fontSize:"16px",lineHeight:"24px",fontWeight:600, textAlign:"center",marginRight:"12px"}}>
//    Choose your city         
//    </div>
  
//    <div style={{
//   fontSize: "14px",
//   lineHeight: "20px",
//   marginLeft: "30%",
//   textAlign: "center",
//   borderRadius: "5px", // more rounded
//   backgroundColor:'#93C5FD1A',
//   width: "35%",
//   marginBottom: "20px",
//   marginTop: "10px",
//   padding: "6px 0" // adds vertical space instead of fixed height
// }}>
//   Please share your current location
// </div>
  
//    <div style={{fontSize:"12px",lineHeight:"16px",textAlign:"center",color:"#8C8594"}}>
//    We personalize your experience based on where you live and show you the right jobs          
//    </div>
//    </div>
  
     
//      </Paper>  
//     </div>       
//      </div>)         
// }

import {
  Dialog,
  DialogContent,
  Divider,
  InputAdornment,
  Button,
  TextField,
  IconButton
} from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import LocationOnIcon from "@mui/icons-material/MyLocation";
import map from "../assets/map.png";

export default function SearchCityPopup({ open, onClose }) {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm"  fullWidth 
     PaperProps={{
      style: {
        borderRadius: "15px"
      },
    }}
  >
      <DialogContent style={{ padding: "0px" }}>
        <div
          style={{
            width: "100%",
            height: "78vh",
            background: "#fff",
            borderRadius: "10px",
         
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                color: "#190A28",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                padding:"15px"
              }}
            >
              Search your city
            </div>
            <IconButton onClick={onClose} style={{ marginLeft: "auto" }}>
              <ClearRoundedIcon />
            </IconButton>
          </div>

          <Divider style={{ margin: "10px 0" }} />

          <div style={{ padding:"15px"}}>
            <Button
              startIcon={<LocationOnIcon />}
              sx={{
                backgroundColor: "#E5F8F1",
                color: "#2D8A6D",
                textTransform: "none",
                width: "100%",
                height: "50px",
                justifyContent: "flex-start",
                fontWeight: 600,
                fontSize: "14px",
               
              }}
            >
              Use my current location
            </Button>

            <TextField
              placeholder="Enter your Pincode or City"
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomRoundedIcon />
                  </InputAdornment>
                ),
                sx: {
                  height: 45,
                  fontSize: "14px",
                  marginTop: "10px",
                },
              }}
              sx={{
                marginTop: "15px",
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#165B48",
                  },
                },
              }}
            />
          </div>

          <div style={{ paddingTop: "30px", textAlign: "center" }}>
            <img src={map} alt="map" style={{ width: "30%" }} />
            <div
              style={{
                color: "#190A28",
                fontSize: "16px",
                lineHeight: "24px",
                fontWeight: 600,
                marginTop: "10px",
              }}
            >
              Choose your city
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: "20px",
                margin: "10px auto",
                textAlign: "center",
                borderRadius: "5px",
                backgroundColor: "#93C5FD1A",
                width: "60%",
                padding: "6px 0",
              }}
            >
              Please share your current location
            </div>
            <div
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "#8C8594",
              }}
            >
              We personalize your experience based on where you live and show you the right jobs
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
