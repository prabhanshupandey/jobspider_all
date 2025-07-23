
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import Grid from "@mui/material/Grid2";
import categoryicon from "../../assets/category.png";
import subcategoryicon from "../../assets/subcategory.png";
import skillicon  from "../../assets/skill.png"
import companyverfication from"../../assets/verification.png";
import companylist from"../../assets/company.png";
import  report  from "../../assets/reports.png";
import  logout  from "../../assets/shutdown.png";
import DisplayAllCategory from '../category/DisplayAllCategory';
import { Route,Routes,Router,Navigate, useNavigate } from 'react-router';
import DisplayAllSubCategory from '../subcategory/DisplayAllSubCategory';
import DisplayAllskills from '../requiredskills/DisplayAllskills';
import Category from '../category/Category'
import SubCategory from '../subcategory/SubCategory';
import RequiredSkill from '../requiredskills/RequiredSkills';
import  DashBoardicon from '../../assets/dashboard.png';
import { serverURL } from '../../services/FetchNodeServices';
import DisplayAllCompanyJobs from"../companyjobs/DisplayAllCompanyJobs";
import DisplayAllCompany from"../company/DisplayAllCompany";
import CompanyVerification  from '../company/CompanyVerification';
import Company from '../company/Company'
import Spider from './Logo';
import Reports from  '../applydetail/Reports'


export default function DashBoard() {


  const navigate=useNavigate();
  const Logout=()=>{
    localStorage.removeItem("TOKEN")
    localStorage.removeItem("ADMIN")
    navigate('/loginpage')
  }
   var  adminData=JSON.parse(localStorage.getItem("ADMIN"))
    const MenuList=()=>{
        return(
            
            <Box sx={{ margin:"40px 2px 0px 20px", maxWidth:270, borderRadius:7, width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,border:1,}}>
            <nav aria-label="main mailbox folders">
              <List>
              <ListItem disablePadding>
                <ListItemButton onClick={()=> navigate('/DashBoard/spider')}>
                    <ListItemIcon>
                     <img src={DashBoardicon} style={{width:30}}/>
                    </ListItemIcon>
                   
                    <ListItemText primary="Dashboard" />
                  </ListItemButton >
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton onClick={()=> navigate('/DashBoard/displayallcategory')}>
                    <ListItemIcon>
                     <img src={categoryicon} style={{width:30}}/>
                    </ListItemIcon>
                   
                    <ListItemText primary="Category" />
                  </ListItemButton >
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton onClick={()=> navigate('/Dashboard/displayallsubcategory')} >
                    <ListItemIcon>
                    <img src={subcategoryicon} style={{width:30}}/>
                    </ListItemIcon>
                    <ListItemText primary="Sub-category" /> 
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                <ListItemButton onClick={()=>navigate('/Dashboard/DisplayAllskills')}>
                    <ListItemIcon>
                    <img src={skillicon} style={{width:30}}/>
                    </ListItemIcon>
                    
                   
                    <ListItemText primary="Skill" /> 
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
            <ListItemIcon>
                  <img src={companyverfication} style={{width:30,marginLeft:"12px"}}/>
                </ListItemIcon>
              <ListItemButton  onClick={()=>navigate('/Dashboard/companyverification')}>
                <ListItemText primary="Company Verification" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
            <ListItemIcon>
                  <img src={companylist} style={{width:30,marginLeft:"12px"}}/>
                </ListItemIcon>
              <ListItemButton onClick={()=>navigate('/Dashboard/displayallcompany')}>
                <ListItemText primary="List Company" />
              </ListItemButton>
            </ListItem>
              </List>
            </nav>
            <Divider />
            <nav aria-label="secondary mailbox folders">
              <List>
                 <ListItem disablePadding>
                  <ListItemButton onClick={()=>navigate('/Dashboard/reports')}>
                    <ListItemIcon>
                      <img src={report} style={{width:30}}/>
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton onClick={Logout}>
                    <ListItemIcon>
                      <img src={logout} style={{width:30}}/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            </nav>
          </Box>
        )


    }

    return (
        <div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div style={{display:"flex"}} >

                            <div syle={{ marginLeft: 5, marginTop: 5 }}>
                                <img src='/spider.png' style={{ width: 40 }} />
                            </div>
                            <div style={{ fontWeight: 700, fontSize: 24 }}>
                                JobsSipder
                            </div>
                        </div>

                    </Typography>
                    <div style={{display:'flex', alignItems:'center'}}>
                    <div style={{fontWeight:"bold",marginRight:5,fontSize:"15px"}}>
                       {adminData.firstname} 
                      </div>
                  
                     <Avatar alt={adminData.firstname} src={`${serverURL}/images/${adminData.picture}`} />
                    </div>
                </Toolbar>
            </AppBar>
        </Box>

      <Grid container spacing={15}>
        <Grid item sx={2}>
        {MenuList()}
        </Grid>
        
        <Grid item sx={10}  style={{display:"flex",justifyContent:"center"}}>
  <Routes>
    <Route element={<DisplayAllCategory/>} path="/displayallcategory"/>
    <Route element={<Category/>} path="/category"/>
     <Route element={<DisplayAllSubCategory/>} path="/displayallsubcategory"/>
       <Route element={<DisplayAllskills/>} path="/DisplayAllskills"/>
       <Route element={<SubCategory/>} path="/subcategory"/>
       <Route element={<RequiredSkill/>} path="/skills"/>
       <Route element={<DisplayAllCompanyJobs/>} path="/displayallcompanyjobs"/>
       <Route element={<DisplayAllCompany/>} path="/displayallcompany"/>
       <Route element={<CompanyVerification/>} path="/companyverification"/>
       <Route element={<Company/>} path="/company"/>
       <Route element={<Spider/>} path="/spider"/>
       <Route element={<Reports/>} path="/reports"/>
      
       </Routes>
        </Grid>
       
      </Grid>

        </div>
    )



}
