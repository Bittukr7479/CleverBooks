// src/components/CTASection.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { color, styled } from '@mui/system';


const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight: 'bold',
  height: '50px',
  width: '186px',
  backgroundColor: '#f79b15',
  color: 'black',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  borderRadius:'10px',
  border: '2px solid black',
  '&.button1': {
    backgroundColor: 'green',
    color:'green',
    border: '2px solid black',
    '&:hover': {
      backgroundColor: 'green',
      height: '54px',
      width: '188px',

      color: 'black'
    },
  },
}));
const CTASection = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', padding: '50px 0' }}>
      <Typography variant="h4" component="h2" fontWeight='600' gutterBottom>
        Grow faster than you think
      </Typography>
      <CustomButton >
        Sign Up Now
      </CustomButton>
    </Container>
  );
};

export default CTASection;
