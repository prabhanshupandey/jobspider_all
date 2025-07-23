import { serverURL } from "../../services/FetchNodeServices";
import { Paper } from "@mui/material";
export default function RecentUpdateComponent ({item}){

return(<div>
    <Paper elevation={2} style={{borderRadius:"90px",display:"flex",width:280, height:80, backgroundColor:"#fff" }}>
<div  style={{ display:"flex",width:280, height:80, backgroundColor:"#fff", borderRadius:"90px"}}>
<div style={{marginTop:"2px",marginLeft:"4px" }}>
<img src={`${serverURL}/images/${item.userimage}`} style={{ width: 60,height: 60, padding:'10px 10px 15px 10px', borderRadius: "90%"}} />
</div>
<div style={{marginTop:"15px", fontFamily:"Ubuntu",fontWeight:"bold"}}>
<span>{item.message}</span>
</div>
</div>
</Paper> 
</div>)


}