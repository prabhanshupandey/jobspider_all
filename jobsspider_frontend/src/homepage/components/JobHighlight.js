import hots from "../../assets/hot.webp";
import applicants from "../../assets/applicants.svg";
import checks from "../../assets/check.webp";
import Department from "../../assets/department.webp";
import Role from "../../assets/role.webp";
import EmplyomentType from "../../assets/employment_type.webp";
import shiftwise from "../../assets/shift.webp";
import educations from "../../assets/education.webp";
import ages from "../../assets/age.svg";
import experience from "../../assets/Experience.avif";
import degree from "../../assets/degree_specialization.webp";
import { serverURL } from "../../services/FetchNodeServices"
import Work from "../../assets/work.avif";
// import HomeIcon from '@mui/icons-material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { Button, Divider } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import fulltime from "../../assets/Full time.avif";
import english from "../../assets/english.avif";
import parse from 'html-react-parser';



export default function JobHightlight({ data }) {
  const theme = useTheme();
       const matches = useMediaQuery(theme.breakpoints.down('sm'));
  var desc = {
    companyid: 1, companyname: "Wpiro", Role: "Software Developer Engineer", jobtype: "Work From Home", minsalary: "116,000", maxsalary: "125,000", Expirence: "Min .2 years", JobPrefrences: "part Time", Language: "Good(Intermediate/Advanced)English", icon: "wipro.png", message: "urgently hiring", beniftsinclude: " PF, Laptop, Health Insurance, 5 working days", vacancy: "197 applicants", EarningPotential: "125,000", Descripition: "We are seeking a highly skilled and experienced Full Stack MERN Developer to lead our latest projects. This unique position not only requires a strong technical background in the MERN stack (MongoDB, Express.js, React, and Node.js) but also substantial experience in product management"


    , address: "10th floor, Indraprastha Corporate, opp. Venus Atlantis, Chinar Bungalows, Prahlad Nagar, Ahmedabad, Gujarat 380015 Prahlad Nagar, Ahmedabad Region", icon: "wipro.png"
    , worklocation: "Sai Arcade, NS Road, Vidya Vihar, Mulund West, Mumbai, Maharashtra, India", shift: "day shift", department: "software Engeenering", category: "IT", age: "22-44 years", gender: "both", education: "12 pass", Englishlevel: "Basic English", Degree: "Any Dual Degree (BE/B.Tech + ME/ M.Tech), Any B.Sc, Any MCA, Any BCA, Any BE/B.Tech (Atleast one)"


  }
  const boxList = (data) => {
    return data.map((item, index) => {


      return <div style={{ display: "flex", alignItems: "center", width: "auto", height: "20px", fontSize: 12, marginRight: "5px", borderRadius: "2px", backgroundColor: "#f2f2f3", color: '#8c8594', marginBottom: "7px", marginTop: "5px" }}>
        {/* <div><img src={work} style={{width:"15px"}}/></div> */}
        <div style={{ padding: "3px" }}>{item.title}</div>
      </div>
    })

  }
  const boxListCity = (data) => {
    return data.map((item, index) => {


      return <div style={{ display: "flex", alignItems: "center", width: "auto", height: "20px", fontSize: 12, marginRight: "5px", borderRadius: "2px", backgroundColor: "#f2f2f3", color: '#8c8594', marginBottom: "7px", marginTop: "5px" }}>
        {/* <div><img src={work} style={{width:"15px"}}/></div> */}
        <div style={{ padding: "3px" }}>{item.cityname}</div>
      </div>
    })

  }
  return (<div style={{ width: matches?"":"800px"}}>

    <div style={{ height: "auto", backgroundColor: "#fff",  borderRadius: "15px" }}>
      <div style={{ width:matches?"95%": "100%", height: "250px", alignItems: "center", display: "flex", justifyContent: "center" }}>
        <div style={{ width:matches?"90%": "95%", height: "200px", borderRadius: "7px", border: '2px solid #C1DBFB', backgroundColor: "rgb(245 249 254 )" ,display:"flex", flexDirection:"column" }}>
          <div style={{ fontFamily: "Ubuntu",display:"flex",flexDirection:"column" }}>
            <div style={{ fontSize: "16px", padding: "15px", display: "flex", alignItems: "center", fontWeight: 600 }}>
              Job highlights

            </div>
            <div style={{ fontSize: "20px", padding: matches?"10px":"18px" }}>
              <div style={{ width:matches? "80px":"750px", display: "flex", alignItems: "center" ,flexDirection:matches?"column":"row"}}>
                <div style={{ display: "flex",justifyContent:"right", alignItems: "center", width: matches?"245px":"auto"}}>
                  <div>
                    <img src={hots} />
                  </div>

                  {desc.message}
                </div>


                <div style={{ display: "flex", fontsize: "25px", marginLeft:matches?"0%":"30%" , justifyContent:"right", alignItems: "center",width: matches?"245px":"auto"}}>
                  <div>
                    <img src={applicants} style={{ width: "30px" }} />
                  </div>
                  {desc.vacancy}
                </div>

              </div>
              <div style={{ display: "flex", marginTop: "7px", alignItems: "center", alignItems: "center"}}>
                <div>
                  <img src={checks} style={{ fontSize: "5px",objectFit:"contain" }} />

                </div>
                {desc.beniftsinclude}
              </div>
            </div>
          </div>
        </div>
      </div>









      
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider style={{ width: "95%", border: "0.5px solid grey" }} />
      </div>
      <div style={{ width:"95%", fontFamily: "Ubuntu", marginTop: "10px", marginLeft: matches?"25px":"15px" }}>
        <div style={{ fontSize: "16px", fontWeight: 600 }}>
          Job Descripition
        </div>
        <div style={{ fontSize: "15px", marginTop: "7px" }}>
          {/* {desc.Role} */}
        </div>
        <div style={{ marginTop: "7px", fontSize: "14px",color:"#190A28",fontFamily:"Ubuntu" }}>
          {parse("" + data?.jobdeatails)}
        </div>
        <div>
        <p style={{fontSize:"16px",fontWeight:600}}>Qualification</p>
          <div style={{ display: "flex" ,fontSize:"10px"}}>
            {boxList(JSON.parse(data?.qualification))}
          </div>
        </div>

        <div>
        <p style={{fontSize:"16px",fontWeight:600}}>Supplementalpay</p>
        <div style={{fontSize:"14px"}}>
          {parse(data?.supplementalpay)}
          </div>
        </div>
        <div>
          <p><b>Perks</b></p>
          <div syle={{fontSize:"14px"}}>
          {parse(data?.benifits)}
          </div>
        </div>
        <div>

          <p style={{fontSize:"16px",fontWeight:600}}>Work Location City</p>
          <div style={{ display: "flex" }}>
            {boxListCity(JSON.parse(data?.worklocationcity))}
          </div>
        </div>




      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Divider style={{ width: "96%", border: "0.5px solid grey", marginTop: "10px" }} />
      </div>
      <div style={{ width: "95%", fontFamily: "Ubuntu", marginTop: "10px",  marginLeft: matches?"25px":"15px" }}>
        <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>
          Job Role
        </div>
        <div style={{ width: '60%',  display: matches ? "block" : "flex" }}>
          <div style={{  display : "flex", width: matches ? "100%" : "60%"  }}>
            <div>
              <img src={Department} style={{ width: "20px", color: "grey" }} />
            </div>
            <div style={{ marginLeft: "5px" }}>
              <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
                Department
              </div>
              <div style={{ fontSize: "10px" ,color:"#190A28"}}>
                {data?.categoryname}
              </div>
            </div>
          </div>
          <div>

            <div style={{ display: "flex", alignItems: "center",marginTop: matches ? "10px" : "0px"  }}>
              <div>
                <img src={shiftwise} style={{ width: "20px" }} />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
                  Shift
                </div>

                <div style={{ fontSize: "10px" ,color:"#190A28"}}>
                  {data?.schedule}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ width: "95%", fontFamily: "Ubuntu", marginTop: "10px", }}>
          <div style={{ width: '60%',display: matches ? "block" : "flex"}}>
            <div style={{ display: "flex", width: matches ? "100%" : "60%"  }}>
              <div>
                <img src={Role} style={{ width: "20px" }} />
              </div>
              <div style={{ marginLeft: "5px" }}>
                <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
                  Role/Category
                </div>
                <div style={{ fontSize: "10px" }}>
                  {data.subcategoryname}
                </div>
              </div>

            </div>
            <div>
          
              <div style={{ display:"flex",  marginTop:matches?"8px": "0px", alignItems: "center", marginLeft:matches?"0px": "15px",width: matches ? "100%" : "95%"  }}>
                <div>
                  <img src={EmplyomentType} style={{ width: "20px", color: "grey" }} />
                </div>
                <div style={{ marginLeft: "5px" }}>
                  <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
                    Emplyoment Type
                  </div>

                  <div style={{ fontSize: "10px" }}>
                    {desc.jobtype}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "center" }}>
          <Divider style={{ width: matches?"96%":"101%", border: "0.5px solid grey", marginTop: "10px" }} />
        </div>
      </div>

      

<div style={{ width: "95%", fontFamily: "Ubuntu", marginTop: "10px", marginLeft: matches?"25px":"15px"}}>
  <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>
    Job requirements
  </div>

  <div style={{ width: '52%',display:matches?"block":"flex"}}>
    <div style={{ display: "flex", width: matches ? "100%" : "70%" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={Work} style={{ width: "21px" }} />
      </div>
      <div style={{ marginLeft: "5px" }} >
        <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
          Experience
        </div>
        <div style={{ fontSize: "10px" }}>
          {data.Experience + " " + " years"}
        </div>
      </div>
    </div>
       <div style={{display:"flex", marginTop:matches?"10px":"0"}}>
    <div style={{display:"flex", alignItems: "center",  }}>
      <img src={Department} style={{ width: "20px", color: "grey", marginRight: "7px" }} />
    </div>
    <div>
      <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
        Education
      </div>
      <div style={{ fontSize: "10px" }}>
        {desc.education}
      </div>
    </div>
    </div>
  </div>

  <div style={{ width: "95%",display:matches?"block":"flex", fontFamily: "Ubuntu", marginTop: "10px" }}>
    <div style={{ width: '80%', display:matches?"block" :"flex", justifyContent: matches ? "start" : "space-between" }}>
      <div style={{ display:"flex", width: matches ? "100%" : "25%" }}>
        <div>
          <img src={Role} style={{ width: "20px" }} />
        </div>
        <div style={{ marginLeft: "5px" }}>
          <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
            Englishlevel
          </div>
          <div style={{ fontSize: "10px" }}>
            {desc.Englishlevel}
          </div>
        </div>
      </div>
      <div style={{ display: matches?"block":"flex", width: matches ? "100%" : "55%", marginTop: matches ? "10px" : "0px" }}>
        <div style={{ display:"flex", alignItems: "center", marginLeft: matches?"0px":"15px" }}>
          <div>
            <img src={EmplyomentType} style={{ width: "20px", color: "grey", marginRight: "7px" }} />
          </div>
          <div>
            <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
              Degree/Specilization
            </div>
            <div style={{ fontSize: "10px" }}>
              {desc.Degree}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style={{ width: "90%", display: matches ? "block" : "flex", justifyContent: "space-between", marginTop: "7px" }}>
    <div style={{ width: '52%', display: matches ? "block" : "flex", justifyContent: matches ? "start" : "space-between" }}>
      <div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src={shiftwise} style={{ width: "20px" }} />
          </div>
          <div style={{ marginLeft: "5px" }}>
            <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
              Age
            </div>
            <div style={{ fontSize: "10px" }}>
              {desc.age}
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", marginTop: matches ? "10px" : "0px" }}>
        <div>
          <img src={shiftwise} style={{ width: "20px", marginRight: "7px" }} />
        </div>
        <div>
          <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
            Gender
          </div>
          <div style={{ fontSize: "10px", marginLeft: "2px" }}>
            {desc.gender}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style={{ display: "flex", justifyContent: "center" }}>
    <Divider style={{ width:  matches?"96%":"101%", border: "0.5px solid grey", marginTop: "10px" }} />
  </div>
</div>




      <div style={{ width: "95%", fontFamily: "Ubuntu", marginTop: "10px",  marginLeft: matches?"25px":"15px" }}>
        <div style={{ fontSize: "16px", fontWeight: 600, marginBottom: "10px" }}>
          About company
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src={`${serverURL}/images/${desc.icon}`} style={{ width: "30px" }} />
          </div>
          <div>
            <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
              Name
            </div>
            <div style={{ fontSize: "10px" }}>
              {data.companyname}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img src={Work} style={{ width: "30px", marginTop: "15px" }} />
          </div>
          <div style={{ marginTop: "15px" }}>
            <div style={{color:"#8c8594",fontSize:"14px",lineHeight:"24px"}}>
              Address
            </div>
            <div style={{ fontSize: "10px" }}>
              {data.companyaddress},{data.cityname},{data.statename}
            </div>
          </div>
        </div>


        <div style={{ display: "flex", justifyContent: "center" }}>
          <Divider style={{ width: matches?"96%":"101%", border: "0.5px solid grey", marginTop: "10px" }} />
        </div>
        <div style={{ display: 'flex', gap: '4px', padding: "15px" }}><span style={{fontSize:"16px",lineHeight:"24px",color:"#8C8594"}}> job posted by</span><b style={{fontSize:"14px",lineHeight:"24px"}}>{data.companyname}</b></div>








      </div>
    </div>
  </div>)
}