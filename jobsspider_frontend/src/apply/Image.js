
import logo from '../assets/companylogo.png'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee'
import Building from  '../assets/building.png'
import companylogo from '../assets/companyadvertisement.png'
import { useState ,useEffect} from 'react'
import { useLocation } from "react-router-dom";
import { getData ,serverURL} from "../services/FetchNodeServices";

export default function Image({job}) {
   const location = useLocation();
   const [companyname, setCompanyName] = useState(job.companyname)

  //  const fetchAllCity = async () => {
  //   var res = await getData('userinterface/fetch_all_detail')
  //   setDetails(res.data)
  // }
  // useEffect(function () {
  //   fetchAllCity();
  // }, [])



  return (<div style={{padding:10,fontFamily:"Ubuntu"}}>
    <div
      style={{
       
       
       padding:15,
        backgroundImage: `url(${logo})`,
        backgroundSize: "contain", 
        borderRadius:"18px",
        width: "100%",
        height: "43vh", 
        marginTop:"40px"
       
      }}
    >
    <div>
    <img src='/spider.png' style={{ width: 40 }} />
    </div>
    <div style={{fontSize:"16px",lineHeight:"24px",color:"#fff",marginTop:"20px",paddingBottom:"28px"}}>
    Application for        
    </div>
    

    <div style={{fontWeight:700,fontSize:"24px",lineHeight:"30px",color:"#fff"}}>
      {job.categoryname} <br/> 
      
    </div>
    <div style={{fontWeight:600 ,lineHeight:"30px",fontSize:"27px",color:"#fff"}}>
    {job.subcategoryname}    
 
    
      </div>  
      <div style={{fontWeight:600,lineHeight:"30px", fontSize:"16px",color:"#fff"}}>
    {job.jobtype}Job    
 
    
      </div> 
      
      <div style={{color:"#fff", marginTop:"15px",display:"flex",alignItems:"center"}}> 
      <div style={{width:'75px',backgroundColor:'#ffff', borderRadius:'15px',justifyContent:"center",display:"flex"}}> 
      <img
              src={`${serverURL}/images/${job.logo}`}
              style={{
                maxWidth: "40px",
                objectFit: "contain",
                marginRight: "10px"
              }}
              alt="logo"
            /> 
       </div>
       <div style={{fontWeight:400, paddingLeft:"4px"}}> 
      {job.companyname}    
       </div>
      
     </div>      
    <div style={{color:"#fff", display:"flex",paddingTop:5}}>
     <div>
    <CurrencyRupeeIcon style={{fontSize:"15px",fontWeight:600}}/>
    </div>  
    <div> 
    {job.minsalary}- {job.maxsalary} per month (Fixed + incentives)        
    </div> 
    </div>
    </div>

    <div style={{paddingTop:30}}>
      <img src={companylogo}/>        
    </div>
    </div>
  );
}
