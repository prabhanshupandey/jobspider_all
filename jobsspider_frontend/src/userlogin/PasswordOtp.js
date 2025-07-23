// import * as React from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';
// import { postData } from '../services/FetchNodeServices';
// import { useNavigate } from 'react-router-dom';

// export default function PasswordOtp({ open, setOpen, emailMobile }) {
//   const [password, setPassword] = React.useState('')
//   const navigate = useNavigate();

//   const handleClickOpen = async () => {
//     alert(JSON.stringify(emailMobile, password))
//     //console.log("aaaaaaaaaaaaaaaa",emailMobile,password)
//     console.log({ emailMobile, password });
//     var result = await postData('userinterface/check_password', { emailMobile, password})
//     if (result.status) {
//       navigate("/homepage")
//     }
//     else {
//       alert("Invalid Password.........")
//     }
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>

//       <Dialog
//         open={open}
//         onClose={handleClose}

//       >
//         <DialogTitle>Login</DialogTitle>
//         <DialogContent>
//           <DialogContentText>
//             Sign in for {emailMobile}
//           </DialogContentText>
//           <TextField
//             autoFocus
//             required
//             margin="dense"
//             id="name"
//             name="email"
//             label=" Enter Password"
//             type="password"
//             fullWidth
//             variant="outlined"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleClose}>Cancel</Button>
//           <Button onClick={handleClickOpen}>Login</Button>
//         </DialogActions>
//       </Dialog>
//     </React.Fragment>
//   );
// }

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { postData } from "../services/FetchNodeServices";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PasswordOtp({ open, setOpen, emailMobile }) {
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleClickOpen = async () => {

    const result = await postData("userinterface/check_password", {
      
      emailMobile,
      password,
    });
    console.log("ttt:",result)
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
        },
      });
      Toast.fire({
        icon: "success",
        title: "Login Successfully",
      });
      // alert(result.token)
      //localStorage.setItem("TOKEN",result.token)
      navigate("/homepage");
    } else {
      Swal.fire({
        icon: "error",
        text: "Invalid Password",
        toast: true,
        timer: 2000,
        showConfirmButton: false,
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            borderRadius: 16,
            padding: "8px 16px",
            minWidth: 400,
            backgroundColor: "#fdfcfa",
            boxShadow: "0 8px 30px rgba(0,0,0,0.15)",
            fontFamily: "Ubuntu",
          },
        }}
      >
        <DialogTitle
          style={{
            fontWeight: "bold",
            fontSize: "24px",
            textAlign: "center",
            color: "#e17055",
            paddingBottom: 0,
          }}
        >
          JobsSpider Login
        </DialogTitle>

        <DialogContent style={{ paddingTop: 8 }}>
          <DialogContentText
            style={{
              textAlign: "center",
              fontSize: "15px",
              color: "#636e72",
              marginBottom: 10,
            }}
          >
            Sign in for <b>{emailMobile}</b>
          </DialogContentText>

          <TextField
            autoFocus
            required
            margin="dense"
            label="Enter Password"
            type="password"
            fullWidth
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
            style={{
              marginTop: 12,
              backgroundColor: "#ffffff",
            }}
          />
        </DialogContent>

        <DialogActions
          style={{
            justifyContent: "space-between",
            padding: "16px 24px 24px",
          }}
        >
          <Button
            onClick={handleClose}
            style={{
              backgroundColor: "#dfe6e9",
              color: "#2d3436",
              fontWeight: "bold",
              borderRadius: 8,
              padding: "6px 20px",
              textTransform: "none",
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleClickOpen}
            style={{
              backgroundColor: "#00b894",
              color: "#ffffff",
              fontWeight: "bold",
              borderRadius: 8,
              padding: "6px 24px",
              textTransform: "none",
            }}
          >
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}