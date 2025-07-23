import * as React from 'react';
import background from '../assets/jobseeker_bg.png';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { homeStyles } from "../userlogin/UserLoginCss";
import Grid from '@mui/material/Grid2';
import mobile from '../assets/mobile_verification.png';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Mobile() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [mobileno, setMobileNo] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const classes = homeStyles();
    const dispatch = useDispatch();
    var location = useSelector(state => state.user);

    const handleClick = () => {
        // Validate mobile number before proceeding
        if (!mobileno.trim()) {
            setError("Please enter your phone number");
            return;
        }

        if (!/^\d{10}$/.test(mobileno)) {
            setError("Please enter a valid 10-digit phone number");
            return;
        }

        var temp = location;
        temp['emailaddress'] = mobileno;
        dispatch({ type: 'ADD_USER', payload: temp });
        navigate("/mobileotp");
    }

    const handleChange = (e) => {
        const value = e.target.value;
        // Only allow numbers and limit to 10 digits
        if (/^\d{0,10}$/.test(value)) {
            setMobileNo(value);
            // Clear error when user starts typing
            if (error) setError('');
        }
    }

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: matches ? '0 16px' : '0' // Add padding on mobile
        }}>
            <div style={{ 
                display: "flex", 
                justifyContent: "center",
                paddingTop: matches ? '20px' : '0' // Adjust top padding on mobile
            }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{ marginRight: 5}}>
                        <img src='/spider.png' style={{ width: 40 }} alt="JobsSpider Logo" />
                    </div>
                    <div style={{ 
                        fontWeight: 700, 
                        fontSize: matches ? 20 : 24, // Smaller font on mobile
                       
                    }}>
                        JobsSpider
                    </div>
                </div>
            </div>

            <div style={{ 
                display: "flex", 
                justifyContent: "center",
                padding: matches ? '16px 0' : '0' // Add padding on mobile
            }}>
                <div className={classes.box} style={{ 
                    height: matches ? 'auto' : 610, // Auto height on mobile
                    marginTop: matches ? 0 : 10,
                    backgroundColor: '#fff', 
                    border: '0.09rem #dfe6e9 solid', 
                    borderRadius: 10,
                    width: matches ? '100%' : 'auto', // Full width on mobile
                    padding: matches ? '20px' : '10px', // Add padding on mobile
                    maxWidth: 500 // Limit max width
                }}>
                    <div
                        style={{
                            borderRadius: 10,
                            backgroundImage: `url(${mobile})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            width: "100%",
                            height: matches ? "170px" : "200px", // Smaller height on mobile
                        }}
                    ></div>

                    <div style={{ 
                        fontWeight: "bolder", 
                        fontFamily: "Ubuntu", 
                        fontSize: matches ? "14px" : "16px", // Smaller font on mobile
                        marginBottom: "15px", 
                        marginTop: "20px" 
                    }}>
                        Verify your phone number
                    </div>
                    <div style={{ 
                        fontWeight: "lighter", 
                        fontSize: matches ? "14px" : "16px", // Smaller font on mobile
                        marginBottom: "16px", 
                        color: "gray" 
                    }}>
                        To enhance your experience, we need to verify that the
                        phone number associated with your account
                        belongs to you. A code will be sent to this number for verification
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                        <div style={{ 
                            display: "flex", 
                            alignItems: "center", 
                            border: error ? "1px solid red" : "1px solid #ccc", 
                            borderRadius: "4px", 
                            padding: "5px" 
                        }}>
                            <div style={{ display: "flex", alignItems: "center", marginRight: "10px" }}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                                    alt="India Flag"
                                    style={{ width: "24px", height: "16px", marginRight: "5px" }}
                                />
                                <span style={{ fontWeight: "bold" }}>+91</span>
                            </div>
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                value={mobileno}
                                onChange={handleChange}
                                style={{
                                    flex: 1,
                                    border: "none",
                                    outline: "none",
                                    fontSize: matches ? "14px" : "16px", // Smaller font on mobile
                                }}
                                maxLength="10"
                            />
                        </div>
                        {error && (
                            <div style={{ 
                                color: "red", 
                                fontSize: "14px", 
                                marginTop: "4px" 
                            }}>
                                {error}
                            </div>
                        )}
                    </div>

                    <div style={{ 
                        fontWeight: "lighter", 
                        fontSize: matches ? "14px" : "16px", // Smaller font on mobile
                        marginBottom: "16px", 
                        color: "gray" 
                    }}>
                        <p>
                            By adding my phone number, I consent to receive calls including artificial or prerecorded calls
                            from indeed on the phone number provided l also agree to receive
                            texts for phone number verification purposes and as specified in my Communications settings.
                        </p>
                        <p>
                            If you want to change your contact number, visit your Profile. Changes to your phone
                            number on this page will not be reflected in your profile
                        </p>
                    </div>

                    <Grid size={12}>
                        <Button 
                            style={{ 
                                marginBottom: '7px', 
                                borderRadius: 5,
                                fontSize: matches ? '14px' : '16px' // Smaller font on mobile
                            }} 
                            fullWidth 
                            variant="contained" 
                            onClick={handleClick}
                            disabled={!mobileno || error}
                        >
                            Verify
                        </Button>
                    </Grid>
                    <Grid size={12}>
                        <Button 
                            fullWidth 
                            variant="text"
                            style={{ fontSize: matches ? '14px' : '16px' }} // Smaller font on mobile
                        >
                            Not now
                        </Button>
                    </Grid>
                </div>
            </div>
        </div>
    );
}