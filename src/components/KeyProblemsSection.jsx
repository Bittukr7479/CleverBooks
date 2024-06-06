import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import overstock from '../assets/overstock.png';
import understock from '../assets/understock.png';
import inventoryInaccuracies from '../assets/inventoryInaccuracies.png';
import { Box } from '@mui/material';

export default function MediaCard() {
  return (<>
  <Typography
    variant="h4"
    fontWeight="bold"
    color='black'
    textAlign="center"
    paddingTop="5rem"
    // paddingBottom="calc(8rem - 5rem)"
  >
    Three key problems solved by CleverBooks:
  </Typography>
    <Grid container spacing={3} sx={{ padding: '60px 120px', backgroundColor: 'transparent' }}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card sx={{ padding: '30px', height: '300px', borderRadius: '20px', border: '2px solid #FFFFFF10', backgroundColor:'#f9f9f9'}}>
          <img src={overstock} alt="Overstocking" height='100rem' />
          <CardContent sx={{ padding: '20px 0px 0px 0px' }}>
            <Typography gutterBottom variant="h5" color="black" component="div">
              Overstocking:
            </Typography>
            <Typography variant="body2" color="black">
              Avoid excess inventory with our precise demand forecasting, ensuring optimal stock levels.            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <Card sx={{ padding: '30px', height: '300px', borderRadius: '20px', border: '2px solid #FFFFFF10', backgroundColor:'#f9f9f9'}}>
          <img src={understock} alt="Understocking" height='100rem' />
          <CardContent sx={{ padding: '20px 0px 0px 0px' }}>
            <Typography gutterBottom variant="h5" color="black" component="div">
              Understocking:
            </Typography>
            <Typography variant="body2" color="black">
              Prevent stockouts and lost sales with our real-time inventory management.            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={4}>
        <Card sx={{ padding: '30px', height: '300px', borderRadius: '20px', border: '2px solid #FFFFFF10', backgroundColor:'#f9f9f9'}}>
          <img src={inventoryInaccuracies} alt="Inventory Inaccuracies" height='100rem' />
          <CardContent sx={{ padding: '20px 0px 0px 0px' }}>
            <Typography gutterBottom variant="h5" color="black" component="div">
              Inventory Inaccuracies:
            </Typography>
            <Typography variant="body2" color="black">
              Maintain accurate inventory data with our advanced analytics and real-time updates.            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
  );
}
