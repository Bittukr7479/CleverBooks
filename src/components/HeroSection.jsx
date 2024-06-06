// src/components/HeroSection.js
import React from 'react';
import { Container, Typography, Button, Box, Stack } from '@mui/material';
import { styled } from '@mui/system';
import backgroundImage from '../assets/hero-background.jpg'; 
import sideImg from '../assets/sideImg.png'; 

const CustomButton = styled(Button)(({ theme }) => ({
  fontWeight:'bold',
  height: "50px",
  width: '186px',
  backgroundColor: 'rgba(238, 229, 255, 0.74)',
  color: 'white',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  cursor: 'pointer',
  '&.button1': {

    backgroundColor: 'transparent',
    border: '2px solid white',
    '&:hover': {
      background: 'linear-gradient(125deg, #9f6eed, #fc907e, #9f6eed, #fc907e)',
      // WebkitBackgroundClip: 'text',
      height: "54x",
      width: '188px',

      color: 'black'
    },
  },
}));

// Styled container to add background image and other styles
const HeroContainer = styled(Container)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  textAlign: 'center',
}));

const HeroSection = () => {
  return (
    <HeroContainer maxWidth="false" height="40rem" sx={{ position: "relative", top: "0%", display: 'flex', flexDirection: 'row', height:'45rem'}}>
      <Box padding='50px' display='flex' flexDirection='column' width='60%'>
        <Stack>
          <Typography variant="h2" component="h1" gutterBottom textAlign='left' sx={{ fontWeight: 'bold' }}>
            <span style={{
              background: 'linear-gradient(125deg, #9f6eed, #fc907e, #9f6eed, #fc907e)',
              WebkitBackgroundClip: 'text',
              color: 'transparent'
            }}>
              Innovate, Manage & Succeed,&nbsp;
            </span>
            <span style={{ color: 'white' }}>
              with CleverBooks
            </span>
          </Typography>
        </Stack>

        <Typography variant="h6" component="p" gutterBottom textAlign='left' sx={{
          color: 'rgba(238, 229, 255, 0.74)', fontWeight: '400'
        }}>
          Eliminate overstocking and under-stocking with CleverBooks. Built by inventory management experts, it leverages advanced technology to empower fast-growing startups.
        </Typography>
        <CustomButton className="button1" sx={{margin:'15px 0px'}}>
          Get Started
        </CustomButton>
      </Box>
      <Box sx={{ backgroundColor: 'transparent' }}>
        <img src={sideImg} alt="" height='30%' width='79%' srcSet="" />
      </Box>
    </HeroContainer>

  );
};

export default HeroSection;
