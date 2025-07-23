import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, List, ListItem } from '@mui/material';




const cityData = {
  cities: [
    { cityname: "Agra" },
    { cityname: "Ahmedabad" },
    { cityname: "Ahmednagar" },
    { cityname: "Ajmer" },
    { cityname: "Aligarh" },
    { cityname: "Amritsar" },
    { cityname: "Asansol" },
    { cityname: "Aurangabad" },
    { cityname: "Bareilly" },
    { cityname: "Belagavi" },
    { cityname: "Bengaluru" },
    { cityname: "Bhavnagar" },
    { cityname: "Bhilai" },
    { cityname: "Bhopal" },
    { cityname: "Bhubaneswar" },
    { cityname: "Bikaner" },
    { cityname: "Chandigarh" },
    { cityname: "Chennai" },
    { cityname: "Coimbatore" },
    { cityname: "Cuttack" },
    { cityname: "Dehradun" },
    { cityname: "Delhi-NCR" },
    { cityname: "Dhanbad" },
    { cityname: "Goa" },
    { cityname: "Gorakhpur" },
    { cityname: "Guntur" },
    { cityname: "Guwahati" },
    { cityname: "Gwalior" },
    { cityname: "Hubli" },
    { cityname: "Hyderabad" },
    { cityname: "Indore" },
    { cityname: "Jabalpur" },
    { cityname: "Jaipur" },
    { cityname: "Jalandhar" },
    { cityname: "Jamnagar" },
    { cityname: "Jamshedpur" },
    { cityname: "Jodhpur" },
    { cityname: "Kannur" },
    { cityname: "Kanpur" },
    { cityname: "Kochi" },
    { cityname: "Kolhapur" },
    { cityname: "Kolkata" },
    { cityname: "Kota" },
    { cityname: "Lucknow" },
    { cityname: "Ludhiana" },
    { cityname: "Madurai" },
    { cityname: "Malappuram" },
    { cityname: "Mangalore" },
    { cityname: "Meerut" },
    { cityname: "Mumbai" },
    { cityname: "Mysuru" },
    { cityname: "Nagpur" },
    { cityname: "Nashik" },
    { cityname: "Panipat" },
    { cityname: "Patna" },
    { cityname: "Prayagraj" },
    { cityname: "Puducherry" },
    { cityname: "Pune" },
    { cityname: "Raipur" },
    { cityname: "Rajkot" },
    { cityname: "Ranchi" },
    { cityname: "Saharanpur" },
    { cityname: "Salem" },
    { cityname: "Solapur" },
    { cityname: "Surat" },
    { cityname: "Thiruvananthapuram" },
    { cityname: "Trichy" },
    { cityname: "Udaipur" },
    { cityname: "Ujjain" },
    { cityname: "Vadodara" },
    { cityname: "Varanasi" },
    { cityname: "Vijayawada" },
    { cityname: "Visakhapatnam" },
    { cityname: "Warangal" }
  ]
};

const JobAccordion = () => {
  return (
    <Grid container spacing={2}>
      {/* First Column */}
      <Grid item xs={12} sm={4}>
       
        <List>
          {cityData.cities.slice(0,20).map((city, index) => (
            <ListItem key={index}sx={{ mb:-1.5 }}>{city.cityname}</ListItem>
          ))}
        </List>
      </Grid>

      {/* Second Column */}
      <Grid item xs={12} sm={4}>
        
        <List>
          {cityData.cities.slice(20,40).map((city, index) => (
            <ListItem key={index}sx={{ mb:-1.5 }}>{city.cityname}</ListItem>
          ))}
        </List>
      </Grid>

      {/* Third Column */}
      <Grid item xs={12} sm={4}>
        
        <List>
          {cityData.cities.slice(40,60).map((city, index) => (
            <ListItem key={index}sx={{ mb:-1.5 }}>{city.cityname}</ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default JobAccordion;
