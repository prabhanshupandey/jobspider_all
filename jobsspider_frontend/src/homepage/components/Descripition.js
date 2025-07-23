import { serverURL } from "../../services/FetchNodeServices"
import Work from "../../assets/work.avif";
// import HomeIcon from '@mui/icons-material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { Button, Divider } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import fulltime from "../../assets/Full time.avif";
import english from "../../assets/english.avif";
import JobHightlight from "./JobHighlight";
import { useState, useEffect } from "react";
import JobCartScroll from "./JobCartScroll"
import FAQ from "./FaqComponent";
import imp from "../../assets/imp.avif";
import login from "../../assets/login.png";
import JobCity from "./JobCity";
import { postData } from "../../services/FetchNodeServices";
import { useLocation } from "react-router-dom";
import JobsByDepartment from "./JobsByDepartment";
import Links from "./Links";
import JobComponent from "./JobComponent";
import Footer from "./Footer";
import SimilarJobs from "./SimilarJobs";
import CartDetailsComponent from "./CartDetailsComponent";
import Popularjobs from "./PopularJobs";
import HireCity from "./HireCity";
import Advertisment from "./Advertisment";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux';
import afterlogin from '../../assets/afterlogin.png'






export default function Descripition({ data }) {
  var locations = useSelector(state => state.user)
  var dispatch = useDispatch()
  console.log("USER:", homeUser)
  var homeUser = localStorage.getItem("USER")

  if (homeUser != null) {

    locations = JSON.parse(homeUser)

  }
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation()
  console.log(location.search)
  const keys = new URLSearchParams(location.search)
  console.log("Keys:", keys)
  const [jobs, setJobsList] = useState([])

  var categoryname = keys.get('categoryname')
  var subcategoryname = keys.get('subcategoryname')
  var companyname = keys.get('companyname')
  var companyaddress = keys.get('companyaddress')
  var statename = keys.get('statename')
  var cityname = keys.get('cityname')
  var logo = keys.get('logo')
  var minsalary = keys.get('minsalary')
  var maxsalary = keys.get('maxsalary')
  var jobtype = keys.get('jobtype')
  var Experience = keys.get('Experience')
  var schedule = keys.get('schedule')
  var jobdeatails = keys.get("jobdeatails")
  var qualification = keys.get("Educationqualification")
  var benifits = keys.get("benifits")
  var worklocationcity = keys.get("worklocationcity")
  var supplementalpay = keys.get("supplementalpay")
  var applicationquestion = keys.get("applicationquestion")
  var jobid = keys.get('jobid')


  var data = { jobid, subcategoryname, categoryname, companyname, logo, minsalary, maxsalary, jobtype, schedule, Experience, jobdeatails, qualification, benifits, supplementalpay, worklocationcity, applicationquestion, companyaddress, statename, cityname }

  var skill = keys.get("skills");
  var skill_id = keys.get("skillid");
  var categoryid = keys.get("categoryid");
  var subcategoryid = keys.get("subcategoryid");

  var jobid = keys.get("jobid");
  const fetchjobs = async () => {
    var res = await postData('userinterface/select_all_skills', { skills: skill, skillid: skill_id, categoryid, subcategoryid, jobid })
    setJobsList(res.data)
  }
  useEffect(() => {
    fetchjobs();
  }, [])




  return (<div style={{ backgroundColor: "rgb(244, 242, 246)" }}>
    <div>
      <Header />
    </div>
    <div style={{ display: "flex", justifyContent: "center", gap: "8px" }}>
      <div>

        <div style={{ width: matches ? '97vw' : "53vw" }}>
          <div>
            <CartDetailsComponent data={data} />
          </div>
          <div style={{ justifyContent: "center", marginTop: "10px" }} >
            <JobHightlight data={data} />
          </div>
          <div >
            <FAQ />
          </div>

        </div>

      </div>

      {matches ? <></> : <div style={{ width: "25%", marginTop: "18px" }}>
        <div>
          <img src={imp} style={{ width: "98%", height: "150px" }} />
        </div>

        <div style={{ marginTop: "12px" }}>
          <SimilarJobs JobCart={jobs} />
        </div>
        <div>
          <a href="/readynextpage">
            {locations == null ? (
              <img src={login} style={{ width: '98%', marginTop: '15px', borderRadius: "15px" }} />
            ) : (
              <img src={afterlogin} alt="Login" style={{ width: '100%' }} />
            )}
          </a>
        </div>

      </div>}

    </div>
    <div>
      <Divider style={{ width: matches ? "98.9%" : "100%", border: "0.5 light #dcdcdc", marginTop: "20px" }} />
    </div>
    <div style={{ marginLeft: "15px", width: "100%", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: matches ? "100%" : '80%' }}><JobCity /></div>

      <div style={{ width: matches ? "100%" : '80%' }}><HireCity /></div>

      <div style={{ width: matches ? "100%" : '80%' }}><Popularjobs /></div>

      <div style={{ width: matches ? "100%" : '80%' }}><JobsByDepartment /></div>

      <div style={{ width: matches ? "100%" : '80%' }}><Links /></div>


    </div>
    <div style={{ width: "100%", backgroundColor: "red" }}>
      <Footer />
    </div>
  </div>

  )
}
































{/* <div style={{background:"#f1f2f6"}}>
   
   <div style={{display:"flex"}}>
    <div>
  <div style={{}}>
  <CartDetailsComponent/>
   </div>

  <div style={{ height:"auto"}}> 
   <JobHightlight/>
  </div>
  </div> 

    <div>
    <div>
    <img src={imp} style={{width:"95%",height:"150px"}}/>
     </div>
     {/* <div style={{marginTop:"25px"}}>
     <SimilarJobs/>
     </div>  */}
//  </div>
//  </div>





// </div> */}
















































{/* <div style={{marginLeft:"18px"}}>
    <img src={imp} style={{width:"95%",height:"150px"}}/>
   </div>
{/* <div style={{marginTop:"25px"}}>
<SimilarJobs/>
</div> */}

/* </div>
 
</div>
 
<div style={{width:"54%", height:"auto",marginLeft:"6%"}}> 
<JobHightlight/>
  </div> 
  <div style={{width:"56%", height:"auto",marginLeft:"6%"}}> 
<FAQ/>
  </div>
 
  
  <div style={{width:"100%",}}>
  <div style={{width:'80%', marginLeft:'5%'}} ><JobCity/></div> 
  <div style={{width:'80%', marginLeft:'5%'}} ><Popularjobs/></div>
  <div style={{width:'80%', marginLeft:'5%'}} > <JobsByDepartment/></div>
  <div style={{width:'80%', marginLeft:'5%'}} ><Links/></div>
  </div>
 
  <div style={{width:"100%"}}> 
<Footer/>
  </div>  */