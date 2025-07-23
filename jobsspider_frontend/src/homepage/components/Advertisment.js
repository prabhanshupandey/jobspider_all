import mobile from "../../assets/mobile2.png";
import Check from "../../assets/checks.webp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Advertisment() {
const navigate=useNavigate()
const handleButton=()=>{
navigate("/readynextpage")
}

  return (
    <div>
      <div
        style={{
          position: "relative",
          width: "105%",
          height: "500px", // or any desired height
          paddingTop:"",
          backgroundImage: `url(${mobile})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          border:"2px solid #C7DAF4" ,
          borderRadius:"8px"

        }}
      >
      
<div
style={{
   
   
     marginLeft:"15px",
    textAlign: "center",
    border:"#e5e7eb",
    width: "80%",
   
}}
>
{/* Heading */}
<h2
    style={{
        fontSize: "20px",
        fontWeight: 600,
        marginBottom: "16px",
        lineHeight: "31.5px",
        color: "#003C96",
        textAlign:"left",
      fontFamily:"Ubuntu",
        borderRadius: 5,
    }}
>
    Login with Spider and <br/>
    experience more!
</h2>

{/* Paragraphs */}
<div
    style={{
        fontSize: "14px",
       color:"#190a28",
        
     fontFamily:"Ubuntu",
       
        borderRadius: 5,
    }}
>
    <p style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
        <img src={Check} alt="check" style={{ width: 12, height: 12 }} />
        Personalised job matches
    </p>
    <p style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 4 }}>
        <img src={Check} alt="check" style={{ width: 12, height: 12 }} />
        Direct connect with HRs
    </p>
    <p style={{ display: "flex", alignItems: "center", gap: 5 }}>
        <img src={Check} alt="check" style={{ width: 12, height: 12 }} />
        Latest updates on the job
    </p>
</div>

{/* Button */}
<div style={{ marginTop: "133%"}}>
  <Button style={{ color: "#fff",  borderRadius: "2px", background: "#b03a84", fontWeight: "bolder",
            fontSize: "10px",
            fontFamily: "Ubuntu",
            width: 230,
            height: "30px",
            textTransform:"none"
        }}
        onClick={handleButton}
    > 
    
        Create profile
    </Button>

</div>
</div>  
      </div>
    </div>
  );
}





