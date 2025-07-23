import { Paper } from "@mui/material";
import {Button} from "@mui/material";
import { useState } from "react";
import {serverURL} from "../../services/FetchNodeServices"
import {useTheme} from'@mui/material/styles';
import useMediaQuery from "@mui/material/useMediaQuery";


export default function TwoPeopleHireComponent(){
      const [bk,setBK]=useState('#f1f2f6')
      const theme=useTheme()
      const matches=useMediaQuery(theme.breakpoints.up('sm'));
          const [btnProps,setBtnProps]=useState({v:'outlined',bk:'',c:'rgb(20, 69, 36)'})
          const handleColorChangeOver=()=>{
              setBK('#ffff')
              setBtnProps({v:'outlined',bk:'#056653',c:"#ffff"})
          }
          const handleColorChangeLeave=()=>{
              setBK('#f1f2f6')
              setBtnProps({v:'outlined',bk:'',c:'rgb(20, 69, 36)'})
          }
    return(
       <div style={{width:matches?'81%':'90%',height:matches?430:'auto',borderRadius:"17px",backgroundColor:'#f1f9f7',justifyContent:matches?"space-between":"center" , display:"flex",alignItems:"center", border: `0.5px solid #dfe6e9`}}>
          <div style={{width:"100%",display:'flex',flexDirection:matches?'row':"column-reverse",alignItems: "center", justifyContent: "center"}}>
         
            <div style={{width: matches? "60%":"80%",display:"flex"}}>
            <img
                src={`${serverURL}/images/two-people.png`}
                style={{borderRadius:"8px",maxWidth:"490px",width:"100%"}}
              />
            </div>
           
            <div style={{width:matches?"50%":"90%", textAlign:matches?"Left":"center",padding:"20px"}}>
           <div style={{width:"fit-content",fontWeight:'bolder',fontSize:18,background:'#dde8e5',display:'flex',margin:matches?"0px":"auto",justifyContent:'center',alignItems:'center',padding:7,borderRadius:2,color: '#1f8268'}}>
        SPIDER FOR EMPLOYERS
       </div>
       <div style={{marginTop:45,fontWeight:'bolder',fontSize:matches?"52px":"36px",padding:7,color: '#166e57'}}>
        Want to hire?
       </div>
       <div style={{marginTop:8,fontWeight:'bold',fontSize:14}}>
       Find the best candidate from 5 crore+ active job seekers!
       </div>
        <div onMouseLeave={handleColorChangeLeave} onMouseOver={handleColorChangeOver} style={{marginTop: 60}}>
          <a href="http://localhost:3000/employee"> <Button  fullWidth variant={btnProps.v} style={{color:btnProps.c,background:btnProps.bk,border:'0.5px solid rgb(20, 69, 36)', width:matches?250:350,
              textTransform: "capitalize",
              borderRadius:8,
              fontSize: 18,
              fontWeight: "bold",}}>{`Post Jobs >`}</Button></a>
       </div>
            </div>

          </div>
       </div>
    )
   }