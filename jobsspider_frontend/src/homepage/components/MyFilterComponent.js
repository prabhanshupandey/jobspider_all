
import Header from "../components/Header";
import MainSearch from "../components/MainSearch";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import FilterComponent from "./FilterComponent";
import UserReviewComponent from "./UserReviewComponent"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Advertisment from "./Advertisment";
import { getData, postData } from "../../services/FetchNodeServices";
import ShrinkSearchComponent from "./ShrinkSearchComponent";
import SingleShrinkSearchComponent from "./SingleShrinkSearchComponent";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import JobCartScroll from "./JobCartScroll";
import Footer from "./Footer";
import login from "../../assets/login.png";
import JobCity from "./JobCity";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import PopularJobs from "./PopularJobs";
import JobComponent from "./JobComponent";
import HireCity from "./HireCity";
import Links from "./Links";
import JobsByDepartment from "./JobsByDepartment";
import { useDispatch, useSelector } from 'react-redux';
import afterlogin from '../../assets/afterlogin.png'

export default function MyFilterComponent() {
  const theme = useTheme();
  const navigate = useNavigate()
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const [jobs, setJobsList] = useState([])
  const [refresh, setRefresh] = useState(false)

  var locations = useSelector(state => state.user)
  var dispatch = useDispatch()
  var homeUser = localStorage.getItem("USER")
  console.log("USER:sssss", homeUser)

  if (homeUser != null) {
    locations = JSON.parse(homeUser)
  }
  const params = useParams()
  console.log("Params:", params)

  // var skill= params.skill
  // console.log(skill)
  // const location=useLocation()
  // var skill= location.state.skill
  // console.log("skill",skill)
  // // var skill= location.pathname


  const location = useLocation()
  console.log("LOCATION:", location.search);
  const keys = new URLSearchParams(location.search)
  console.log("keys:", keys.get("skills"))
  var skills = keys.get("skills");
  var skillid = keys.get("skillid");
  var categoryid = keys.get("categoryid");
  var subcategoryid = keys.get("subcategoryid");
  var cityid = keys.get("cityid");
  var cityname = keys.get("cityname");
  var expr = keys.get("exp");
  console.log("keys:2", expr)


  const [exp, setExp] = useState(expr)
  const [time, setTime] = useState("0")
  const [sal, setSal] = useState(10000)
  const [jobTypeList, setJobTypeList] = useState([]);
  const [workModeList, setWorkModeList] = useState([]);
  const [workShiftList, setWorkShiftList] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [sortBy, setSortBy] = useState("relevant");
  const [sortOrder, setSortOrder] = useState("desc");




  const fetchjobs = async () => {
    const combinedJobTypes = [...jobTypeList, ...workModeList];

    var res = await postData('userinterface/main_search_jobs', {
      skills: skills, skillid: skillid, categoryid, subcategoryid, expr: exp, time, sal, educationList,
      jobtypes: combinedJobTypes, workShiftList, sortBy, cityid, cityname,
      sortOrder
    })
    //  alert(JSON.stringify(res.data))
    setJobsList(res.data)
  }


  useEffect(function () {
    setJobsList([])
    fetchjobs();
  }, [refresh])

  useEffect(function () {
    fetchjobs();
  }, [])


  return (<div style={{ backgroundColor: matches ? "#F4F2F6" : "#fff" }}>
    <div style={{ width: "100%", height: "100%", }}>
      <div>
        <Header />
      </div>
    </div>
    <div style={{ backgroundColor: matches ? "#F4F2F6" : "#fff" }}>
      <div style={{ width: "100%", height: "100px", display: "flex", alignItems: "center" }}>

        <div style={{ marginLeft: matches ? "15%" : "0%" }}>

          {matches ? <MainSearch
            param_skill={{ skills: skills, skillid: skillid, categoryid, subcategoryid }}
            param_city={{ cityid, cityname }}
            refresh={refresh}
            setRefresh={setRefresh}
            exp={exp}
            setExp={setExp}
          />

            : <SingleShrinkSearchComponent
              param_skill={{ skills: skills, skillid: skillid, categoryid, subcategoryid }}

              refresh={refresh}
              setRefresh={setRefresh}
              exp={exp}
              setExp={setExp}

            />}
          {/* {matches?<MainSearch params_skill={skill} />:<SingleShrinkSearchComponent params_skill={skill}/>} */}
        </div>
      </div>
    </div>


    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ width: matches ? "70%" : "89%" }}>
        <div>
          <div>
            <Typography sx={{ fontSize: "20px", lineHeight: "28px", color: "#172b4d" }}>
              500+ search results
            </Typography>
          </div>

          <Grid container spacing={2}>
            <Grid size={12}>
            </Grid>

            {matches ? <Grid size={3}>
              <FilterComponent exp={exp} setExp={setExp} time={time} setTime={setTime} sal={sal} setSal={setSal}
                jobTypeList={jobTypeList} setJobTypeList={setJobTypeList}
                workModeList={workModeList}
                setWorkModeList={setWorkModeList}
                workShiftList={workShiftList}
                setWorkShiftList={setWorkShiftList}
                educationList={educationList} setEducationList={setEducationList}
                sortBy={sortBy}
                setSortBy={setSortBy}
                sortOrder={sortOrder}
                setSortOrder={setSortOrder}
              />
            </Grid> : <></>}


            <Grid size={matches ? 6 : 12}  >
              <JobCartScroll JobCart={jobs} />
            </Grid>
            {matches ? (
              <Grid size={3}>
                {locations == null ? <Advertisment /> : <img src={afterlogin} alt="Login" style={{ width: '100%' }} />}
              </Grid>
            ) : null}




            {/* {matches ? <Grid size={3}>
         <Advertisment />
            </Grid> : <></>}  */}
          </Grid>

        </div>
      </div>
    </div>

    {matches ? <></> : <div>
      <a href="/readynextpage">
        {locations == null ? (

          <img src={login} style={{ width: '97%', marginTop: '15px', border: "2px solid #C7DAF4", backgroundPosition: "center", borderRadius: "8px", marginLeft: "10px" }} />
        ) : (
          <img src={afterlogin} alt="Login" style={{ width: '100%' }} />
        )}
      </a>
    </div>}
    <div style={{ marginTop: "30px" }}>
      <UserReviewComponent />
    </div>
    <div style={{ width: "100%", backgroundColor: "rgb(244, 242, 246)", justifyContent: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ width: '80%' }}><JobCity /></div>

      <div style={{ width: '80%' }}><HireCity /></div>

      <div style={{ width: '80%' }}><PopularJobs /></div>

      <div style={{ width: '80%' }}><JobsByDepartment /></div>

      <div style={{ width: '80%' }}><Links /></div>



    </div>
    <div>
      <Footer />
    </div>
  </div>

  )

}

