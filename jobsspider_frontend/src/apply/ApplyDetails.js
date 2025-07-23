import React, { useState } from "react";
import { Paper, Button, TextField, Stack, Typography, Checkbox, } from "@mui/material";
import Swal from "sweetalert2";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { postData } from "../services/FetchNodeServices";
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function ApplyDetails({ job }) {


    console.log("aaaa", job)
    const [name, setName] = useState("");
    const [selectedGender, setSelectedGender] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [dob, setDob] = useState(null);
    const [resume, setResume] = useState(null);
    const [errors, setErrors] = useState({});
    const [jobid, setJobId] = useState(job.jobid)



    const validateForm = () => {
        const newErrors = {};
        if (!name.trim()) newErrors.name = "Name is required";
        if (!dob) newErrors.dob = "Date of Birth is required";
        if (!selectedGender) newErrors.gender = "Please select a gender";
        if (!mobile.trim()) newErrors.mobile = "Mobile number is required";
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = "Enter a valid email";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleResumeUpload = (e) => {
        setResume(e.target.files[0]);
    };

    const handleSubmit = async () => {
        if (validateForm()) {
            const formData = new FormData();
            formData.append("fullname", name);
            formData.append("dob", dob?.format("YYYY-MM-DD"));
            formData.append("gender", selectedGender);
            formData.append("email", email);
            formData.append("mobileno", mobile);
            formData.append("jobid", jobid);
            if (resume) {
                formData.append("icon", resume);
            } else {
                Swal.fire({
                    icon: "error",
                    text: "Resume file is required.",
                    toast: true,
                });
                return;
            }
            try {
                const response = await postData('applydetails/submit_applydetails', formData
                );
                if (response && response.status) {
                    Swal.fire({
                        icon: "success",
                        text: response.message,
                        toast: true,
                    });
                } else {
                    Swal.fire({
                        icon: "error",
                        text: response
                            ? response.message
                            : "Server Error: No response received",
                        toast: true,
                    });
                }
            } catch (err) {
                console.error("Submit Error:", err);
                Swal.fire({
                    icon: "error",
                    text: "Something went wrong. Please try again later.",
                    toast: true,
                });
            }
        }
    };
    return (
        <Paper style={{ width: "100%", borderRadius: 15, marginTop: 50 }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 20,
                }}
            >
                <div style={{ width: "95%" }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Name
                    </Typography>
                    <TextField
                        fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{ mb: 2, "& .MuiInputBase-root": { height: 40 } }}
                    />
                </div>
                <div style={{ width: "95%" }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Date of Birth (DOB)
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={dob}
                            onChange={(newValue) => setDob(newValue)}
                            sx={{ width: "100%" }}
                            slotProps={{
                                textField: {
                                    fullWidth: true,
                                    sx: {
                                        "& .MuiInputBase-root": { height: 40, fontSize: "14px" },
                                        "& input": { padding: "8px 12px" },
                                    },
                                },
                            }}
                        />
                    </LocalizationProvider>
                    {errors.dob && (
                        <Typography color="error" variant="caption">
                            {errors.dob}
                        </Typography>
                    )}
                </div>

                <div style={{ width: "95%" }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Gender
                    </Typography>
                    <Stack direction="row" spacing={2}>
                        <Button
                            variant={selectedGender === "Male" ? "contained" : "outlined"}
                            onClick={() => setSelectedGender("Male")}
                            style={{
                                borderRadius: 20,
                                textTransform: "none",
                                border: "1px solid #b03a84",
                                backgroundColor: selectedGender === "Male" ? "#b03a84" : "transparent",
                                color: selectedGender === "Male" ? "#fff" : "#b03a84",
                            }}
                        >
                            Male
                        </Button>
                        <Button
                            variant={selectedGender === "Female" ? "contained" : "outlined"}
                            onClick={() => setSelectedGender("Female")}
                            style={{
                                borderRadius: 20,
                                textTransform: "none",
                                border: "1px solid #b03a84",
                                backgroundColor: selectedGender === "Female" ? "#b03a84" : "transparent",
                                color: selectedGender === "Female" ? "#fff" : "#b03a84",
                            }}>
                            Female
                        </Button>
                    </Stack>
                    {errors.gender && (
                        <Typography color="error" variant="caption">
                            {errors.gender}
                        </Typography>
                    )}
                </div>
                <div style={{ width: "95%", paddingTop: 20 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Mobile Number
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your mobile number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        error={!!errors.mobile}
                        helperText={errors.mobile}
                        InputProps={{ sx: { height: 40 } }} />
                </div>

                <div style={{ width: "95%", paddingTop: 20 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Email ID (Optional)
                    </Typography>
                    <TextField
                        fullWidth
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        error={!!errors.email}
                        helperText={errors.email}
                        InputProps={{ sx: { height: 40 } }}
                    />
                </div>

                <div style={{ width: "95%", paddingBottom: 20, marginTop: 10 }}>
                    <Typography variant="subtitle1" fontWeight="bold">
                        Upload Resume
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        component="label"
                        sx={{ height: 40, textTransform: "none", fontSize: 16, fontWeight: 'bold', background: "#b03a84", }}
                    >
                        Choose File
                        <input
                            type="file"
                            hidden
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeUpload}
                        />
                    </Button>
                </div>


                <div style={{ width: "95%", padding: "10px", }}>
                    <Checkbox style={{ color: "#b03a84" }} /> Send me important job updates on WhatsApp
                </div>

                <div style={{ width: "95%" }}>
                    <Button
                        variant="contained"
                        fullWidth
                        onClick={handleSubmit}
                        sx={{ height: 40, textTransform: "none", fontSize: 16, fontWeight: 'bold', background: "#b03a84", }}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </Paper>
    );
}
