import { Divider } from "@mui/material";
import map from "../assets/map.png";
import { Paper } from "@mui/material";
import Button from '@mui/material/Button';
import { useState } from "react";
import logo from "../assets/resumelogo.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from "@mui/icons-material/MyLocation";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Flash from '../assets/flash.png';
import BoltIcon from '@mui/icons-material/Bolt';

export default function Resume({ progress = 20 }) {
  return (
    <div style={{ background: "#fff", width: '100%', height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", border: "1px solid black" }}>
      <div style={{ display: "flex", width: "100%", height: "100vh", backgroundColor: "pink", justifyContent: "center" }}>
        <Paper style={{ width: "40%", overflowY: "auto", height: "87vh", background: "#fff", borderRadius: "8px" }}>
          
          {/* Header Area */}
          <div style={{ width: "90%", height: "auto", display: 'flex',  alignItems: 'center', padding: 25 ,gap:"130px"}}>
            <div style={{ fontSize: "18px", fontWeight: 600, display: "flex", alignItems: "center" }}>
              <ArrowBackIcon style={{ marginRight: "5px" }} />
              Resume
            </div>

            <div style={{ width: "60%", height: 12, borderRadius: 8, backgroundColor: "#e5e7eb" }}>
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  backgroundColor: '#165B48',
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  transition: 'width 0.3s ease-in-out',
                }}
              />
            </div>
          </div>

          <Divider style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%" }} />

          {/* Resume Area */}
          <div style={{ padding: 20, backgroundColor: "#FAF5FF", height: "50vh" }}>
            <div style={{ fontSize: "20px", lineHeight: "28px", fontWeight: 600, marginBottom: "8px", textAlign: "center" }}>
              Upload your resume!
            </div>
            <div style={{ fontSize: "16px", lineHeight: "24px", fontWeight: 500, marginBottom: "12px", textAlign: "center" }}>
              Receive 2x job offers after uploading
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "12px",
                  borderRadius: "4px",
                  background: "#FFFCED",
                  height: "20px",
                  width: "185px",
                  fontSize: "12px",
                  lineHeight: "12px",
                  border: "1px solid #dcdcdc",
                }}
              >
                <BoltIcon style={{ color: "#ffd166", width: "15px", height: "15px", objectFit: "cover", marginRight: "2px" }} />
                Takes less than a min to upload
              </div>
            </div>
             {/* checkbox Area */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "15px", gap: "5px" }}>
              <img src={logo} style={{ width: "70px", height: "70px", objectFit: "cover" }} />
              <div style={{ fontSize: "14px", lineHeight: "20px", textAlign: "center" }}>
                Upload .pdf or .docx file only<br />
                (Max file size: 5 MB)
              </div>
            </div>

            <div style={{ marginLeft: "30px", marginTop: "30px" }}>
              <div style={{ height: '12px', fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <CheckCircleIcon style={{ width: 10, marginRight: "3px", color: "#827485" }} />
                Unlock jobs from top companies faster
              </div>

              <div style={{ height: '18px', fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <CheckCircleIcon style={{ width: 10, marginRight: "3px", color: "#827485" }} />
                Get direct calls from top HRs
              </div>

              <div style={{ height: '8px', fontSize: "14px", lineHeight: "20px", display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <CheckCircleIcon style={{ width: 10, marginRight: "3px", color: "#827485" }} />
                Get jobs specifically suited for your role and experience level
              </div>
            </div>
          </div>

          {/* Button Area */}
          <div style={{ marginLeft: "28px", marginTop: "15px" }}>
            <Button
              sx={{
                backgroundColor: "#fff",
                borderRadius: "4px",
                border: "1px solid #20826880",
                textTransform: "none",
                width: "95%",
                height: "40px",
                color: "#165B48",
                '&:hover': {
                  border: "1px solid #165B48",
                },
              }}
            >
              Search City
            </Button>

            <div style={{ marginTop: "15px" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#2D8A6D",
                  color: "#fff",
                  textTransform: "none",
                  width: "95%",
                  height: "50px",
                  fontWeight: "bold",
                  fontSize: "18px",
                  "&:hover": {
                    backgroundColor: "#165B48",
                  },
                }}
              >
                Select
              </Button>
            </div>
          </div>
        </Paper>
      </div>
    </div>
  );
}
