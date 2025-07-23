import { TextField, Button, Divider, Typography, CircularProgress } from "@mui/material";
import { homeStyles } from "../userlogin/UserLoginCss";
import { postData } from "../services/FetchNodeServices";
import { useSelector } from "react-redux";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import background from '../assets/jobseeker_bg.png';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Password() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const classes = homeStyles();
  const navigate = useNavigate();
  const location = useSelector(state => state.user);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    
    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    } else if (!/[A-Z]/.test(password)) {
      newErrors.password = "Password must contain at least one uppercase letter";
    } else if (!/[a-z]/.test(password)) {
      newErrors.password = "Password must contain at least one lowercase letter";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    } else if (!/[^A-Za-z0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one special character";
    }
    
    // Confirm password validation
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validate()) return;
    
    setLoading(true);
    try {
      
      const body = {
        mobileno: location?.status === "Mobile" ? location?.emailMobile : location?.emailaddress,
        emailaddress: location?.status === "Email" ? location?.emailMobile : location?.emailaddress,
        username:location?.username,
         password,
     
      };
      console.log("dddddddddd:",body)
      
      const result = await postData("userinterface/insert_record", body);
      
      if (result.status) {
        navigate("/homepage");
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Registration error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      minHeight: '100vh',
      padding: matches ? '0' : '0'
    }}>
      <div style={{ display: "flex",justifyContent: "center" }}>
        <div style={{ 
          display: 'flex', 
          
          alignItems: 'center',
          marginTop: matches ? '0' : '0'
        }}>
          <div style={{ marginRight: 5 }}>
            <img src='/spider.png' style={{ width: 40 }} alt="JobsSpider logo" />
          </div>
          <div style={{ 
            fontWeight: 700, 
            fontSize: matches ? '20px' : '24px'
          }}>
            JobsSpider
          </div>
        </div>
      </div>
      
      <div  style={{ 
        display: "flex", 
        justifyContent: "center",
        padding: matches ? '0 16px' : '0'
      }}>
        <div className={classes.box} style={{ 
          width: matches ? '100%' : 480,
          height:"auto",
          padding: matches ? '20px' : '15px',
          backgroundColor: '#fff',
          border: '0.09rem #dfe6e9 solid',
          borderRadius: 10,
          marginBottom: matches ? '40px' : '0'
        }}>
          <div style={{ 
            fontWeight: "bolder", 
            fontFamily: "Ubuntu", 
            fontSize: matches ? "1.2rem" : "1.5rem", 
           
          }}>
            Create your account
          </div>
          <div style={{ 
            fontWeight: "lighter", 
            fontSize: matches ? "0.8rem" : "0.9rem", 
            marginBottom: "30px", 
            color: "gray",
            wordBreak: 'break-word'
          }}>
            Sign up as {location?.emailMobile} (not you?)
          </div>
          
          {/* Password Input */}
          <div style={{ 
            marginBottom: "16px", 
            fontFamily: "Ubuntu", 
            fontWeight: 'bold' 
          }}>
            <div style={{ marginBottom: 10 }}>
              Password
            </div>
            <TextField
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              label="Use at least 8 characters"
              placeholder="Enter Password"
              fullWidth
              required
              error={!!errors.password}
              helperText={errors.password}
              size={matches ? "small" : "medium"}
            />
            <Typography variant="caption" display="block" sx={{ 
              mt: 1, 
              color: 'text.secondary',
              fontSize: matches ? '0.7rem' : '0.8rem'
            }}>
              Password requirements:
              <ul style={{ 
                margin: 0, 
                paddingLeft: 20,
                fontSize: matches ? '0.7rem' : '0.8rem'
              }}>
                <li>At least 8 characters</li>
                <li>At least one uppercase letter</li>
                <li>At least one lowercase letter</li>
                <li>At least one number</li>
                <li>At least one special character</li>
              </ul>
            </Typography>
          </div>
          
          {/* Confirm Password Input */}
          <div style={{ 
            marginBottom: "16px", 
            fontFamily: "Ubuntu", 
            fontWeight: 'bold' 
          }}>
            <div style={{ marginBottom: 10 }}>
              Confirm Password
            </div>
            <TextField
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              fullWidth
              required
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword}
              size={matches ? "small" : "medium"}
            />
          </div>
          
          <div style={{ 
            fontWeight: "lighter", 
            fontFamily: 'Ubuntu', 
            fontSize: matches ? "0.7rem" : "0.9rem", 
            marginBottom: "10px", 
            color: "gray" 
          }}>
            By creating an account or signing in, you understand and agree to Indeed's Terms.
            You also acknowledge our Cookie and Privacy policies. You will receive marketing 
            messages from Indeed and may opt out at any time by following the unsubscribe link
            in our messages, or as detailed in our terms.
          </div>

          <Button
            variant="contained"
            style={{
              width: "100%",
              backgroundColor: "Blue",
              color: "#ffffff",
              textTransform: "none",
              marginTop: matches ? "20px" : "30px",
              padding: matches ? '8px' : '10px'
            }}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : <b>Create account</b>}
          </Button>
        </div>
      </div>
    </div>
  );
}