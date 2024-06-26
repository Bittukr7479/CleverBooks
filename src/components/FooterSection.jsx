import React from 'react'
import { Box, Container, Stack } from '@mui/system'
import { Divider, Link, Typography } from '@mui/material'
import backgroundImage from '../assets/hero-background.jpg';
import VisibilityIcon from '@mui/icons-material/Visibility';


function FooterSection() {
  return (
    <Container maxWidth='unset'
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        color: 'white'
      }}
    >
      <Stack direction='row' 
      display= 'flex'
      flexDirection={{ xs:'column', sm:'row'}}
      alignItems='center'
 justifyContent='space-around'>
        <Box>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: "monospace",
              alignItems:'center',
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <VisibilityIcon sx={{ display: 'flex', mr: 1 }} />
            CleverBooks
          </Typography>
          <Typography variant="body2" color='#c2b2b2' gutterBottom>
            1234 Market Street, Suite 200<br />
            San Francisco, CA 94103<br />
            info@cleverbooks.com
          </Typography>
        </Box>
        <Divider orientation="vertical" variant="middle" sx={{backgroundColor:"white", fontWeight:'600'}} flexItem />

        <Box display='flex' flexDirection='column' alignItems={{ xs:'center', sm:'unset'}}>
          <Link href="#" underline="hover">
            Product
          </Link>
          <Link href="#" underline="hover">
            Pricing
          </Link>
          <Link href="#" underline="hover">
            Blog
          </Link>
          <Link href="#" underline="hover">
            Contact us
          </Link>
        </Box>
      </Stack>
    </Container>
  )
}

export default FooterSection