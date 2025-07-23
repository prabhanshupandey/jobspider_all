import { InputAdornment, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShrinkSearchComponent from "./ShrinkSearchComponent";
export default function SingleShrinkSearchComponent() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const navigate = useNavigate();
    const[open,SetOpen]=useState(false)

    const handleClick=()=>{
        SetOpen(true);
        <ShrinkSearchComponent/>
        navigate('/shrinkSearchComponent')

    }
     
    return (<div>
        <Grid container spacing={2}>
             
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Grid size={12}>
                <TextField
                    onClick={()=> handleClick(open)}
                    placeholder= "Search by City, title, experience"
                    variant="standard"
                    style={{ backgroundColor: "#F4F2F6", width: "170%", height: "25px", justifyContent:"center",fontSize: "15px", padding: "10px", borderRadius: "7px",marginLeft:"10px",border:"0.5px solid grey" }}
                    InputProps={{
                        disableUnderline: true,
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon style={{ marginLeft: "5px" }} />
                            </InputAdornment>
                        ),

                    }}
                />
                
            </Grid>
            </div>
          
        </Grid>

    </div>)

}