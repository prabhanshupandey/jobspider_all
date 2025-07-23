
import { Message } from "@mui/icons-material"
import Location from "../../assets/Location_icon.webp"
import work from "../../assets/work.avif"
import salary from '../../assets/Salary_icon.webp'
import expirence from '../../assets/Experience.avif'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { serverURL } from "../../services/FetchNodeServices";
import hots from "../../assets/hot.webp";
import news from "../../assets/new.webp";
import fast from "../../assets/fast_hr.avif";
import { Pagination, Paper, Stack } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import english from "../../assets/english.webp"
import fulltime from "../../assets/Full time.avif";
import HomeIcon from '@mui/icons-material/Home';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useNavigate } from "react-router-dom"
import { useState } from "react"





export default function JobCartScroll({ JobCart }) {


  // var JobCart = [{ companyid: 1, companyname: "Wpiro", Role: "Software Developer Engineer", address: "Sector 63", city: "Noida", minsalary: "20,000", maxsalary: "50,000", jobtype: "Work From Home", JobPrefrences: "part Time", Expirence: "Min .2 years", Language: "Basic english", Message: "Urgent Hiring" ,icon:"wipro.png"},
  // { companyid: 2, companyname: "LTI MindTree", Role: "Software / Web Developer Intern", address: "Dinpur", city: "New Delhi", minsalary: "10,000", maxsalary: "30,000", jobtype: "Work From office", JobPrefrences: "Full Time", Expirence: "Min .1 years", Language: "Basic english", icon:"mindtree.png" },
  // { companyid: 3, companyname: "Accenture", Role: "MERN Stack Developer", address: "sector 94", city: "Mumbai", minsalary: "30,000", maxsalary: "90,000", jobtype: "Work From office", JobPrefrences: "hybrid", Expirence: "Min .5 years", Language: "Basic english", Message: "Urgent Hiring", icon:"accenture.png",Response:"Fast hr Reply",jobUpdate:"New" },
  // { companyid: 4, companyname: "Amazon", Role: "Data Analyst", address: "gurgoan", city: "Haryana", minsalary: "10000", maxsalary: "60,000", jobtype: "Work From Home", JobPrefrences: "Remote", Expirence: "fresher", Language: "Basic english",  icon: "amazon.png" },

  // ]

  const boxList = (data) => {
    return data.map((item, index) => {
      return <div style={{ display: "flex", alignItems: "center", width: "auto", height: "20px", fontSize: 12, marginRight: "5px", borderRadius: "2px", backgroundColor: "#f2f2f3", color: '#8c8594', marginBottom: "7px", marginTop: "5px" }}>
        {/* <div><img src={work} style={{width:"15px"}}/></div> */}
        <div style={{ padding: "3px" }}>{item.cityname}</div>
      </div>
    })

  }
  const navigate = useNavigate()
  const handleNext = (item) => {
    const queryString = new URLSearchParams(item).toString()
    navigate(`/descripition?${queryString}`)
  }

  const [paging, setPaging] = useState(1);
  const pages = 4;

  const handleChange = (e, v) => {
    setPaging(v);
  };

  const start_Index = (paging - 1) * pages;
  const end_Index = start_Index + pages;
  const filterJob = JobCart.slice(start_Index, end_Index);
  console.log("aaaaaaaaaaaa", filterJob, paging)

  const showJobList = () => {
    return filterJob.map((item) => {
      return (<Paper elevation={2} style={{ width: "100%", height: "auto", backgroundColor: "#fff", borderRadius: "8px", fontFamily: "Ubuntu", marginBottom: "10px" }}>
        <div style={{ padding: "15px", borderRadius: "7px", backgroundColor: "#fff" }}
          onClick={() => handleNext(item)}
        >
          <div style={{ display: "flex", alignItems: 'center', fontSize: "16px", fontFamily: "Ubuntu", width: "70%", height: "30px", background: "linear-gradient(90deg, rgba(226,126,19,0.1657913165266106) 0%, rgba(255,243,237,0) 82%)" }}>
            <div><img src={hots} /></div>
            <div style={{ color: '#DE3700' }}>
              <div>Urgent Hiring</div>
              {item.Message}
            </div>
          </div>



          <div style={{ display: "flex", alignItems: "center", fontFamily: "Ubuntu" }}>

            <div>
              <img src={`${serverURL}/images/${item.logo}`} style={{ width: "30px" }} />
            </div>
            <div style={{ display: 'flex', width: '100%', marginTop: "10px" }}>
              <div style={{ alignItems: "center", marginLeft: 7, fontFamily: "Ubuntu" }}>

                <div style={{ fontWeight: "bolder", fontSize: "16px", fontFamily: "Ubuntu" }}>
                  {item.subcategoryname}
                </div>
                <div style={{ fontSize: "15px", fontFamily: "Ubuntu", color: ' #8C8594', marginBottom: "10px" }}>
                  {item.companyname}
                </div>
              </div>
              <div style={{ marginLeft: 'auto', color: ' #8C8594' }}><ArrowForwardIosIcon /></div>
            </div>
          </div>
          <div>


            {item.jobtype.toLowerCase() == "work from home" ?
              <div style={{ display: "flex", alignItems: "center", color: ' #8C8594' }}>
                <HomeIcon style={{ width: "15px" }} />{item.jobtype}
              </div>
              :




              <div style={{ display: "flex", alignItems: "center", color: ' #8C8594' }}>
                <img src={Location} style={{ width: "15px" }} />


                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {boxList(JSON.parse(item.worklocationcity))}
                </div>
              </div>}
          </div>


          <div style={{ display: "flex", color: ' #8C8594', marginBottom: "5px" }}>

            <img src={salary} style={{ width: "15px", color: ' #8C8594' }} />

            <div style={{ display: "flex", fontSize: "15px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <CurrencyRupeeIcon style={{ width: "11px" }} />
                {item.minsalary}-
                <CurrencyRupeeIcon style={{ width: "11px" }} />
                {item.maxsalary} monthly
              </div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center" }} >

            {[{ icon: <img src={fulltime} style={{ width: "20px", marginRight: "5px" }} />, entites: item.jobtype }, { icon: <AccessTimeIcon style={{ fontSize: "16px", marginRight: "5px" }} />, entites: item.schedule }, { icon: <img src={expirence} style={{ width: "16px", marginRight: "5px" }} />, entites: item.Experience + " " + " years" }].map((item, index) => (


              <div style={{ display: "flex", alignItems: "center", width: "auto", height: "20px", fontSize: 12, marginRight: "5px", padding: "5px", borderRadius: "2px", backgroundColor: "#f2f2f3", color: '#8c8594' }}>
                {/* <div><img src={expirence} style={{width:"15px", marginLeft:"2px"}}/></div> */}
                <div style={{ display: "flex", alignItems: "center" }}>{item.icon}{item.entites}</div>
              </div>


            ))}
          </div>






          {/* <div style={{ display: "flex" }}>
       
          <div style={{ display: 'flex', alignItems: 'center', margin: "2px", width: 'auto', fontFamily: 'Ubuntu', borderRadius: "2px", fontSize: 10, height: 'auto', backgroundColor: "#ecf0f1", color: '#7f8c8d' }}>
            <img src={work} style={{ width: "17px", marginLeft: "2px" }} />
            <div style={{ padding: "5px", color: " #8C8594", backgroundColor: "#F2F2F3" }}>{item.jobtype}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: "2px", width: 'auto', fontFamily: 'Ubuntu', borderRadius: "2px", fontSize: 10, height: 'auto', color: '#7f8c8d', backgroundColor: "#ecf0f1" }}>
            <img src={fulltime} style={{ width: "17px", marginLeft: "2px" }} />
            <div style={{ padding: "5px", color: " #8C8594", backgroundColor: "#F2F2F3" }}>{item.JobPrefrences}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', margin: "2px", width: 'auto', fontFamily: 'Ubuntu', borderRadius: "2px", fontSize: 10, height: 'auto', color: '#7f8c8d', backgroundColor: "#ecf0f1" }}>
            <img src={expirence} style={{ width: "17px", marginLeft: "2px" }} />
            <div style={{ padding: "5px", color: " #8C8594", backgroundColor: "#F2F2F3" }}>{item.Expirence}</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', margin: "2px", width: 'auto', fontFamily: 'Ubuntu', borderRadius: "2px", fontSize: 10, height: 'auto', color: '#7f8c8d', backgroundColor: "#ecf0f1" }}>
            <div><img src={english} style={{ width: "17px", marginLeft: "2px" }} /></div>
            <div style={{ padding: "5px", color: " #8C8594", backgroundColor: "#F2F2F3" }}>{item.Language}</div>

          </div> */}
          {/* </div> */}
          {/* 
        <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
          <div style={{ display: "flex", alignItems: "center", marginRight: "40px" }}>
            <div><img src={news} style={{ width: "25px", marginRight: "5px" }} /></div>
            {item.jobUpdate}
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            <div><img src={fast} style={{ width: "25px", marginRight: "5px" }} /></div>
            {item.Response}
          </div>
        </div> */}


        </div>

      </Paper>
      )
    })

  }

  return (<div>
    {showJobList()}
    <Stack spacing={2}>
      <Pagination
        count={Math.ceil(JobCart.length / pages)}
        page={paging}
        onChange={(e, v) => handleChange(e, v)}
        color="primary"
        sx={{ width: 500 }}
      /></Stack>
  </div>
  )

}