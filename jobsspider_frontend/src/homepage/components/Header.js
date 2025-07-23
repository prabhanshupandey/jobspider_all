import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import userLogin from '../../assets/user.png'
import Toolbar from '@mui/material/Toolbar';
import { Divider } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link, Button, Menu, MenuItem } from '@mui/material';
import parse from 'html-react-parser';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DrawerComponent from './DrawerComponent';
import PopupComponent from '../../userlogin/PopupComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'
import IconButton from '@mui/material/IconButton';




export default function Header() {
  const navigate = useNavigate()
  var location = useSelector(state => state.user)
  var dispatch = useDispatch()
  console.log("USER:", homeUser)
  var homeUser = localStorage.getItem("USER")

  if (homeUser != null) {

    location = JSON.parse(homeUser)

  }



  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  const [popOpen, setPopOpen] = useState(false)
  // const [profileOpen, setProfileOpen] = useState(false); 

  const options = {
    "Jobs": ['Work From Home Jobs', 'Part Time Jobs', 'Freshers Jobs', 'Jobs For Women', 'Full Time Job', 'Night Shift Jobs', 'International Jobs', 'Jobs by City', 'Jobs By Department', 'Jobs By Company', 'Jobs By Qualifications', 'Others'],
    "Carrer Compass": ['Ai Resume Builder', 'Ai Resume Checker', 'Ai Resume Cover Letter Generator', 'Ai Interview'], "degree": [], "Contest": [],
  }
  var menuoptions = Object.keys(options);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorUser, setAnchorUser] = useState(null);
  const [menuItems, setMenuItems] = useState([])
  const open = Boolean(anchorEl);
  const openUser = Boolean(anchorUser);

  const handleClickUser = (event) => {
    setAnchorUser(event.currentTarget);
  };
  const handleCloseUser = () => {
    setAnchorUser(null);
  };
  const userLogout = () => {
    dispatch({ type: "DELETE_USER", payload: '' })
    localStorage.removeItem("USER")
    navigate("/homepage")
  }

  const showUserDetails = () => {
    return (
      <Menu
        id="basic-menu"
        anchorEl={anchorUser}
        open={openUser}
        onClose={handleCloseUser}
        onClick={handleCloseUser}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&::before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

      >
        <MenuItem>{location?.status}:{location?.emailMobile}</MenuItem>

        <MenuItem onClick={() => navigate('/profile')}>
      View profile
    </MenuItem>











        <Divider />
        <MenuItem onClick={userLogout}>Logout</MenuItem>
      </Menu>

    )
  }





  const handleClick = (event, item) => {
    setAnchorEl(event.currentTarget)
    setMenuItems(options[item])
  }
  const handleClose = (event) => {
    setAnchorEl(null)
  }


  const handleOpenDrawer = () => {
    setOpenDrawer(true)
  }


  const mainMenu = () => {
    return menuoptions.map((item) => {
      return <Button onClick={(event) => handleClick(event, item)} style={{ textTransform: "capitalize", color: "#000", fontSize: 14, fontWeight: 'bold' }} endIcon={<KeyboardArrowDownIcon />}>{item}</Button>
    })
  }



  const setMenuFormat = () => {
    var str = `<div style="display:flex; flex-direction:column; padding:5px">`
    for (var i = 0; i < menuItems.length;)

      str += `<div style=" width:350px; display:flex; flex-direction:row; "><div style="width:220px; padding:5px;">${menuItems[i++]}</div><div style="border-left:1px solid #38546d; width:50px;"></div><div style="width:150px; padding:5px;">${menuItems[i++]}</div></div>`


    str += `</div>`
    return parse(str)

  }





  const showMenuOptions = () => {
    return menuItems.map((item) => {
      return <MenuItem onClick={handleClose}>{item}</MenuItem>


    })
  }


  const handleCandidateLogin = () => {
    setPopOpen(true)


  }


  return (

    <div style={{ width: "100%" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='standard' style={{
          width: '100%', boxShadow: "none", left: 0, right: 0, background: "#fff",
          zIndex: 9999, top: 0
        }}>
          <Toolbar>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div>{matches ? <MenuIcon onClick={handleOpenDrawer} style={{ cursor: "pointer", color: '#000 ', marginRight: "7px" }} /> : <></>}</div>
              <div style={{ display: 'flex', marginRight: '10px', cursor: 'pointer' }} onClick={() => navigate('/homepage')}>
                <div>
                  <img src='/spider.png' style={{ width: 40 }} />
                </div>

                <div style={{ fontWeight: "700", fontSize: 24, color: '#000', marginLeft: 5 }}>
                  JobsSipder
                </div>
              </div>
            </div>
            {matches ? <></> :
              <div style={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                {mainMenu()}
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}


                >
                  {setMenuFormat()}
                </Menu>
              </div>
            }


            <div style={{ display: "flex", alignItems: "center", justifyContent: matches ? 'flex-end' : "space-between", width: location ? 200 : 320 }} >
              {matches ? <></> :
                <Link href="#" underline="none" style={{ fontSize: 16, fontWeight: 600, color: '#b03a84' }}>
                  Employer Login
                </Link>
              }
              {matches ? <AccountBoxIcon style={{ fontSize: "35px", color: '#b03a84', fontWeight: 60 }} /> : location == null ? <Button style={{ width: 180, textTransform: "capitalize", fontSize: 14, variant: "contained", fontWeight: "bold", background: '#b03a84', color: "#fff" }} onClick={handleCandidateLogin}>Candidate Login</Button> : <IconButton onClick={handleClickUser}  ><img src={userLogin} style={{ objectFit: "contain", maxWidth: 40 }} /></IconButton>}
            </div>

          </Toolbar>
        </AppBar>
        <DrawerComponent options={options} openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        <PopupComponent open={popOpen} setClose={setPopOpen} />
        {showUserDetails()}

        {/* <Dialog open={profileOpen} onClose={() => setProfileOpen(false)}>
        <DialogTitle style={{color:"black",fontWeight:"bold",fontFamily:"Ubuntu",display:"flex",flexDirection:"start"}}>User Profile</DialogTitle>
        <DialogContent>
          
        
          <MenuItem>{location?.status}:{location?.emailMobile}</MenuItem>
          
       
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setProfileOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog> */}









      </Box>
    </div>

  )

}