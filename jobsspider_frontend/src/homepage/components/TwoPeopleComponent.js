import { Button ,Paper} from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";




export default function TwoPeopleComponent(){
    return(
    <Paper style={{ width:"80%", height:400, backgroundColor:"#fff", margin:15, background:"green",display:"flex",borderRadius:"18px"}}>
        <div >
            <img src={`${serverURL}/images/two-people.png`} style={{marginLeft:"9%", height:400}}/>
        </div>
       
     
  <div style={{marginTop:"30px"}}>
   <div  style={{fontSize:18,fontFamily:"Ubuntu",marginLeft:10, fontWeight:"bolder", padding:7, justifyContent:"center", alignItems:"center", alignContent:"center" }}>
    SPIDER FOR EMPLOYERS
   </div>
   </div>
{/* <div style={{display:"flex", alignItems:"start", flexDirection:"column", marginTop:40, justifyContent:"left"}}> */} 
    <div style={{ marginLeft:0, marginTop:45,alignItems:"center",flexDirection:"column", justifyContent:"center",fontSize:52,fontFamily:"Ubuntu",color:"#fff"}}>
    Want to hire?
   </div> 
   {/* </div> */}


{/*    
   <div style={{marginLeft:"700px", marginTop:"20px", fontFamily:"Ubuntu",fontSize:12}}>
    Find the best candidate from 5 crore+ active  job seekers!
   </div>
   <div style={{marginLeft:"700px", marginTop:"30px"}}>
    <Button>Views Jobs</Button>
   </div>
    </div>
    //  */} 
 </Paper>
    )
}
