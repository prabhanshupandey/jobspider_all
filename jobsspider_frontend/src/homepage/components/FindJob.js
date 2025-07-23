import React from 'react';
import Grid from '@mui/material/Grid';
import {
  Typography,
  List,
  ListItem,
  Divider
} from '@mui/material';




// Job Data
const jobData = {
    jobs: [
      
        {title: 'Web Developer'},  
        {title: 'Full Stack Developer'},  
        {title: 'Frontend Developer'},  
        {title: 'Backend Developer'},  
        {title: 'Software Engineer'},  
        {title: 'Mobile App Developer'},  
        {title: 'UI/UX Designer'},  
        {title: 'Database Administrator'},  
        {title: 'Cloud Engineer'},  
        {title: 'DevOps Engineer'},  
        {title: 'Project Manager'},  
        {title: 'Technical Lead'},  
        {title: 'Product Manager'},  
        {title: 'IT Manager'},  
        {title: 'Operations Manager'},  
        {title: 'Graphic Designer'},  
        {title: 'Content Creator'},  
        {title: 'Video Editor'},  
        {title: 'Motion Graphics Designer'},  
        {title: 'UI/UX Researcher'} , 
        {title: 'Cybersecurity Analyst'},  
        {title: 'Network Engineer'},  
        {title: 'System Administrator'},  
        {title: 'IT Consultant'},  
        {title: 'Cloud Solutions Architect'},  
        {title: 'Penetration Tester'},  
        {title: 'Blockchain Developer'},  
        {title: 'Robotics Engineer'},  
        {title: 'Game Developer'},  
        {title: 'Embedded Systems Engineer'},  
        {title: 'Augmented Reality Developer'},  
        {title: 'Virtual Reality Developer'},  
        {title: 'Technical Support Engineer'},  
        {title: 'Business Analyst'},  
        {title: 'IT Auditor'},  
        {title: 'Data Engineer'},  
        {title: 'IoT Developer'},  
        {title: 'AI/ML Researcher'},  
        {title: 'Software Development Manager'},  
        {title: 'IT Operations Specialist'},  
        {title: 'ERP Consultant'},  
        {title: 'Solutions Architect'},  
        {title: 'Cybersecurity Engineer'},  
        {title: 'Technical Account Manager'},  
        {title: 'IT Project Coordinator'},  
        {title: 'Site Reliability Engineer'},  
        {title: 'Systems Analyst'},  
        {title: 'Cloud Security Engineer'},  
        {title: 'Mobile Security Specialist'},  
        {title: 'IT Trainer'},  
        {title: 'Software Deployment Engineer'},  
        {title: 'CRM Developer'},  
        {title: 'DevSecOps Engineer'},  
        {title: 'Automation Engineer'},  
        {title: 'Big Data Engineer'},  
        {title: 'IT Infrastructure Specialist'},  
        {title: 'Firmware Developer'},  
        {title: 'Security Consultant'},  
        {title: 'Technical Program Manager'},  
         
        
    ],
  }
  
// Split the jobs array into 3 columns
const splitIntoColumns = (jobs, numColumns) => {
    const columns = Array.from({ length: numColumns }, () => []);
    jobs.forEach((job, index) => {
      columns[index % numColumns].push(job);
    });
    return columns;
  };


  const FindJob = () => {
    const numColumns = 3; // Number of columns
    const jobColumns = splitIntoColumns(jobData.jobs, numColumns);
  
    return (
      <div style={{ marginLeft: 50, marginRight: 50 }}>
        
        <Grid container spacing={2}>
          {jobColumns.map((column, colIndex) => (
            <Grid item xs={12} sm={4} key={colIndex}>
              <List>
                {column.map((job, index) => (
                  <ListItem key={index} style={{ padding: '2px 0' }}>
                    {job.title}
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  };
  
 
  export default FindJob;



