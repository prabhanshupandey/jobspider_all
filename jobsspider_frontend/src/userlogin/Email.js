import { TextField, Button, Box, Typography } from "@mui/material";
import { homeStyles } from "../userlogin/UserLoginCss";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import background from '../assets/jobseeker_bg.png';
import { useSelector, useDispatch } from "react-redux";

export default function Email() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = homeStyles();
  const navigate = useNavigate();
  const location = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [emailAddress, setEmailAddress] = useState('');
  const[username,setUserName]=useState('');
  const [emailError, setEmailError] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = () => {
    if (!validateEmail(emailAddress)) {
      setEmailError(true);
      return;
    }
    
    const updatedUser = {
      ...location,
      emailaddress: emailAddress,
      username : username
    };
    
    dispatch({ type: "ADD_USER", payload: updatedUser });
    navigate('/emailverify');
  };

  return (
    <Box sx={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      p: matches ? 2 : 0
    }}>
      <Box sx={{
        width: matches ? '90%' : 400,
        p: matches ? 2 : 3,
        backgroundColor: "white",
        borderRadius: 1,
        height: matches?"40vh":"60vh",
        boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
        mx: matches ? 1 : 0
      }}>
        <Typography variant={matches ? "subtitle1" : "h6"} sx={{ 
          fontWeight: "bolder", 
          fontFamily: "Ubuntu", 
          mb: matches ? 2 : 3,
          fontSize: matches ? '1.1rem' : '1.2rem'
        }}>
          Add email address for <b style={{color:"grey"}}>{location?.emailMobile}</b>
        </Typography>
        
        <Typography variant="body2" sx={{ 
          fontWeight: "lighter",
          fontFamily: 'Ubuntu',
          mb: matches ? 2 : 3,
          color: "text.secondary",
          fontSize: matches ? '0.8rem' : '0.9rem'
        }}>
          Once you verify this email address, you'll use it to sign in. You will no longer receive WhatsApp messages
          related to your account. All notifications will be sent to this email address.
        </Typography>
        
        <Box sx={{ mb: matches ? 1.5 : 2 }}>


          <Typography variant="subtitle2" sx={{ 
            marginBottom: 3 , 
            fontFamily: 'Ubuntu', 
            fontWeight: 'bold',
            fontSize: matches ? '0.85rem' : '0.9rem'
             }}>
            User name
          </Typography>
          
          <TextField
            onChange={(e) => {
              setUserName(e.target.value);
             
            }}
           
            placeholder="User name"
            fullWidth
            required

          />
          <Typography variant="subtitle2" sx={{ 
            marginBottom: 3 , 
            fontFamily: 'Ubuntu', 
            fontWeight: 'bold',
            fontSize: matches ? '0.85rem' : '0.9rem'
          }}>
            Email address
          </Typography>



          <TextField
            onChange={(e) => {
              setEmailAddress(e.target.value);
              if (emailError) setEmailError(false);
            }}
            label={matches ? "Email" : "Email address"}
            placeholder="Email"
            fullWidth
            required
            error={emailError}
            helperText={emailError ? "Please enter a valid email address" : ""}
            size={matches ? "small" : "medium"}
          />
        </Box>
        
        <Button
          variant="contained"
          sx={{
            borderRadius: 1,
            fontFamily: "Ubuntu",
            width: "100%",
            marginTop:"9px",
            backgroundColor: "primary.main",
            color: "#ffffff",
            textTransform: "none",
            '&:hover': {
              backgroundColor: "primary.dark"
            },
            py: matches ? 0.8 : 1,
            fontSize: matches ? '0.9rem' : '1rem'
          }}
          onClick={handleClick}
        >
          <b>Save Email</b>
        </Button>
      </Box>
    </Box>
  );
}