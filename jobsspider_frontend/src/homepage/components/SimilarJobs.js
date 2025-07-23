
import { useState } from "react";
import { Paper, Button, Divider } from "@mui/material";
import { serverURL } from "../../services/FetchNodeServices";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Location from "../../assets/Location_icon.webp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import work from "../../assets/work.avif";
import salary from "../../assets/Salary_icon.webp";
import expirence from "../../assets/Experience.avif";
import english from "../../assets/english.webp";
import fulltime from "../../assets/Full time.avif";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useNavigate } from "react-router-dom";


export default function SimilarJobs({ JobCart }) {

  const [visibleJobs, setVisibleJobs] = useState(3);
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleJobs(JobCart.length); 
  };

  const boxList = (data) => {
    return data.map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          width: "auto",
          height: "20px",
          fontSize: 12,
          marginRight: "5px",
          borderRadius: "2px",
          backgroundColor: "#f2f2f3",
          color: "#8c8594",
          marginTop: "5px",
        }}
      >
        <div style={{ padding: "3px" }}>{item.cityname}</div>
      </div>
    ));
  };
  const navigate=useNavigate();
  const handleNext=(item)=>{
    const queryString = new URLSearchParams(item).toString();
    navigate(`/descripition?${queryString}`);
  };

  return (
    <div style={{ width: "100%" }}>
      <Paper elevation={2} style={{ width: "90%", height: "auto", backgroundColor: "#fff", borderRadius: "15px" }}>
        <div style={{ padding: "15px", background: "#fff", width: "100%", height: "auto", borderRadius: "7px" }}
        
     
        >
          <div style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>Similar jobs</div>

          {JobCart.slice(0, visibleJobs).map((item, index) => (
            <div key={index}>
              <div style={{ display: "flex", alignItems: "center", fontFamily: "Ubuntu" }}
                 onClick={()=>handleNext(item)}
              
              >
                <div>
                  <img src={`${serverURL}/images/${item.logo}`} style={{ width: "30px" }} alt="Company Logo" />
                </div>
                <div style={{ display: "flex", width: "100%", marginTop: "10px" }}>
                  <div style={{ alignItems: "center", marginLeft: "7px" }}>
                    <div style={{ fontFamily: "Ubuntu", fontSize: "16px", alignItems: "center", fontWeight: "bold" }}>
                      {item.categoryname} {item.subcategoryname}
                    </div>
                    <div style={{ fontFamily: "Ubuntu", fontSize: "15px", color: "#8C8594", marginBottom: "10px" }}>
                      {item.companyname}
                    </div>
                  </div>
                </div>
                <div onClick={() => handleNext(item)} style={{ marginLeft: "auto", color: "#8C8594", cursor: "pointer" }}>
                  <ArrowForwardIosIcon style={{ color: "#b03a84" }} />
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", fontFamily: "Ubuntu", color: "#8C8594", marginBottom: "7px" }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <img src={Location} style={{ width: "15px" }} alt="Location" />
                </div>
                <div style={{ fontSize: "15px", display: "flex" }}>{boxList(JSON.parse(item.worklocationcity))}</div>
              </div>

              <div style={{ display: "flex", color: "#8C8594", marginBottom: "5px" }}>
                <div style={{ marginTop: "5px" }}>
                  <img src={salary} style={{ width: "15px", color: "#8C8594" }} alt="Salary" />
                </div>
                <div style={{ display: "flex", fontSize: "15px", alignItems: "center" }}>
                  <CurrencyRupeeIcon style={{ width: "10px" }} />
                  {item.minsalary}-
                  <CurrencyRupeeIcon style={{ width: "10px" }} />
                  {item.maxsalary} monthly
                </div>
              </div>

              <div style={{ display: "flex" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "auto",
                    margin: "2px",
                    width: "auto",
                    fontFamily: "Ubuntu",
                    fontSize: 10,
                    backgroundColor: "#f2f2f3",
                    color: "#8c8594",
                    borderRadius: "2px",
                  }}
                >
                  <div>
                    <img src={fulltime} style={{ width: "17px" }} alt="Job Type" />
                  </div>
                  <div style={{ padding: "5px", color: "#8C8594" }}>{item.jobtype}</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "2px",
                    height: "auto",
                    width: "auto",
                    borderRadius: "2px",
                    fontSize: 10,
                    fontFamily: "Ubuntu",
                    backgroundColor: "#f2f2f3",
                    color: "#8c8594",
                  }}
                >
                  <AccessTimeIcon style={{ width: "17px", marginLeft: "2px", color: "#8C8594" }} />
                  <div style={{ padding: "5px", color: "#8C8594" }}>{item.schedule}</div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "auto",
                    width: "auto",
                    backgroundColor: "#f2f2f3",
                    color: "#8c8594",
                    fontSize: 10,
                    fontFamily: "Ubuntu",
                    borderRadius: "2px",
                    margin: "2px",
                  }}
                >
                  <img src={expirence} style={{ width: "17px", marginLeft: "2px" }} alt="Experience" />
                  <div style={{ padding: "5px", color: "#8C8594" }}>{item.Experience} years</div>
                </div>
              </div>
                  
             
                 {!(showAll && index === visibleJobs - 1) && (
           <div style={{ padding: 12 }}>
            <Divider />
           </div>
             )}




            </div>
          ))}

          {!showAll && (
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                style={{
                  fontWeight: "bold",
                  color: "#fff",
                  backgroundColor: "#b03a84",
                  fontSize: "10px",
                  width: "215px",
                  height: "30px",
                  borderRadius: "3px",
                }}
                onClick={handleShowMore}
              >
                Show More <KeyboardArrowDownIcon />
              </Button>
            </div>
          )}
        </div>
      </Paper>
    </div>
  );
}
