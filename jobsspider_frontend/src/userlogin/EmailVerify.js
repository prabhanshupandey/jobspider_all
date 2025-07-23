import * as React from 'react';

import Button from '@mui/material/Button';
import { homeStyles } from "../userlogin/UserLoginCss"
import Grid from '@mui/material/Grid2';
import mobile from '../assets/mobile_verification.png'
import { TextField } from '@mui/material';
import background from '../assets/jobseeker_bg.png';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom'
import { generateOtp } from '../services/FetchNodeServices'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function EmailVerify() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = homeStyles();
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const dispatch = useDispatch()
  var location = useSelector(state => state.user)

  //alert(JSON.stringify(location))
  const handleChange = (e) => {
    if (otp == location.ot && location?.status == "Mobile") {
      navigate("/password")
    }
    else if (otp == location.ot && location?.status == "Email") {
      navigate("/mobile")
    }
    else {
      alert("Invalid password")
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
        <div style={{ display: 'flex', alignItems: 'center' }} >
          <div style={{ marginRight: 5, marginTop: 60 }}>
            <img src='/spider.png' style={{ width: 40 }} />
          </div>
          <div style={{ fontWeight: 700, fontSize: 24, marginTop: 60 }}  >
            JobsSpider
          </div>
        </div>
      </div>


      <div style={{ display: "flex", justifyContent: "center" }}>

        <div className={classes.box} style={{ height: 494, marginTop: 10, backgroundColor: "white", border: '0.09rem #dfe6e9 solid' }} >
          <div
            style={{

              borderRadius: 10,
              backgroundImage: `url(${mobile})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%", // or a specific width
              height: "200px" // or any height you want
            }}
          ></div>

          <div style={{ fontWeight: "bolder", fontFamily: "Ubuntu", fontSize: "16px", marginBottom: "18px" }}>
            Enter the code
          </div>
          <div style={{ fontWeight: "lighter", fontFamily: "Ubuntu", fontSize: "16PX", marginBottom: "16px", color: "gray" }}>
            Enter the verification code sent to you on Email {location?.status == "Mobile" ? <b>{location?.emailaddress}</b> : <b>{location?.emailMobile}</b>}
          </div>
          <Grid size={12} >
            <div style={{ marginBottom: 5 }}>
              6-digit code*
            </div>
            <TextField
              onChange={(e) => {
                setOtp(e.target.value);
              }}
              value={otp}
              label="Enter 4-digit code"
              fullWidth
            />
          </Grid>
          <div style={{ fontWeight: "lighter", fontFamily: "Ubuntu", fontSize: "16PX", marginBottom: "16px", color: "gray" }}>
            This code will expire within 10 minutes.
          </div>

          <Grid size={12}>
            <Button onClick={handleChange} style={{ marginBottom: '7px', fontFamily: "Ubuntu" }} fullWidth variant="contained">
              Submit
            </Button>
          </Grid>
          <Grid size={12} >
            <Button style={{ marginBottom: '7px', fontFamily: "Ubuntu" }} fullWidth variant="text">Resend A Code</Button>
          </Grid>
          <Grid size={12} >
            <Button style={{ marginBottom: '7px', fontFamily: "Ubuntu" }} fullWidth variant="text">Not now</Button>
          </Grid>


        </div>
      </div>
    </div>
  );
}

