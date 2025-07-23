import * as React from 'react';
import background from '../assets/jobseeker_bg.png';
import Button from '@mui/material/Button';
import { homeStyles } from "../userlogin/UserLoginCss";
import Grid from '@mui/material/Grid2';
import mobile from '../assets/mobile_verification.png';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { postData, generateOtp } from "../services/FetchNodeServices";

export default function Mobileotp() {
  const classes = homeStyles();
  const navigate = useNavigate();
  const location = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false); // For validation
  const status = location?.status;

  //alert("bbbbbbbbb"+otp)
  const handleCheckOtp = () => {
    if (!otp) { // Removed the trim condition
      setOtpError(true);
      return;
    } else {
      setOtpError(false);
    }

    if (location?.ot == otp && status == "Mobile") {
      navigate('/email');
    } else if (location?.ot == otp && status == "Email") {
      navigate('/password');
    } else {
      alert("Invalid Otp.....");
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
    }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: 5,marginTop:60}}>
            <img src='/spider.png' style={{ width: 40 }} />
          </div>
          <div style={{ fontWeight: 700, fontSize: 24,marginTop:60}}>
            JobsSpider
          </div>
        </div>
      </div>

      <div  style={{ display: "flex", justifyContent: "center" }}>
        <div className={classes.box} style={{ height: 480, marginTop: 10, backgroundColor: '#fff', border: '0.09rem #dfe6e9 solid', borderRadius: 10 }}>
          <div
            style={{
              borderRadius: 10,
              backgroundImage: `url(${mobile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "200px"
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            </div>
          </div>

          <div style={{ fontWeight: "bolder", fontFamily: "Ubuntu", fontSize: "16px", marginBottom: "18px" }}>
            Enter the code
          </div>
          <div style={{ fontWeight: "lighter", fontFamily: "Ubuntu", fontSize: "16PX", marginBottom: "16px", color: "grey" }}>
            Enter the verification code sent to you on {status === "Mobile" ? <b style={{color:"black"}}>{location?.emailMobile}</b> : <b style={{color:"black"}}>{location?.emailaddress}</b>}
          </div>

          <Grid size={12}>
            <div style={{ marginBottom: 20, fontFamily: "Ubuntu" }}>
              4-digit code*
            </div>
            <TextField
              onChange={(e) => {
                setOtp(e.target.value);
                setOtpError(false);
              }}
              value={otp}
              label="Enter 4-digit code"
              fullWidth
              error={otpError}
              helperText={otpError ? "Please fill this information" : ""}
            />
          </Grid>

          <div style={{ fontWeight: "lighter", fontFamily: "Ubuntu", fontSize: "16PX", marginBottom: "16px", color: "grey" }}>
            This code will expire within 10 minutes.
          </div>

          <Grid size={12}>
            <Button onClick={handleCheckOtp} style={{ marginBottom: '7px', fontFamily: "Ubuntu" }} fullWidth variant="contained">
              Submit
            </Button>
          </Grid>

          <Grid size={12}>
            <Button style={{ marginBottom: '7px', fontFamily: "Ubuntu" }} fullWidth variant="text">
              Resend A Code
            </Button>
          </Grid>
        </div>
      </div>
    </div>
  );
}
