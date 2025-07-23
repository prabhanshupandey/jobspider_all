import { Divider, InputAdornment } from "@mui/material";
import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import { Box, TextField, Checkbox, List, ListItem, ListItemText } from "@mui/material";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: '90vh',
  border: 'none', 
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
};

const cities = {
  suggested: ["Indore Region, MP", "Ujjain Region, MP"],
  all: ["Ahmedabad Region, GJ", "Ajmer Region, RJ",
"Bhopal Region, MP", "Lucknow, UP", "Kota, RJ", "Ranchi, JH", "Jalandhar, PB", "Indore Region, MP", "Ujjain Region, MP", "Panipat Region, HR"]
};

export default function CityPopupComponent({ open, onClose,onDone }) {
  const [selected, setSelected] = useState([]);
  const [search, setSearch] = useState('');
 const [clearClicked, setClearClicked] = useState(false);
  const allCities = [...cities.suggested, ...cities.all];

  const filterdCities = allCities.filter(city =>
    city.toLowerCase().includes(search.toLowerCase())
  );

  const handleCityClick = (city) => {
    if (selected.includes(city)) {
      setSelected(selected.filter(c => c !== city));
    } else if (selected.length < 3) {
      setSelected([...selected, city]);
    }
  };

  const renderCityItem = (city) => (
    <ListItem key={city} button onClick={() => handleCityClick(city)} sx={{ paddingTop: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              backgroundColor: "#F4F2F6",
              width: 30,
              height: 30,
              borderRadius: "3px",
              display: "flex",
              alignItems: "center",
            
              justifyContent: "center",
              marginRight: 2
            }}
          >
            <RoomOutlinedIcon sx={{ width: 18, color: "grey" }} />
          </Box>
          <ListItemText primary={city} />
        </Box>
        <Checkbox
          checked={selected.includes(city)}
          sx={{
            color: "#165B48",
            '&.Mui-checked': {
              color: "#165B48",
            }
          }}
        />
      </Box>
    </ListItem>
  );

  return (
    <div>
      <Modal open={open} onClose={onClose}>
        <Box sx={style}>
          <div style={{ padding: 17 ,display:"flex",alignItems:"center"}}>
              <div>
            <Typography style={{ fontWeight: 600, fontSize: "16px", lineHeight: "24px", color: "#190A28" }}>
              Add preferred job cities
            </Typography>
            <Typography style={{ fontSize: "12px", lineHeight: "16px", paddingTop: "2px", color: "#8C8594" }}>
              Select up to 3 cities other than your current city
            </Typography>
            </div>
             <div style={{marginLeft:"auto"}}>
              <ClearIcon  onClick={onClose}/>
             
              </div>
             </div>

          <Divider style={{ border: "0.5px light grey", borderRadius: "1px", width: "100%", paddingTop: 5 }} />

          <div style={{ padding: 17}}>
            <TextField
              placeholder="Search for a City"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ width: "100%" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <RoomRoundedIcon />
                  </InputAdornment>
                ),
                sx: {
                  height: 45,
                  fontSize: "14px",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "grey",
                  },
                  "&:hover fieldset": {
                    borderColor: "black",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#165B48",
                  }
                }
              }}
            />
          </div>

          {selected.length > 0 && (
            <Stack direction="row" spacing={1} flexWrap="wrap" sx={{ marginBottom: 2, padding: 2 }}>
              {selected.map((city) => (
                <Chip
                  key={city}
                  label={city}
                  onDelete={() => setSelected(selected.filter(c => c !== city))}
                  sx={{
                    color:  "#1F8268",
                    border: "1px solid #1F8268",
                    backgroundColor: "#EAF8F4",
                    '& .MuiChip-deleteIcon': {
                      color:  "#1F8268",
                      '&:hover': {
                        color:  "#1F8268",
                      }
                    }
                  }}
                  variant="outlined"
                />
              ))}
            </Stack>
          )}

          <Typography style={{ padding: 17, color: "#827485", fontSize: "14px", fontWeight: 500, lineHeight: "20px", backgroundColor: "#F4F2F6" }}>
            Suggested cities
          </Typography>
          <List dense>
            {cities.suggested.map(city => renderCityItem(city))}
          </List>

          <Typography style={{ padding: 17, color: "#827485", fontSize: "14px", fontWeight: 500, lineHeight: "20px", backgroundColor: "#F4F2F6" }}>
            All live cities
          </Typography>
          <List dense>
            {filterdCities.map(city =>
              !cities.suggested.includes(city) && renderCityItem(city)
            )}
          </List>
        <div style={{ padding: 15 }}>
            <Button
          onClick={() => onDone(selected)} 
              variant="contained"
              sx={{
                backgroundColor: clearClicked ? "#94c5b9" : "#2D8A6D",
                color: "#fff",
                textTransform: "none",
                width: "100%",
                height: "50px",
                fontWeight: "bold",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: clearClicked ? "#94c5b9" : "#165B48",
                },
              }}
            >
              Done
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
