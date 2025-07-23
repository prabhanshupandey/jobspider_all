import Grid from "@mui/material/Grid2";
import { Paper, Button } from "@mui/material";
import React, { useEffect, useState } from 'react';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Accordion from '@mui/material/Accordion';
import { styled } from '@mui/material/styles';
import { InputLabel, Select, MenuItem } from '@mui/material';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';





export default function FilterComponent({ exp, setExp, time, setTime, sal, setSal, jobTypeList, setJobTypeList,
  educationList,
  setEducationList,
  workModeList,
  setWorkModeList,
  workShiftList,
  setWorkShiftList,


  sortBy, setSortBy, sortOrder, setSortOrder
}) {




  const JobSpiderSlider = styled(Slider)({
    color: '#b03a84',
    height: 5,
    '& .MuiSlider-track': {
      border: '#b03a84',
    },
    '& .MuiSlider-thumb': {
      height: 15,
      width: 15,
      backgroundColor: '#b03a84',
      border: '2px solid #b03a84',
      '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
        boxShadow: 'inherit',
      },
      '&::before': {
        display: 'none',
      },
    },
    '& .MuiSlider-valueLabel': {
      lineHeight: 1.2,
      fontSize: 7,
      padding: 4,
      width:23,
      height: 10,
      borderRadius: "12px",
      backgroundColor: '#b03a84',
      transformOrigin: 'bottom left',
      transform: 'scale(0)',
      '&::before': { display: 'none' },
    },
  });

  const [value, setValue] = useState(time)
  const [salvalue, setSalValue] = useState(time)
  const [englishLevel, setEnglishLevel] = useState("");
  const [genderValue, setGenderValue] = useState("All");

  const handleClearAll = () => {
    setExp(0);
    setTime("0");
    setSal(10000);
    setValue("0");
    setEnglishLevel("")
    setSalValue(10000);
    setJobTypeList([]);
    setEducationList([]);
    setWorkModeList([]);
    setWorkShiftList([]);
    setSortBy("relevant");
    setSortOrder("relevant");

  };


  const handledateChange = (event) => {
    setValue(event.target.value);
    setTime(event.target.value)
  };

  useEffect(function () {
    setExp(exp)
  }, [exp])

  const handleEnglishChange = (event) => {
    setEnglishLevel(event.target.value);

  };



  const HandleSliderChange = (e) => {
    setExp(e.target.value)
  }

  const HandleSalarySliderChange = (e) => {
    setSal(e.target.value)
    setSalValue(e.target.value)
  }




  const handleJobTypeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setJobTypeList([...jobTypeList, value]);
    } else {
      setJobTypeList(jobTypeList.filter((item) => item !== value));
    }
  };

  const handleWorkModeChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setWorkModeList([...workModeList, value]);
    } else {
      setWorkModeList(workModeList.filter((item) => item !== value));
    }
  };



  const handleWorkShiftChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setWorkShiftList([...workShiftList, value]);
    } else {
      setWorkShiftList(workShiftList.filter((item) => item !== value));
    }
  };

  const handleEducationChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setEducationList([...educationList, value]);
    } else {
      setEducationList(educationList.filter((item) => item !== value));
    }
  };
  const handleSortChange = (e) => {
    setSortBy(e.target.value);

    // Set default order based on field
    if (e.target.value === "salary" || e.target.value === "datePosted") {
      setSortOrder("desc");
    } else {
      setSortOrder("relevant"); // for relevant, order doesn't matter
    }
  };

  return (




    <div style={{ height: 'auto', display: "flex" }}>
      <Paper elevation={3} style={{ maxheight: '260px', borderRadius: "15px" }}>
        <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>

          <div style={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>
            <FilterAltIcon />
          </div>
          <div>
            Filters
          </div>
          <div style={{ marginLeft: 'auto' }}>
            <Button
              variant="standard"
              style={{ color: '#b03a84' }}
              onClick={handleClearAll}
            >
              Clear all
            </Button>
          </div>
        </div>



        <Accordion defaultExpanded disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}

          >
            <div>
              <Typography component="span" sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Experience</Typography>

              <Typography style={{ fontSize: "14px", lineHeight: "20px", color: "#8C8594", paddingTop: 12 }}>
                Your work expirence
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>




            <div style={{ position: 'relative', width: '100%' }}>

              <JobSpiderSlider valueLabelDisplay="on" min={0} max={31}
                value={exp}
                onChange={(e) => HandleSliderChange(e)}
                valueLabelFormat={(value) => {
                  if (value === 0) return 'Fresher';
                  if (value === 31) return 'Any';
                  return value;
                }}
              />
              <div
                style={{ display: 'flex', justifyContent: 'space-between' }}  >
                <Typography style={{ fontSize: "14px", lineHeight: "20px", fontFamily: "Ubuntu", color: "#827485" }}>
                  0 years
                </Typography>
                <Typography style={{ fontSize: "14px", lineHeight: "20px", fontFamily: "Ubuntu", color: "#827485" }}>
                  31 years
                </Typography>
              </div>
            </div>


          </AccordionDetails>
        </Accordion>

        {/* 2nd */}
        <Accordion defaultExpanded disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}

          >
            <Typography component="span" sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Date posted</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <RadioGroup

                value={value}

                onChange={handledateChange}

              >


                <FormControlLabel value="0" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' }, "&.Mui-focusVisible": { boxShadow: "none" }, "&:hover": { backgroundColor: "transparent" }, transform: 'scale(1)' }} />} label="All" />
                <FormControlLabel value="1" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' }, "&.Mui-focusVisible": { boxShadow: "none" }, "&:hover": { backgroundColor: "transparent" }, transform: 'scale(1)' }} />} label="Last 24 hours" />
                <FormControlLabel value="3" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' }, "&.Mui-focusVisible": { boxShadow: "none" }, "&:hover": { backgroundColor: "transparent" }, transform: 'scale(1)' }} />} label="Last 3 days" />
                <FormControlLabel value="7" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' }, "&.Mui-focusVisible": { boxShadow: "none" }, "&:hover": { backgroundColor: "transparent" }, transform: 'scale(1)' }} />} label="Last 7 days" />

              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        {/* 3rd */}
        <Accordion defaultExpanded disableGutters>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}

          >
            <Typography component="span" sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px", marginBottom: "5px" }}>Salary</Typography>

          </AccordionSummary>

          <Typography style={{ fontSize: "14px", lineHeight: "20px", color: "#8C8594", paddingLeft: 12, paddingBottom: 12 }}>
            Minimum monthly Salary
          </Typography>

          <AccordionDetails>
            <div style={{ position: 'relative', width: '100%' }}>
              <JobSpiderSlider valueLabelDisplay="on" step={10000} min={10000} max={160000}
                value={salvalue}
                onChange={(e) => HandleSalarySliderChange(e)}
                valueLabelFormat={(value) => {

                  if (value >= 160000) { return 0 }
                  return value
                }}





              />
              <div style={{ display: 'flex', justifyContent: 'space-between', }} >
                <Typography style={{ fontSize: "14px", lineHeight: "20px", fontFamily: "Ubuntu", color: "#827485" }}>
                  0
                </Typography>
                <Typography style={{ fontSize: "14px", lineHeight: "20px", fontFamily: "Ubuntu", color: "#827485" }} >
                  1.5 lakhs
                </Typography>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>



        <Accordion defaultExpanded disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Education Qualification</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              {['10th', '12th', 'Graduation', 'Post Graduation'].map((label) => (
                <FormControlLabel
                  key={label}
                  control={
                    <Checkbox
                      value={label}
                      checked={educationList.includes(label)}
                      onChange={handleEducationChange}
                      sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }}
                    />
                  }
                  label={label}
                />
              ))}
            </FormGroup>
          </AccordionDetails>
        </Accordion>


        {/* 5th */}

        <Accordion defaultExpanded disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }} >Job Type</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="Part time Jobs" onChange={handleJobTypeChange} checked={jobTypeList.includes("Part time Jobs")}
                  sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                label="Part time"
              />
              <FormControlLabel
                control={<Checkbox value="Fulltime" onChange={handleJobTypeChange} checked={jobTypeList.includes("Fulltime")} sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                label="Full time"
              />
              <FormControlLabel
                control={<Checkbox value="Intern" onChange={handleJobTypeChange} checked={jobTypeList.includes("Intern")} sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                label="Internship"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>

        {/* Work Mode */}
        <Accordion defaultExpanded disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Work Mode</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox value="Remote" onChange={handleWorkModeChange} checked={workModeList.includes("Remote")} sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                label="Remote"
              />
              <FormControlLabel
                control={<Checkbox value="Work for home" onChange={handleWorkModeChange} checked={workModeList.includes("Work for home")}
                  sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                label="Work from home"
              />
              <FormControlLabel
                control={<Checkbox value="Hybrid" onChange={handleWorkModeChange} checked={workModeList.includes("Hybrid")} sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                label="Hybrid"
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>



        <Accordion defaultExpanded disableGutters sx={{ boxShadow: "none", borderBottom: "1px solid #ccc" }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="workshift-content"
            id="workshift-header"
          >
            <Typography sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Work Shift</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleWorkShiftChange}
                    value="9AM-6PM"
                    checked={workShiftList.includes("9AM-6PM")}
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#b03a84" },
                    }}
                  />
                }
                label="Day Shift"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={handleWorkShiftChange}
                    value="2PM-10PM"
                    checked={workShiftList.includes("2PM-10PM")}
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#b03a84" },
                    }}
                  />
                }
                label="Night Shift "
              />
            </FormGroup>
          </AccordionDetails>
        </Accordion>


        {/* 9th */}

        <Accordion defaultExpanded disableGutters>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <div>
              <Typography component="span" sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>English level</Typography>
              <Typography style={{ fontSize: "14px", lineHeight: "20px", color: "#8C8594" }}>
                Select your English level to see all eligible jobs
              </Typography>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <RadioGroup
                value={englishLevel}  // Connect to state
                onChange={handleEnglishChange}  // Connect to handler
              >
                <FormControlLabel
                  value="1"
                  control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                  label="No English"
                />
                <FormControlLabel
                  value="2"
                  control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                  label="Basic English"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                  label="Intermediate English"
                />
                <FormControlLabel
                  value="4"
                  control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />}
                  label="Advanced English"
                />
              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>

        {/* 10 */}
        <Accordion defaultExpanded disableGutters >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
          >

            <Typography component="span" sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Gender</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl>
              <RadioGroup >
                <FormControlLabel value="All" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />} label="Female" />
                <FormControlLabel value="24 hours" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />} label="Male" />

              </RadioGroup>
            </FormControl>
          </AccordionDetails>
        </Accordion>




        <Accordion>
          <AccordionSummary defaultExpanded disableGutters expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600, fontSize: "14px", lineHeight: "20px" }}>Sort By</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <RadioGroup value={sortBy} onChange={handleSortChange}>
              <FormControlLabel value="relevant" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />} label="Relevance" />
              <FormControlLabel value="datePosted" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />} label="Date Posted" />
              <FormControlLabel value="salary" control={<Radio sx={{ color: 'grey', '&.Mui-checked': { color: '#b03a84' } }} />} label="Salary" />
            </RadioGroup>
          </AccordionDetails>
        </Accordion>
      </Paper>

    </div>






  );
}
