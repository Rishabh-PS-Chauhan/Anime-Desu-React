import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Avatar,
  Rating,
  Chip,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import { Star, StarBorder } from '@mui/icons-material';

const Reviews = () => {
  const [selectedAnime, setSelectedAnime] = useState('');

  const featuredReview = {
    anime: 'Attack on Titan',
    image: '/img/60fbd504b57bb226d209d141deccad41.jpg',
    reviewer: 'AnimeCritic',
    avatar: '/img/Itachi.jpg',
    rating: 5,
    date: '2 days ago',
    excerpt: 'This anime completely redefined what I thought was possible in storytelling. The character development, plot twists, and emotional depth are absolutely incredible. Every episode leaves you wanting more, and the animation quality is top-notch.',
    tags: ['Masterpiece', 'Must Watch', 'Emotional'],
  };

  const reviews = [
    {
      id: 1,
      anime: 'Your Name',
      image: '/img/1337462.png',
      reviewer: 'RomanceLover',
      avatar: '/img/Itachi.jpg',
      rating: 5,
      date: '1 day ago',
      excerpt: 'A beautiful story about connection and fate. The animation is stunning and the music is perfect.',
      tags: ['Romance', 'Beautiful'],
    },
    {
      id: 2,
      anime: 'Death Note',
      image: '/img/28e08aea9bbeaa658aaeaa4c2340d444.jpg',
      reviewer: 'ThrillerFan',
      avatar: '/img/Itachi.jpg',
      rating: 4,
      date: '3 days ago',
      excerpt: 'Brilliant psychological thriller with amazing character development. Light and L\'s battle of wits is legendary.',
      tags: ['Thriller', 'Psychological'],
    },
    {
      id: 3,
      anime: 'One Punch Man',
      image: '/img/4b798dfb3a301f391fe62994e89edd98.jpg',
      reviewer: 'ComedyKing',
      avatar: '/img/Itachi.jpg',
      rating: 4,
      date: '5 days ago',
      excerpt: 'Hilarious parody of superhero tropes with amazing animation. Saitama is such a unique protagonist.',
      tags: ['Comedy', 'Parody'],
    },
    {
      id: 4,
      anime: 'Demon Slayer',
      image: '/img/Our Last Hope_3840x2160.jpg',
      reviewer: 'ActionAddict',
      avatar: '/img/Itachi.jpg',
      rating: 5,
      date: '1 week ago',
      excerpt: 'Incredible animation and fight scenes. The story is emotional and the characters are well-developed.',
      tags: ['Action', 'Animation'],
    },
  ];

  const animeList = [
    'Attack on Titan',
    'Your Name',
    'Death Note',
    'One Punch Man',
    'Demon Slayer',
    'Steins;Gate',
    'Naruto',
    'One Piece',
    'Dragon Ball',
    'Fullmetal Alchemist',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(/img/wallpapersden.com_76057-3840x2160.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          padding: '8rem 0',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h1" sx={{ color: 'white', marginBottom: '1rem' }}>
            Anime Reviews
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.6rem' }}>
            Read honest reviews from our community and share your own thoughts on your favorite anime!
          </Typography>
        </Container>
      </Box>

      {/* Featured Review */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Featured Review
          </Typography>
          <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box sx={{ position: 'relative', height: '300px' }}>
                  <CardMedia
                    component="img"
                    image={featuredReview.image}
                    alt={featuredReview.anime}
                    sx={{ height: '100%', objectFit: 'cover' }}
                  />
                  <Chip
                    label="Featured"
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: '#e63946',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={8}>
                <CardContent sx={{ padding: '2rem' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Avatar src={featuredReview.avatar} alt={featuredReview.reviewer} />
                      <Box>
                        <Typography variant="h4" sx={{ marginBottom: '0.5rem', color: '#333' }}>
                          {featuredReview.reviewer}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#666' }}>
                          {featuredReview.date}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ textAlign: 'right' }}>
                      <Rating value={featuredReview.rating} readOnly size="large" />
                      <Typography variant="h6" sx={{ color: '#e63946', fontWeight: 'bold' }}>
                        {featuredReview.rating}/5
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                    {featuredReview.anime}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {featuredReview.excerpt}
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    {featuredReview.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" color="primary" />
                    ))}
                  </Box>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* Reviews Grid */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Latest Reviews
          </Typography>
          <Grid container spacing={3}>
            {reviews.map((review) => (
              <Grid item xs={12} md={6} key={review.id}>
                <Card sx={{ height: '100%', display: 'flex', gap: 2, padding: '1.5rem' }}>
                  <Box sx={{ width: '120px', height: '160px', flexShrink: 0 }}>
                    <CardMedia
                      component="img"
                      image={review.image}
                      alt={review.anime}
                      sx={{ height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                      {review.anime}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, marginBottom: '1rem', fontSize: '1.4rem', color: '#666' }}>
                      <Rating value={review.rating} readOnly size="small" />
                      <Typography variant="body2">{review.date}</Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {review.excerpt}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', marginBottom: '1rem' }}>
                      {review.tags.map((tag, index) => (
                        <Chip key={index} label={tag} size="small" />
                      ))}
                    </Box>
                    <Button variant="text" color="primary" sx={{ fontWeight: 500 }}>
                      Read More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Write Review Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Write Your Review
          </Typography>
          <Card sx={{ maxWidth: '600px', margin: '0 auto', padding: '3rem' }}>
            <Box component="form" sx={{ marginTop: '2rem' }}>
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <InputLabel>Select Anime</InputLabel>
                <Select
                  value={selectedAnime}
                  label="Select Anime"
                  onChange={(e) => setSelectedAnime(e.target.value)}
                >
                  {animeList.map((anime) => (
                    <MenuItem key={anime} value={anime}>
                      {anime}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ marginBottom: 2 }}>
                <Typography variant="body1" sx={{ marginBottom: 1 }}>
                  Rating
                </Typography>
                <Rating
                  size="large"
                  icon={<Star fontSize="inherit" />}
                  emptyIcon={<StarBorder fontSize="inherit" />}
                />
              </Box>
              <TextField
                fullWidth
                multiline
                rows={6}
                label="Your Review"
                placeholder="Share your thoughts about this anime..."
                sx={{ marginBottom: 2 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ py: 1.5 }}
              >
                Submit Review
              </Button>
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  );
};

export default Reviews;
