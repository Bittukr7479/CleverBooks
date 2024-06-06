// src/KeyMetrics.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SpeedIcon from '@mui/icons-material/Speed';

const KeyMetrics = () => {

  return (
    <Container >
      <Typography
        variant="h4"
        fontWeight="bold"
        color='black'
        textAlign="center"
        padding="5rem 0rem"
      >
        Why Choose CleverBooks?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={4} textAlign="center">
          <Box sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px', border: '2px solid #f4f4f4de' }}>
            <TrendingUpIcon sx={{ color: 'green' }} />
            <Typography variant="h5" fontWeight='600' gutterBottom>90% Accuracy</Typography>
            <Typography variant="body1" sx={{ minHeight: '4rem' }} >
              Achieve 90% accuracy in demand forecasting with our advanced algorithms.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Box sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px', border: '2px solid #f4f4f4de' }}>
            <ShoppingCartIcon sx={{ color: 'green' }} />
            <Typography variant="h5" fontWeight='600' gutterBottom>50% Reduction</Typography>
            <Typography variant="body1" sx={{ minHeight: '4rem' }} >
              Reduce stockouts by 50% with real-time inventory management.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} textAlign="center">
          <Box sx={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '15px', border: '2px solid #f4f4f4de' }}>
            <SpeedIcon sx={{ color: 'green' }} />
            <Typography variant="h5" fontWeight='600' gutterBottom>30% Increase</Typography>
            <Typography variant="body1" sx={{ minHeight: '4rem' }} >
              Increase inventory turnover by 30% with optimized processes.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default KeyMetrics;
