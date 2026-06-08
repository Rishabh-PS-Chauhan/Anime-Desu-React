import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material';
import { Search, CalendarToday, Person } from '@mui/icons-material';

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { key: 'all', label: 'All News' },
    { key: 'announcements', label: 'Announcements' },
    { key: 'releases', label: 'New Releases' },
    { key: 'industry', label: 'Industry News' },
    { key: 'events', label: 'Events' },
  ];

  const featuredArticle = {
    id: 1,
    title: 'Attack on Titan Final Season Part 3 Gets Release Date',
    category: 'announcements',
    image: '/img/60fbd504b57bb226d209d141deccad41.jpg',
    author: 'AnimeNews',
    date: '2 days ago',
    excerpt: 'The highly anticipated final season of Attack on Titan has finally received its release date. Fans can expect the conclusion to this epic saga in Spring 2024.',
    content: 'After months of speculation and anticipation, MAPPA Studio has officially announced the release date for Attack on Titan Final Season Part 3. The final installment of this groundbreaking anime series will premiere in Spring 2024, bringing an end to one of the most influential anime of the decade.',
  };

  const newsArticles = [
    {
      id: 2,
      title: 'New Demon Slayer Movie Announced for 2024',
      category: 'announcements',
      image: '/img/Our Last Hope_3840x2160.jpg',
      author: 'AnimeReporter',
      date: '1 day ago',
      excerpt: 'Ufotable announces a new Demon Slayer movie focusing on the Hashira training arc.',
    },
    {
      id: 3,
      title: 'Crunchyroll Acquires Rights to Popular Manga Series',
      category: 'industry',
      image: '/img/1337462.png',
      author: 'IndustryInsider',
      date: '3 days ago',
      excerpt: 'The streaming giant expands its library with several highly anticipated manga adaptations.',
    },
    {
      id: 4,
      title: 'Anime Expo 2024 Announces Special Guests',
      category: 'events',
      image: '/img/4b798dfb3a301f391fe62994e89edd98.jpg',
      author: 'EventCoordinator',
      date: '5 days ago',
      excerpt: 'Voice actors and creators from popular anime series will be attending the convention.',
    },
    {
      id: 5,
      title: 'Studio Ghibli Announces New Film Project',
      category: 'announcements',
      image: '/img/28e08aea9bbeaa658aaeaa4c2340d444.jpg',
      author: 'GhibliNews',
      date: '1 week ago',
      excerpt: 'The legendary animation studio reveals details about their upcoming feature film.',
    },
    {
      id: 6,
      title: 'One Piece Reaches 1000 Episode Milestone',
      category: 'releases',
      image: '/img/wp5924564-one-piece-anime-4k-wallpapers.jpg',
      author: 'MangaWeekly',
      date: '1 week ago',
      excerpt: 'The longest-running anime series celebrates this incredible achievement with special episodes.',
    },
  ];

  const filteredArticles = newsArticles.filter((article) => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            Anime News
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.6rem' }}>
            Stay updated with the latest news, announcements, and industry updates from the anime world!
          </Typography>
        </Container>
      </Box>

      {/* Search and Categories */}
      <Box sx={{ padding: '3rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <TextField
              placeholder="Search news..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{
                maxWidth: '500px',
                width: '100%',
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <Chip
                key={category.key}
                label={category.label}
                onClick={() => setSelectedCategory(category.key)}
                variant={selectedCategory === category.key ? 'filled' : 'outlined'}
                color={selectedCategory === category.key ? 'primary' : 'default'}
                sx={{
                  fontWeight: selectedCategory === category.key ? 'bold' : 'normal',
                  '&:hover': {
                    backgroundColor: selectedCategory === category.key ? 'primary.main' : 'primary.light',
                    color: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Featured Article */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Featured Article
          </Typography>
          <Card sx={{ maxWidth: '100%', margin: '0 auto' }}>
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box sx={{ position: 'relative', height: '300px' }}>
                  <CardMedia
                    component="img"
                    image={featuredArticle.image}
                    alt={featuredArticle.title}
                    sx={{ height: '100%', objectFit: 'cover' }}
                  />
                  <Chip
                    label={featuredArticle.category.charAt(0).toUpperCase() + featuredArticle.category.slice(1)}
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
                  <Box sx={{ display: 'flex', gap: 1, marginBottom: '1rem', fontSize: '1.4rem', color: '#666' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <Person fontSize="small" />
                      <Typography variant="body2">{featuredArticle.author}</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                      <CalendarToday fontSize="small" />
                      <Typography variant="body2">{featuredArticle.date}</Typography>
                    </Box>
                  </Box>
                  <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                    {featuredArticle.title}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {featuredArticle.excerpt}
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, marginBottom: '2rem' }}>
                    {featuredArticle.content}
                  </Typography>
                  <Button variant="contained">
                    Read Full Article
                  </Button>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>

      {/* News Grid */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Latest News
          </Typography>
          <Grid container spacing={3}>
            {filteredArticles.map((article) => (
              <Grid item xs={12} md={6} key={article.id}>
                <Card sx={{ height: '100%', display: 'flex', gap: 2, padding: '1.5rem' }}>
                  <Box sx={{ width: '200px', height: '120px', flexShrink: 0 }}>
                    <CardMedia
                      component="img"
                      image={article.image}
                      alt={article.title}
                      sx={{ height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
                    />
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                      {article.title}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, marginBottom: '1rem', fontSize: '1.4rem', color: '#666' }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Person fontSize="small" />
                        <Typography variant="body2">{article.author}</Typography>
                      </Box>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <CalendarToday fontSize="small" />
                        <Typography variant="body2">{article.date}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {article.excerpt}
                    </Typography>
                    <Chip
                      label={article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      size="small"
                      color="primary"
                    />
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Newsletter Signup */}
      <Box
        sx={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #e63946, #d62828)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ color: 'white', marginBottom: '1rem' }}>
            Stay Updated
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: '2rem', fontSize: '1.6rem' }}>
            Subscribe to our newsletter and never miss the latest anime news and updates!
          </Typography>
          <Box sx={{ display: 'flex', maxWidth: '400px', margin: '2rem auto 0', gap: 1 }}>
            <TextField
              placeholder="Enter your email"
              variant="outlined"
              sx={{
                flexGrow: 1,
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: '#e63946',
                '&:hover': {
                  backgroundColor: '#dddddd',
                },
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default News;
