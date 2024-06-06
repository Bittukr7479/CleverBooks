// src/components/ReviewsSection.js
import React from 'react';
import { Container, Typography, Card, CardContent, Link } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Rating from '@mui/material/Rating';
import man2 from '../assets/avatar/man2.jpeg'
import man3 from '../assets/avatar/man3.jpg'
import man4 from '../assets/avatar/man4.jpeg'
import man5 from '../assets/avatar/man5.jpeg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const reviews = [
  { name: 'Emily Johnson', review: 'CleverBooks transformed our inventory management, making it efficient and hassle-free!', avatarImg: man2, ratingvalue: 4.5 },
  { name: 'Michael Brown', review: 'The analytics and real-time updates provided by CleverBooks are exceptional and have significantly boosted our productivity.', avatarImg: man3, ratingvalue: 4 },
  { name: 'Sarah Wilson', review: 'Highly recommend CleverBooks for any business looking to optimize their stock levels and reduce waste.', avatarImg: man4, ratingvalue: 4.5 },
  { name: 'David Lee', review: 'With CleverBooks, our stockouts have drastically reduced, and our operations are running smoother than ever!', avatarImg: man5, ratingvalue: 5 },
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
              <Avatar alt={review.name} src={review.avatarImg} />
              <Typography paddingLeft='10px' variant="h6" color='black' fontWeight='500'>{review.name}</Typography>
            </Stack>
            <Typography color='#5b5858'>{review.review}</Typography>
            <Rating name="half-rating-read" defaultValue={review.ratingvalue} precision={0.5} readOnly />
          </CardContent>
        </Card>
      ))}
      <Link href="#" underline="hover" sx={{ paddingLeft: { xs: '16px', lg: '0', fontWeight:'600', fontSize:'20px' }, display:'flex', alignItems:'center' }}>
        See more reviews
      <KeyboardArrowRightIcon/>
      </Link>
    </Container>
  );
};

export default ReviewsSection;
