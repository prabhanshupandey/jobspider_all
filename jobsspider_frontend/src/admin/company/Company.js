import { comStyles } from "./CompanyCss";
import { Button, Divider, TextField, FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import TitleComponent from "../components/TitleComponent";
import Grid from '@mui/material/Grid2';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ReactQuill from "react-quill";
import {Paper} from "@mui/material";
import 'react-quill/dist/quill.snow.css';
import { useState, useEffect } from "react";
import { postData, getData } from "../../services/FetchNodeServices";
import Swal from "sweetalert2";
export default function Companies() {
    const classes = comStyles();
    const [formError, setFormError] = useState({ filename: '' })
    const [companyName, setCompanyName] = useState('')
    const [companyOwner, setCompanyOwner] = useState('')
    const [companyAddress, setCompanyAddress] = useState('')
    const [stateId, setStateId] = useState('')
    const [cityId, setCityId] = useState('')
    const [emailId, setEmailId] = useState('')
    const [mobileNo, setMobileNo] = useState('')
    const [contactPerson, setContactPerson] = useState('')
    const [aboutCompany, setAboutCompany] = useState('')
    const [registrationnumber, setRegistrationNumber] = useState('')
    const [panCard, setPanCard] = useState('')
    const [logo, setLogo] = useState({ byte: '', filename: 'case.png' })
    const [stateList, setStateList] = useState([])
    const [cityList, setCityList] = useState([])

    const handleError = (label, message) => {
        setFormError((prev) => ({ ...prev, [label]: message }))
    }
    const clearData = () => {
        setCompanyName("")
        setCompanyOwner("")
        setCompanyAddress("")
        setStateId("")
        setCityId("")
        setEmailId("")
        setMobileNo("")
        setContactPerson("")
        setAboutCompany("")
        setRegistrationNumber("")
        setPanCard("")

        setLogo({ byte: '', filename: 'case.png' })
    }
    const validateData = () => {
        var error = false
        if (companyName.length == 0) {
            handleError('companyname', "should not be blank")
            error = true
        }
        if (companyOwner.length == 0) {
            handleError('companyowner', " should not be blank")
            error = true
        }
        if (companyAddress.length == 0) {
            handleError('companyaddress', " should not be blank")
            error = true
        }
        
        if (emailId.length == 0) {
            handleError('emailid', " should not be blank")
            error = true
        }
        if (mobileNo.length == 0) {
            handleError('mobileno', " should not be blank")
            error = true
        }
        if (contactPerson.length == 0) {
            handleError('contactperson', " should not be blank")
            error = true
        }
       
        if (registrationnumber.length == 0) {
            handleError('registrationnumber', " should not be blank")
            error = true
        }
        if (panCard.length == 0) {
            handleError('pancard', " should not be blank")
            error = true
        }
        if (logo.byte.length == 0) {
            handleError('filename', "please choose icon for category...")
            error = true
        }
        return error
    }

    const handleClick = async () => {
        var error = validateData()
        if (error == false) {
            var formData = new FormData()
            formData.append('companyname', companyName)
            formData.append('companyowner', companyOwner)
            formData.append('companyaddress', companyAddress)
            formData.append('stateid', stateId)
            formData.append('cityid', cityId)
            formData.append('emailid', emailId)
            formData.append('mobileno', mobileNo)
            formData.append('contactperson', contactPerson)
            formData.append('aboutcompany', aboutCompany)
            formData.append('registrationnumber', registrationnumber)
            formData.append('pancard', panCard)
            formData.append('password', 'hhhhh')
            formData.append('verified', 'false')
            formData.append('logo', logo.byte)
            var response = await postData('company/submit_company', formData)
            if (response.status) {
                Swal.fire({
                    icon: "success",
                    text: response.message,
                    toast: true
                });

            }
            else {
                Swal.fire({
                    icon: "error",
                    text: response.message,
                    toast: true
                });
            }
        }

    }
    const handleIconChange = (e) => {
        setLogo({ byte: e.target.files[0], filename: URL.createObjectURL(e.target.files[0]) })
        handleError("filename", "")
    }
    const fetchAllState = async () => {
        var response = await getData("states/fetch_all_states");
        setStateList(response.data);
    }
    useEffect(() => {
        fetchAllState();
    }, []);
    const fillstateMenu = () => {
        return stateList.map((item) => {
            return <MenuItem value={item.stateid}>{item.statename}</MenuItem>
        })
    }
    const fetchAllCity = async (stateid) => {
        const response = await postData("states/fetch_all_citys", { stateid });
        setCityList(response.data);
    }
    const handlestatechange = (e) => {
        setStateId(e.target.value)
        fetchAllCity(e.target.value)
    }
    const fillCityMenu = () => {
        return cityList.map((item) => {
            return <MenuItem value={item.cityid}>
                {item.cityname}</MenuItem>
        })
    }

    return (
        <Paper elevation={2}  style={{width:"70vw",height:"90vh",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>
            
            <div style={{width:"60vw"}}>
                <Grid container spacing={1.5} >
                    <Grid size={12} >
                        <TitleComponent title= "company registration"/>
                    </Grid>
                    <Grid size={12} style={{ display: 'flex', justifyContent: 'center', marginTop: 3 }} >
                        <Divider style={{ width: '98%' }} />
                    </Grid>
                    <Grid size={6} >
                        <TextField value={companyName} helperText={formError.companyname} error={formError.companyname} onFocus={() => handleError('companyname', '')} onChange={(e) => setCompanyName(e.target.value)} label="company Name" fullWidth />
                    </Grid>
                    <Grid size={6} >
                        <TextField value={companyOwner} helperText={formError.companyowner} error={formError.companyowner} onFocus={() => handleError('companyowner', '')} onChange={(e) => setCompanyOwner(e.target.value)} label="company owner" fullWidth />
                    </Grid>
                    <Grid size={12} >
                        <TextField value={companyAddress} helperText={formError.companyaddress} error={formError.companyaddress} onFocus={() => handleError('companyaddress', '')} onChange={(e) => setCompanyAddress(e.target.value)} label="Company Address" fullWidth />
                    </Grid>
                    <Grid size={6} >
                        <FormControl fullWidth>
                            <InputLabel>States</InputLabel>
                            <Select label="States" value={stateId} onChange={handlestatechange}>
                                {fillstateMenu()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={6} >
                        <FormControl fullWidth>
                            <InputLabel>city</InputLabel>
                            <Select label="city" value={cityId} onChange={(e) => setCityId(e.target.value)}>
                                {fillCityMenu()}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={4} >
                        <TextField value={emailId} helperText={formError.emailid} error={formError.emailid} onFocus={() => handleError('emailid', '')} onChange={(e) => setEmailId(e.target.value)} label="Email ID" fullWidth />
                    </Grid>
                    <Grid size={4} >
                        <TextField value={mobileNo} helperText={formError.mobileno} error={formError.mobileno} onFocus={() => handleError('mobileno', '')} onChange={(e) => setMobileNo(e.target.value)} label="Mobile No" fullWidth />
                    </Grid>
                    <Grid size={4} >
                        <TextField value={contactPerson} helperText={formError.contactperson} error={formError.contactperson} onFocus={() => handleError('contactperson', '')} onChange={(e) => setContactPerson(e.target.value)} label="Contact Person" fullWidth />
                    </Grid>
                    <Grid size={12} >
                        <ReactQuill theme="snow" value={aboutCompany} onChange={(e) => setAboutCompany(e)}
                            placeholder="About Company"
                            modules={{
                                toolbar: {
                                    container: [
                                        [{ header: '1' }, { header: '2' }, { font: [] }],
                                        [{ size: [] }],
                                        ["bold", "italic", "strike", "underline", "blockquote"],
                                        [
                                            { list: 'ordered' },
                                            { list: 'bullet' },
                                            { indent: '-1' },
                                            { indennt: '+1' },
                                        ],
                                        ["link", "image", "video"],
                                        ["code-block"],
                                        ["clean"],
                                    ],
                                },
                                clipboard: {
                                    matchVisual: false,
                                },
                            }}
                            formats={
                                [
                                    "header",
                                    "font",
                                    "size",
                                    "bold",
                                    "italic",
                                    "underline",
                                    "strike",
                                    "blockquote",
                                    "list",
                                    "bullet",
                                    "indent",
                                    "link",
                                    "image",
                                    "video",
                                    "code-block",
                                ]
                            } />
                    </Grid>
                    <Grid size={6} >
                        <TextField value={registrationnumber} helperText={formError.registrationnumber} error={formError.registrationnumber} onFocus={() => handleError('registrationnumber', '')} onChange={(e) => setRegistrationNumber(e.target.value)} label="Registration No" fullWidth />
                    </Grid>
                    <Grid size={6} >
                        <TextField value={panCard} helperText={formError.pancard} error={formError.pancard} onFocus={() => handleError('pancard', '')} onChange={(e) => setPanCard(e.target.value)} label="Pancard" fullWidth />
                    </Grid>
                    <Grid size={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <img src={logo.filename} style={{ width: '15%' }} />
                        
                    </Grid>
                    <Grid size={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Button fullWidth startIcon={<CloudUploadIcon />} component="label" variant="contained" >
                            Upload Company Logo
                            <input onChange={handleIconChange} type="file" multiple hidden accept="image/*" />
                        </Button>
                    </Grid>
                    <Grid size={6} >
                        <Button fullWidth variant="contained" onClick={handleClick}>Save</Button>
                    </Grid>
                    <Grid size={6} >
                        <Button fullWidth variant="contained" onClick={clearData} >Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </Paper>
    )

}