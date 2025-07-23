
import Image from "./Image";
import ApplyDetails from "./ApplyDetails"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function ApplyForms({ data }) {
   const theme = useTheme();
   const matches = useMediaQuery(theme.breakpoints.down('sm'));
   const location = useLocation();
 

   console.log("bbbbbbb", location.state.data)

   return (<div style={{ width: "100%", height: "auto", overflow: 'hidden', display: 'flex', justifyContent: "center", background: " #f1f2f6" }}>

      <div style={{ width: matches ? "100%" : "80%", display: 'flex', padding: 20, justifyContent: 'center' }}>

         {matches ? <></> : <div style={{ width: "32%", display: 'flex', padding: 20, justifyContent: 'center' }}>
            <Image job={location.state.data} />
         </div>}

         <div style={{ width: matches ? "100%" : "60%", display: 'flex', padding: 20, justifyContent: 'center', alignItems: matches ? 'center' : '' }}>
            {/* <BasicDetails/>  */}
            <ApplyDetails job={location.state.data} />
         </div>

      </div>
   </div>)

}