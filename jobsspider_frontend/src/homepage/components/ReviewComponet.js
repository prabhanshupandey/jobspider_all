import { Paper } from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function ReviewScroll({ item }) {
  return (
    <div style={{ display: 'flex', alignItems:"center", justifyContent:"center",height:"400px" }}>

      <Paper
        key={item.userreviewid}
        style={{
          width: "450px",
          height: "250px",
          backgroundColor: "#fff",
          borderRadius: "18px",
          margin: "10px 0",
          padding: "20px",
        }}
        elevation={3}
      >
        <div>
          <img src={`${serverURL}/images/${item.userpicture}`} style={{ width: 80, height: 90, position: "absolute", zIndex: 6, top: 25, borderRadius: "18px" }} />
          <div style={{display:'flex' }}>
          <strong style={{ marginLeft: "98px" }}>{item.username}</strong>
          <div style={{border:'0.5px solid #ecf0f1',marginLeft:'10px',borderRadius:'5px',width:'70px', height:'20px',display:'flex',padding:"4px"}}> 
          <div style={{backgroundColor:"#218c74",borderRadius:'90%',margin:'1.2px 0px 0px 1px',width:'17px', height:'17px'}}>
            <CheckCircleOutlineIcon style={{width:'11px',margin:'-4px 3px',color:'#fff'}}/>
          </div>
          <div style={{color:'#218c74',fontWeight:'bolder',fontSize:11,marginLeft:'2px',marginTop:'2px'}}>
            PLACED
          </div>
          </div>
          </div>
          <strong style={{ display: "flex", marginLeft: "98px" }}>{item.userrating}
          <Stack spacing={1} style={{ marginLeft: "10px" }}>
                            <Rating name="half-rating-read" defaultValue={item.userrating} precision={0.5} readOnly />
                        </Stack>
          </strong>
          <p style={{fontSize:20,fontWeight:"250", fontFamily:"Ubuntu"}}>{item.userreview}</p>

        </div>
      </Paper>

    </div>
  );
}
