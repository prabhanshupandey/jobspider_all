import { serverURL } from "../../services/FetchNodeServices";
import Work from "../../assets/work.avif";
// import HomeIcon from '@mui/icons-material'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { Button, Divider } from "@mui/material";
import ShareIcon from '@mui/icons-material/Share';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import fulltime from "../../assets/Full time.avif";
import { useState } from "react";
import english from "../../assets/english.avif";
import { useNavigate } from "react-router-dom";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { WhatsappShareButton } from "react-share";




export default function CartDetailsComponent({ data }) {
  const navigate = useNavigate()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  var desc = {
    companyid: 1, companyname: "Wpiro", Role: "Software Developer Engineer", jobtype: "Work From Home", minsalary: "116,000", maxsalary: "125,000", Expirence: "Min .2 years", JobPrefrences: "Part Time", Language: "Good(Intermediate/Advanced)English", icon: "wipro.png", message: "urgently hiring", beniftsinclude: " PF, Laptop, Health Insurance, 5 working days", vacancy: "197 applicants", EarningPotential: "125,000", Descripition: "We are seeking a highly skilled and experienced Full Stack MERN Developer to lead our latest projects. This unique position not only requires a strong technical background in the MERN stack (MongoDB, Express.js, React, and Node.js) but also substantial experience in product management"


    , address: "10th floor, Indraprastha Corporate, opp. Venus Atlantis, Chinar Bungalows, Prahlad Nagar, Ahmedabad, Gujarat 380015 Prahlad Nagar, Ahmedabad Region", icon: "wipro.png"
    , worklocation: "Sai Arcade, NS Road, Vidya Vihar, Mulund West, Mumbai, Maharashtra, India", shift: "day shift", department: "software Engeenering", category: "IT", age: "22-44 years", gender: "male", education: "12 pass", Englishlevel: "Basic English", Degree: "Any Dual Degree (BE/B.Tech + ME/ M.Tech), Any B.Sc, Any MCA, Any BCA, Any BE/B.Tech (Atleast one)"
  }

  const handleButton = () => {
    const queryString = new URLSearchParams(data).toString();
    navigate(`/applyforms?${queryString}`, { state: { data: data } });
  }
  const shareUrl = window.location.href;
  const shareMessage = `${shareUrl}`;
  return (
    <div style={{ overflowY: "scroll", scrollbarWidth: "none", paddingTop: matches ? "20px" : "20px" }}>
      <div style={{ display: "flex", flexDirection: matches ? "column" : "row", }}>
        <div
          style={{
            width: matches ? "" : "770px",
            backgroundColor: "#fff",
            // backgroundColor: "red",
            borderRadius: "10px",
            fontFamily: "Ubuntu",
            padding: matches ? "30px" : "15px",
            boxShadow: "0px 2px 10px rgba(0,0,0,0.05)"
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
            <img
              src={`${serverURL}/images/${data.logo}`}
              style={{
                maxWidth: "40px",
                objectFit: "contain",
                marginRight: "10px"
              }}
              alt="logo"
            />
            <div>
              <div style={{ fontWeight: "bold", fontSize: "15px" }}>
                {data.categoryname} {data.subcategoryname}
              </div>
              <div style={{ fontSize: "12px", color: "#8c8594" }}>{data.companyname}</div>
            </div>
          </div>

          {/* Payment Info */}
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "10px", fontSize: "13px", color: "#5E686D", marginBottom: "10px" }}>
            <div>{data.jobtype}</div>
            <div style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}>
              <PaymentsOutlinedIcon style={{ marginRight: "5px" }} />
              <CurrencyRupeeIcon style={{ width: "15px", marginRight: "2px" }} />
              {data.minsalary} -
              <CurrencyRupeeIcon style={{ width: "15px", margin: "0 2px" }} />
              {data.maxsalary} monthly
            </div>
          </div>

          {/* Salary Box */}
          <div style={{
            width: "98%",
            padding: "8px",
            borderRadius: "5px",
            backgroundColor: "#edebee80",
            display: "flex",
            justifyContent: matches ? "space-between" : "start",
            flexDirection: matches ? "column" : "row",
            gap: matches ? "10px" : "60px",
            marginBottom: "10px"
          }}>
            <div style={{ fontSize: "14px", color: "#8c8594" }}>
              Fixed
              <div style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                <CurrencyRupeeIcon style={{ width: "15px" }} />
                {data.minsalary} -
                <CurrencyRupeeIcon style={{ width: "15px" }} />
                {data.maxsalary} monthly
              </div>
            </div>
            <div style={{ fontSize: "14px", color: "#8c8594" }}>
              Earning Potential
              <div style={{ fontWeight: "bold", display: "flex", alignItems: "center", gap: "4px" }}>
                <CurrencyRupeeIcon style={{ width: "15px" }} />
                {desc.EarningPotential}
              </div>
            </div>
          </div>

          {/* Job Type Tags */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            marginBottom: "10px"
          }}>
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f2f2f3",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "13px",
              color: "#8c8594"
            }}>
              <img src={Work} alt="work" style={{ width: "20px", marginRight: "5px" }} />
              {data.jobtype}
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f2f2f3",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "13px",
              color: "#8c8594"
            }}>
              <AccessTimeIcon style={{ fontSize: "18px", marginRight: "5px" }} />
              {data.schedule}
            </div>
            <div style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "#f2f2f3",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "13px",
              color: "#8c8594"
            }}>
              <img src={fulltime} alt="fulltime" style={{ width: "20px", marginRight: "5px" }} />
              {data.Experience} years
            </div>
          </div>

          {/* Buttons */}
          <div style={{
            display: "flex",
            flexDirection: matches ? "column" : "row",
            alignItems: "center",
            gap: "10px",
            marginTop: matches ? "25px" : "0px"
          }}>
            <Button
              variant="contained"
              fullWidth
              style={{
                backgroundColor: "#b03a84",
                fontSize: "15px",
                height: "50px"
              }}
              onClick={handleButton}
            >
              Apply for job
            </Button>

            <WhatsappShareButton
              url={shareUrl}
              title={shareMessage}
              separator=":: " style={{
                height: "50px",
                borderRadius: "5px",
                border: "1px solid #b03a84",
                backgroundColor: "#fff",
                color: "#b03a84",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0 15px",
                fontWeight: "bold",
                fontSize: "14px",
                gap: "6px",
                width: matches ? "92%" : "auto"
              }}>

              <ShareIcon style={{ fontSize: 16 }} />
              Share
            </WhatsappShareButton>


          </div>
        </div>
      </div>
    </div>

  );
}
