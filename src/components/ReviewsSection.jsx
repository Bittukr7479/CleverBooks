// src/components/ReviewsSection.js
import React from 'react';
import { Container, Typography, Card, CardContent } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Rating from '@mui/material/Rating';



const reviews = [
  { name: 'Emily Johnson', review: 'CleverBooks transformed our inventory management, making it efficient and hassle-free!', ratingvalue: 4.5 },
  { name: 'Michael Brown', review: 'The analytics and real-time updates provided by CleverBooks are exceptional and have significantly boosted our productivity.', ratingvalue: 4 },
  { name: 'Sarah Wilson', review: 'Highly recommend CleverBooks for any business looking to optimize their stock levels and reduce waste.', ratingvalue: 4.5 },
  { name: 'David Lee', review: 'With CleverBooks, our stockouts have drastically reduced, and our operations are running smoother than ever!', ratingvalue: 5 },
];


const ReviewsSection = () => {
  return (
    <Container maxWidth="lg" style={{ padding: '50px 0' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color='black'
        gutterBottom
        sx={{ paddingLeft: { xs: '16px', lg: '0' } }}
      >
        Reviews
      </Typography>
      {reviews.map((review, index) => (
        <Card key={index} style={{ marginBottom: '20px' }}>
          <CardContent>
            <Stack direction='row' display='flex' alignItems='center'>
              <Avatar alt={review.name} src="/static/images/avatar/1.jpg" />
              <Typography paddingLeft='10px' variant="h6" color='black' fontWeight='500'>{review.name}</Typography>
            </Stack>
            <Typography color='#5b5858'>{review.review}</Typography>
            <Rating name="half-rating-read" defaultValue={review.ratingvalue} precision={0.5} readOnly />
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};

export default ReviewsSection;
