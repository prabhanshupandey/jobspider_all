
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
export  default function ProgressBar({progress=5}){


return(<div>
<div style={{  width: "95%",height: "3vh" , display: 'flex', justifyContent: 'space-between', alignItems: 'center',padding:15}} >
                <div style={{ fontSize: "18px", fontWeight: 600 }}>Basic Details</div>
                <div style={{  width: "50%", height: 12, borderRadius: 8, backgroundColor: "#e5e7eb", overflow: "hidden" }} >
                <div
           style={{
          height: '100%',
          width:` ${progress}%`,
          backgroundColor: ' #165B48',
          borderRadius: '8px',
          transition: 'width 0.3s ease-in-out',
        }}
      />
    </div>
    </div>
        </div>)
}