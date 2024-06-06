// src/ProblemTargetSection.js
import React from 'react';
import { Container, Tabs, Tab, Typography, Box } from '@mui/material';
import { useState } from 'react';

const ProblemTargetSection = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container sx={{ padding: '50px 0', backgroundColor: '#f9f9f9', borderRadius:'15px'}}>
      <Typography variant="h4" fontWeight='600' gutterBottom align="center">Features of CleverBooks</Typography>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="Automated Purchasing" />
        <Tab label="Real-Time Analytics" />
        <Tab label="Seamless Integration" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Typography variant="h6">Automated Purchasing</Typography>
        <Typography variant="body1">
          Automate your inventory purchasing to ensure optimal stock levels at all times.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography variant="h6">Real-Time Analytics</Typography>
        <Typography variant="body1">
          Get real-time insights into your inventory levels, sales data, and more.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography variant="h6">Seamless Integration</Typography>
        <Typography variant="body1">
          Integrate CleverBooks seamlessly with your existing tools and systems.
        </Typography>
      </TabPanel>
    </Container>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
};

export default ProblemTargetSection;
