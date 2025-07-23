import React from 'react';
import Grid from '@mui/material/Grid';
import { Typography, List, ListItem } from '@mui/material';

const companyData = {
  companies: [
    { companyname: "google" },
    { companyname: "amazon" },
    { companyname: "apple" },
    { companyname: "facebook" },
    { companyname: "oracle" },
    { companyname: "ibm" },
    { companyname: "intel" },
    { companyname: "adobe" },
    { companyname: "netflix" },
    { companyname: "tesla" },
    { companyname: "samsung" },
    { companyname: "cisco" },
    { companyname: "linkedin" },
    { companyname: "salesforce" },
    { companyname: "paypal" },
    { companyname: "twitter" },
    { companyname: "uber" },
    { companyname: "airbnb" },
    { companyname: "snapchat" },
    { companyname: "zoom" },
    { companyname: "spacex" },
    { companyname: "tiktok" },
    { companyname: "shopify" },
    { companyname: "stripe" },
    { companyname: "dropbox" },
    { companyname: "github" },
    { companyname: "bitbucket" },
    { companyname: "hp" },
    { companyname: "dell" },
    { companyname: "lg" },
    { companyname: "sony" },
    { companyname: "philips" },
    { companyname: "panasonic" },
    { companyname: "lenovo" },
    { companyname: "xiaomi" },
    { companyname: "huawei" },
    { companyname: "nokia" },
    { companyname: "qualcomm" },
    { companyname: "amd" },
    { companyname: "nvidia" },
    { companyname: "epicgames" },
    { companyname: "unity" },
    { companyname: "blizzard" },
    { companyname: "ea" },
    { companyname: "dominos" },
    { companyname: "mcdonalds" },
    { companyname: "starbucks" },
    { companyname: "pepsi" },
    { companyname: "coca-cola" },
    { companyname: "walmart" },
    { companyname: "target" },
    { companyname: "costco" },
    { companyname: "ikea" },
    { companyname: "toyota" },
    { companyname: "bmw" },
    { companyname: "mercedes" },
    { companyname: "ford" },
    { companyname: "hyundai" },
    { companyname: "volkswagen" },
    { companyname: "audi" },
    { companyname: "rolls-royce" },
    { companyname: "porsche" }
  ]
};

const CompanyName = () => {
  return (
    <div style={{ marginLeft: 50, marginRight: 50 }}>
      <Grid container spacing={2}>
        {/* First Column */}
        <Grid item xs={12} sm={4}>
          <List>
            {companyData.companies.slice(0, 20).map((company, index) => (
              <ListItem key={index} sx={{ mb:-1.5 }}> {/* Add spacing here */}
                {company.companyname}
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={4}>
          <List>
            {companyData.companies.slice(20, 40).map((company, index) => (
              <ListItem key={index} sx={{ mb: -1.5}}> {/* Add spacing here */}
                {company.companyname}
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={4}>
          <List>
            {companyData.companies.slice(40, 60).map((company, index) => (
              <ListItem key={index} sx={{ mb: -1.5 }}> {/* Add spacing here */}
                {company.companyname}
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompanyName;
