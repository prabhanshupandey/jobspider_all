 import { Button } from "@mui/material"
 import left from "../../assets/img-left.webp";
 import right from"../../assets/img-right.webp";
import spider from"../../assets/spiderapp.png";
import leaf from "../../assets/overleaf-green.svg"
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
 export default function GetResumeHelp(){
      const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('sm')); 
    return(<div>
 
         {matches?<></> :<div style={{ backgroundColor: '#f3f4ff', width: '100%', height: 350, marginTop: 25, display: 'flex', justifyContent: 'center' }}>
        <div>
          <img src={left} style={{ height: 330, marginTop: 18 }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,marginLeft:"15%",marginTop:"7%"}}>
          <div style={{ fontSize: 30, fontWeight: 'bolder', display: 'flex', justifyContent:"center" }}>
            Already have a resume? Get help <br/>
            making it stand out to employers
          </div>

          <div style={{ fontSize: 16, marginTop: 5 ,placeSelf:"center"}}>
            Match with a career coach who knows your industry for an expert<br/>
                <div style={{placeSelf:"center"}}>resume review</div>
          </div>
         <a href="https://www.overleaf.com/login?id=49581886&latexEngine=pdflatex&mainFile=resume_faangpath.tex&templateName=FAANGPath%20Simple%20Template&texImage=texlive-full%3A2024.1"> <Button variant="contained" style={{ fontSize: 18, backgroundColor: "#9c0f68", borderRadius: 25, color: "#ffffff", textTransform: "none", marginTop: 25 }}>
            <b>Get Resume Help</b>
          </Button></a>
          <div style={{ fontSize: 18, marginTop: 15}}>
          <div style={{marginTop:"0px",display:"flex" ,alignItems:"center"}}>
            A service of 
           <div style={{marginLeft:"5px"}}>
            <img src={leaf} style={{ width:"40px",height:"40px",objectFit:"contain",display:"flex",alignItems:"center"}} />
            </div>
            </div>
          </div>
        </div>

        <div style={{marginLeft:"auto" }}>
          <img src={right} style={{ height: 350 }} />
        </div>
      </div> }

        </div>)
 }