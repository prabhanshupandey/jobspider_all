import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';





export default function FAQ(){
    const theme = useTheme();
        const matches = useMediaQuery(theme.breakpoints.down('sm'));
    return(
     <div style={{ width: matches?"":"800px",height:"auto"}}>
        <div>
        {/*parent */}
         <Accordion disableGutters  sx={{  padding:"10px",borderRadius:"40px",boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" },"&.MuiPaper-root": { borderRadius: "10px" }}}> 
        <AccordionSummary 
 
        expandIcon={<ExpandMoreIcon /> }
        
          aria-controls="panel2-content"
          id="panel2-header"
        >

          <Typography
  component="span"
  style={{
    fontSize: matches?"16px":"20px",
    fontWeight: 700,
    display: "flex",
    alignItems: matches ? "center" : "flex-start",
    justifyContent: matches ? "center" : "flex-start",

    textAlign: matches ? "center" : "start"
  }}
>
  FAQs about this job
</Typography>

        </AccordionSummary>



        <AccordionDetails>
          {/*child1 */}
        <Accordion disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
        expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography  component="span" style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>
            How much salary can I expect as a Mern Stack Developer in
             Agumentik Consultancy Private Limited in Bengaluru?
             </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. You can expect a minimum salary of 12,000 INR and can go up<br/>
           to 37,000 INR. The salary offered will depend on your skills,<br/> 
           experience and performance in the interview.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>
         
{/* chlid2 */}
<Accordion  disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>
            What is the eligibility criteria to apply for Mern Stack Developer in
             Agumentik Consultancy Private Limited in Bengaluru?
             </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. The candidate should have completed Diploma degree and<br/>
          people who have 1 to 31 years are eligible to apply for this job. You <br/>
          can apply for more jobs in Bengaluru to get hired quickly.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>


      {/* chlid3*/}
    <Accordion  disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>Is there any specific skill required for this job?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. The candidate should have Good (Intermediate / Advanced)<br/>
           English skills and sound communication skills for this job.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>
         
        {/* chlid4*/}
        <Accordion   disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>Who can apply for this job?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. Both Male and Female candidates can apply for this job.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>

       {/* chlid5*/}
       <Accordion disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>Is it a work from home job?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. Yes, it’s a work from home job and can be done online. <br/>
          You can explore and apply for other work from home jobs in Bengaluru <br/>
          at apna.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>

        {/* chlid6*/}
        <Accordion   disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>Are there any charges or deposits required while applying for the role or while joining?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. No work-related deposit needs to be made during your<br/>
           employment with the company.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>

        {/* chlid7*/}
        <Accordion  disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>How can I apply for this job?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. Go to the apna app and apply for this job. Click on the apply <br/>
          button and call HR directly to schedule your interview.
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>
     
      {/* chlid8*/}
      <Accordion  disableGutters   sx={{boxShadow: "none",marginTop:"10px",height:"auto",border: "none","&::before": { display: "none" }}}>
        <AccordionSummary
         
         expandIcon={<AddIcon style={{color:"green" ,borderRadius:"90px",background:"#E8F4F4"}} />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span"style={{fontWeight:600,fontSize:"16px",lineHeight:"24px"}}>What is the last date to apply?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{fontSize:"14",color:"#8C8594",fontWeight:400}}>
          Ans. The last date to apply for this job is 06-Mar-2025. For more<br/>
           details, download apna app and find jobs in Bengaluru.<br/> 
           Through apna, you can find jobs in 74 cities across India. Join NOW!
          </Typography>
          
        </AccordionDetails>
        
      </Accordion>



























        </AccordionDetails>
      </Accordion>
 
      </div>
      </div>
   )
}