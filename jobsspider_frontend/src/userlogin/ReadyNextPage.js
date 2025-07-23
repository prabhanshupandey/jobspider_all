import { TextField, Button, Divider } from "@mui/material";
import google from "../assets/google.png";
import apple from "../assets/apple.png";
import { homeStyles } from "../userlogin/UserLoginCss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import background from "../assets/readynextpage.png";
import { postData, generateOtp, getData } from "../services/FetchNodeServices";
import { useDispatch } from "react-redux";
import PasswordOtp from "./PasswordOtp";
import Swal from "sweetalert2";

export default function ReadyNextPage() {




  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = homeStyles();
  const [open, setOpen] = useState(false);
  const [emailMobile, setEmailMobile] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNext = async () => {
    if (!emailMobile.trim()) {
      setError("Please fill this information");
      return;
    }

    const isMobile = !emailMobile.includes("@");

    if (isMobile) {
      if (emailMobile.length > 0 && !/^\d+$/.test(emailMobile)) {
        setError("Please enter a valid email address (e.g. example@email.com)");
        return;
      }

      if (emailMobile.length === 10 && /^\d{10}$/.test(emailMobile)) {
        setError("");
      } else if (emailMobile.length !== 10) {
        setError("Please enter a valid 10-digit mobile number");
        return;
      }
    } else {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (emailMobile && !emailRegex.test(emailMobile)) {
        setError("Please enter a valid email address (e.g. example@email.com)");
        return;
      }
      setError("");
    }
    console.log("ttttt:",emailMobile)

    var result = await postData('userinterface/check_account', { emailMobile });

    if (result.status) {
      const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.onmouseenter = Swal.stopTimer;
                      toast.onmouseleave = Swal.resumeTimer;
                    }
                  });
                  Toast.fire({
                    icon: "info",
                    title: "Account already Exist"
                  });
    
      if (emailMobile.includes("@")) {
        status = "Email"
        dispatch({ type: "ADD_USER", payload: { status, emailMobile: result?.data?.emailaddress, ot: '', loginstatus: "already exist" } })
        setOpen(true)
      }
      else {
        status = "Mobile"
        setOpen(true)
        alert("xxxx" + JSON.stringify(result.data))
        dispatch({ type: "ADD_USER", payload: { status, emailMobile: result?.data?.mobileno, ot: '', loginstatus: "already exist" } })
      }



    }
    else {
      var ot = generateOtp()

      var response = postData('smsapi/sendotp', { otp: ot, mobileno: emailMobile })
      var status = ''
      if (emailMobile.includes("@")) {
        status = "Email"
      }
      else { status = "Mobile" }
      dispatch({ type: "ADD_USER", payload: { status, emailMobile, ot, loginstatus: "first time" } })
      navigate("/jobseeker")
    }
  }

  // const handleNext = async () => {
  //   var result = await postData("userinterface/check_account", { emailMobile });
  //   console.log("aaaaaaaaaaaaaaa"+result)
  //   alert("Result" + JSON.stringify(result));
  //   if (emailMobile.length <= 0) {
  //     Swal.fire({
  //       icon: "error",
  //       text: "Mobile Number/Email Should Not Be Blank",
  //       toast: true,
  //       timer: 2000,
  //       showConfirmButton: false,
  //     });
  //   } else {
  //     if (result.status) {
  //       const Toast = Swal.mixin({
  //             toast: true,
  //             position: "top-end",
  //             showConfirmButton: false,
  //             timer: 4000,
  //             timerProgressBar: true,
  //             didOpen: (toast) => {
  //               toast.onmouseenter = Swal.stopTimer;
  //               toast.onmouseleave = Swal.resumeTimer;
  //             }
  //           });
  //           Toast.fire({
  //             icon: "info",
  //             title: "Account already Exist"
  //           });
  //       if (emailMobile.includes("@")) {
  //         status = "Email";
  //         dispatch({
  //           type: "ADD_USER",
  //           payload: {
  //             status,
  //             emailMobile: result?.data?.emailaddress,
  //             ot: "",
  //             loginstatus: "already exist",
  //           },
  //         });
  //         setOpen(true);
  //       } else {
  //         status = "Mobile";
  //         setOpen(true);
  //         alert("xxxx" + JSON.stringify(result.data));
  //         dispatch({
  //           type: "ADD_USER",
  //           payload: {
  //             status,
  //             emailMobile: result?.data?.mobileno,
  //             ot: "",
  //             loginstatus: "already exist",
  //           },
  //         });
  //       }
  //     } else {
  //       var ot = generateOtp();
  //       // var response=postData('smsapi/sendotp',{otp:ot,mobileno:emailMobile})
  //       // if (response.Status="Success") {
  //       //   const Toast = Swal.mixin({
  //       //     toast: true,
  //       //     position: "top-end",
  //       //     showConfirmButton: false,
  //       //     timer: 3000,
  //       //     timerProgressBar: true,
  //       //     didOpen: (toast) => {
  //       //       toast.onmouseenter = Swal.stopTimer;
  //       //       toast.onmouseleave = Swal.resumeTimer;
  //       //     }
  //       //   });
  //       //   Toast.fire({
  //       //     icon: "success",
  //       //     title: "OTP Send Successfully"
  //       //   });
  //       // }
  //       var status = "";
  //       if (emailMobile.includes("@")) {
  //         status = "Email";
  //       } else {
  //         status = "Mobile";
  //       }
  //       dispatch({
  //         type: "ADD_USER",
  //         payload: { status, emailMobile, ot, loginstatus: "first time" },
  //       });

  //       if (status == "Mobile") navigate("/mobileotp");
  //       else navigate("/emailverify");

  //       // navigate("/jobseeker");
  //     }
  //   }
  // };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      overflow: 'hidden',
      fontFamily: 'Ubuntu',
      padding: matches ? "10px" : "0"
    }}>
      <div style={{ display: "flex", justifyContent: matches ? 'center' : 'flex-start' }}>
        <div style={{
          display: 'flex',
          height: "15vh",
          padding: '15px',
          alignItems: 'end',
          marginLeft: matches ? 0 : '20%'
        }}>
          <img src='/spider.png' style={{ width: 40, marginRight: 5 }} />
          <div style={{
            fontWeight: 700,
            marginBottom: '10px',
            fontSize: 24,
            color: "#fff"
          }}>
            JobsSpider
          </div>
        </div>
      </div>

      <div style={{
        display: "flex",
        justifyContent: matches ? 'center' : 'flex-start',
        padding: matches ? "0 10px" : "0"
      }}>
        <div style={{
          width: matches ? "100%" : 480,
          height: "auto",
          backgroundColor: "#fff",
          border: '0.09rem #dfe6e9 solid',
          borderRadius: 10,
          marginLeft: matches ? 0 : '10%',
          padding: 15,
        }}>
          <div style={{
            fontWeight: "bolder",
            fontFamily: "Ubuntu",
            fontSize: matches ? "1.2rem" : "1.5rem",
            marginBottom: "8px"
          }}>
            Ready to take the next step?
          </div>
          <div style={{
            fontWeight: "lighter",
            fontFamily: "Ubuntu",
            fontSize: "0.9rem",
            marginBottom: "16px",
            color: "gray"
          }}>
            <b>Create an account or sign in.</b>
          </div>
          <div style={{
            fontWeight: "lighter",
            fontFamily: "Ubuntu",
            fontSize: "0.9rem",
            marginBottom: "16px",
            color: "gray"
          }}>
            By creating an account or signing in, you understand and agree to Shanshank Solutions  Terms.
            You also acknowledge our Cookie and Privacy policies...
          </div>

          {/* Google Button
          <div
  style={{
    height: 40,
    display: 'flex',
    alignItems: 'center',
    width: "100%",
    marginBottom: "12px",
    color: "black",
    fontWeight: 700,
    backgroundColor: "#ffffff",
    border: '1px solid #dcdcdc',
    borderRadius: 5,
    justifyContent: "center",
    cursor: "pointer"
  }}
  onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLSfulFAOcx4Gh4pMBN6Vx3hVXOr6i8PEW0pUye2XyknnbJcZSg/viewform?usp=header", "_blank")}
>
  <img src={google} style={{ width: 20, marginRight: 10 }} alt="Google icon" />
  <div style={{ fontSize: 17, color: "black" }}>
    Continue with Google
  </div>
</div>


         

          <Divider style={{
            margin: "16px 0",
            color: "#aaaaaa",
            fontSize: "0.9rem"
          }}><b>or</b></Divider> */}

          <div style={{
            fontWeight: "lighter",
            fontFamily: "Ubuntu",
            fontSize: "1rem",
            marginBottom: "5px",
            color: "black"
          }}>
            <b>Email address or phone number*</b>
          </div>
          <div style={{
            fontWeight: "lighter",
            fontFamily: "Ubuntu",
            fontSize: "0.9rem",
            marginBottom: "16px",
            color: "gray"
          }}>
            If using a phone number, make sure it can receive WhatsApp and SMS.
          </div>
          <div style={{ marginBottom: "20px", borderRadius: "7px" }}>
            <TextField
              placeholder="youremail@email.com or Mobileno"
              fullWidth
              required
              value={emailMobile}
              onChange={(e) => setEmailMobile(e.target.value)}
              error={!!error}
              helperText={error}
              onFocus={() => setError('')}
            />
          </div>

          <Button
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "Blue",
              color: "#ffffff",
              textTransform: "none",
            }}
            onClick={handleNext}
          >
            <b>Continue →</b>
          </Button>
        </div>
      </div>

      <PasswordOtp open={open} setOpen={setOpen} emailMobile={emailMobile} />
    </div>
  );
}




