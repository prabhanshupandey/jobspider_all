
import qr from"../../assets/qr.webp"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import spider from"../../assets/spiderapp.png"
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';
import { useTheme } from '@mui/material/styles';
import playstore from "../../assets/google.webp"
import mobile from"../../assets/download_mobile.png"
import useMediaQuery from '@mui/material/useMediaQuery';

// chta true bada false
export default function SpiderComponent(){
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return(<div style ={{ width:matches?520:1300, 
     height: matches ? 650 : 430,
     backgroundColor:"red", 
     backgroundColor:"#f9f4ff ",
    //  marginTop:"70px",
    //   marginLeft: matches?"7px":"120px", 
      borderRadius:"18px"
// marginLeft:"50px"
// fontSize:40,
// marginTop:-45
      }}>
        <div style={{padding:"20px"}}> 
        <div style={{ fontSize:"38px", color:"#3B3B98", fontWeight:"bolder",margin:"20px"  ,display:"flex",alignItems:"center",lineHeight:1.5}}>
        Download Spider app!
        </div>
           <div style={{ fontSize:matches?18:20, color:" #1e272e", fontWeight:"bold",marginLeft:"20px"}}>
            {matches?(
                <ul>
                    <li>Unlimited  job applications</li><br/>
                    <li>HRs contact you directly</li><br/>
                    <li>Track your Applications</li><br/>
                </ul>
                )
        
            :(
            
          "Unlimited job applications | HRs contact you directly | Track your Applications"
        
        )}
        
            </div>
            
        
      





       { matches? (
              <></>
            )
            :(
            
            <div style   ={{borderRadius:"12px",  marginLeft:"20px",marginTop:60,width:"25%", background:"#fff",fontSize:16, justifyContent:"space-between",fontWeight:"bold",display:"flex", alignContent:"center", alignItems:"center"}}>
                < span style={{color:  "#1e272e", fontWeight:"bold",marginLeft:"15px"}}> 
            <p>
            Scan QR to <br/>
            download Spider <br/>
             app
            
            </p>
            </span>
    
            <div style={{margin:"15px"}} >
                <img src={qr} style={{ width:"110px", height:"100px" ,padding:"12px 12px 12px 12px " ,border: "0.1px solid  #aaa",borderRadius:"10px", }}/>
            </div>
         
            </div>)}
        
           { matches?(
                 
                 <div style={{display:"flex"}}>
                 <img src={mobile} style={{ marginLeft:310,marginTop:"-55px",}}/>
             </div>

           ):(
           

            <div>
                <img src={spider} style={{  height:"350px",marginLeft:700, marginTop:-283}}/>
            </div>)}


                
             <div style={{ background:"linear-gradient(90deg, #f9f4ff 0%, #f3ebff 100%)"
  ,width:190, height:100,marginLeft:matches?0:1040, marginRight:"20%", marginTop:matches?"-280px":-260 }}>
            <div style={{display:'flex',alignItems:"center",alignContent:"center",alignSelf:"center",justifyContent:"center",lineHeight:2,}}>
            <div >
            <StarRoundedIcon style={{  height:'40px',width:'40px',color:"#FFC312",marginTop:"13px",marginRight:"5px"}}/>
            </div>
            <div style={{fontSize:25, fontWeight:"bolder", color:"#3B3B98" }}>
            4.4
            </div>
            </div>
            <div style={{  display:"flex", fontSize:15, fontWeight:"bolder",alignItems:"center",alignContent:"center",alignSelf:"center",justifyContent:"center", marginLeft:"9px",color:"#3B3B98" }} >
             5L reviews
            </div>
            
            </div>

             
             
                
                
             
                
                
                
                <div style={{ background: "linear-gradient(90deg, #f9f4ff 0%, #f3ebff 100%)",marginLeft:matches?0:1040,  marginTop:25 ,width:190, height:100}}>
            <div style={{ display:"flex",marginLeft:"20px",alignItems:"center"}}>
            <div>
            <DownloadForOfflineRoundedIcon style={{ color:"#3B3B98",width:30, height:30, marginTop:"13px", marginLeft:6}}/>
            </div>
            <div style={{fontWeight:"bolder",fontSize:25,color:"#3B3B98",marginTop:"12px"}}>
            1 cr+
            </div>
            </div> 
            <div style={{ marginLeft:"30px",fontSize:15,  fontWeight:"bolder",color:"#3B3B98"}} >
            App downloads
            </div>
            {matches?<div style={{ display:"flex",justifyContent:"center", alignItems:"center",backgroundColor:"#fff",borderRadius:"10px",width:430,height:"90px",marginTop:"97px",marginLeft:"15px"}}>
                <div style={{display:"flex", alignItems:"center", marginLeft:"10px",fontSize:"16px",fontFamily:"Ubuntu",fontWeight:"bold",width:"100%"}}>
                 Download it from Play Store
                 
                 <div>
                <img src={playstore} style={{width:"150px",marginTop:"5px"}}/>
                </div>
                </div>
            </div>:<></>}
            </div>
            
          
           

       </div> 
    </div>)

}