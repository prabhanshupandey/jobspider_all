
import { serverURL } from "../../services/FetchNodeServices"

import { Button, Paper } from "@mui/material"
import { useState } from "react"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
export default function TrendingJobs({item,colors}) {
 const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [bk, setBk] = useState("#f1f2f6")
    const [move, setMove] = useState("text")
    const [color,setColor]= useState('')
    const [btnProps, setBtnProps] = useState({ v: "text", bk: '#f1f2f6', c: "#b03a84", brc: '#f1f2f6' })
    const handleColorChangeOver = (item) => {
        setBk("#ffff")
        setColor(colors)
        setMove("textMove");
        setBtnProps({ v: 'contained', 
            bk:colors, 
            c: '#ffff', 
            brc:color 
        })
      

    }
    const handleColorChangeLeave = () => {
        setBk("#f1f2f6")
        
        setMove("text");
        setBtnProps({ v: 'text', bk: "#f1f2f6", c: '#b03a84', brc: '#f1f2f6' })
    }


     
            return (<div>

                    <Paper onMouseLeave={handleColorChangeLeave}
                     onMouseOver= {()=>handleColorChangeOver(item)}
                      elevation={0} 
                      style={{
                        width:360, 
                        height:280, 
                        margin:matches?0:15,
                        marginBottom:matches?15:'',
                        padding: '30px 20px 30px 20px', 
                        borderRadius: "18px", 
                        position:"relative",
                        background: `linear-gradient(0deg,${btnProps.bk}  -80%, rgba(255, 250, 250, 0.9) 83%`,
                        border: `0.5px solid ${btnProps.brc}`
                      
                    }}>
                        
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            
                            <div style={{ fontSize: 18, color: "#7f8c8d" }}>
                                {`Trending @ #${item.trending}`.toUpperCase()}</div>

                            <div style={{ fontSize: 20, fontWeight: "bold", marginTop: 40, marginBottom: 10 }}>
                                {item.jobtype}
                            </div>
                            {/* <div className={`${move}`}>{item.jobtype}</div> */}
                            <div style={{ color: "transparent", WebkitTextStroke: "0.3px gray"}} className={`${move}`}>{item.jobtype}</div>
                        </div>




                        <div style={{ marginTop: 60 }}>
                            <Button variant={btnProps.v} style={{ color: btnProps.c, textTransform: 'capitalize', fontSize: 18, fontWeight: "bold", background: btnProps.bk }}>{`View All>`}</Button>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <img 
                            src={`${serverURL}/images/${item.picture}`}
                             style={{ width: 200,
                             borderBottomRightRadius:'25px',
                               position: "absolute", 
                               zIndex: 2,
                               height:215,
                                top: -189,
                                 right: -20,
                                
                             
                                       }} />
                       
                     
                       
                        </div>
                          
                       
                    </Paper>
                    </div>
                
                    
               
            )

        } 

 
