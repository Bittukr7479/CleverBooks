// src/components/CTASection.js
import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const CTASection = () => {
  return (
    <Container maxWidth="lg" style={{ textAlign: 'center', padding: '50px 0' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Grow faster than you think
      </Typography>
      <Button variant="contained" color="primary" size="large">
        Sign Up Now
      </Button>
    </Container>
  );
};

export default CTASection;
