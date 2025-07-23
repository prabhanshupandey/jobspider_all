
import TrendingJobs from "./TrendingJobs";
import { Typography } from "@mui/material";

export default function TrendingJobsComponent({items,colors})
{  
    
    
        const showTrendingJobs=()=>{
        return items.map((item,i)=>{

            return<TrendingJobs item={item} colors={colors[i]}/>
         
        })
     
    }


    
    return(<div>
        
    <div style={{margin:10,display:"flex",flexWrap:'wrap'}}>
    
    <div style={{ width:360, height:280, margin:15, padding: '30px 20px 30px 20px',borderRadius: "18px",  fontWeight:"bold", fontSize:"60px",fontFamily:"Ubuntu",display:"flex",alignItems:"center"}}>
    
    
    
    Popular <br/>
    Searches on<br/>
     JobSpider
        </div>
       {showTrendingJobs()}
      
        </div>
       
        </div>)
       

}


