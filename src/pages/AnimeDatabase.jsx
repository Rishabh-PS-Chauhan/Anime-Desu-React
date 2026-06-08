import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  InputAdornment,
} from '@mui/material';
import { Search, PlayArrow, Add } from '@mui/icons-material';

const AnimeDatabase = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const genres = [
    { key: 'all', label: 'All' },
    { key: 'action', label: 'Action' },
    { key: 'romance', label: 'Romance' },
    { key: 'comedy', label: 'Comedy' },
    { key: 'drama', label: 'Drama' },
    { key: 'fantasy', label: 'Fantasy' },
    { key: 'sci-fi', label: 'Sci-Fi' },
  ];

  const animeData = [
    {
      id: 1,
      title: 'Attack on Titan',
      genre: 'action',
      genres: ['Action', 'Drama', 'Fantasy'],
      rating: 9.2,
      stars: '★★★★★',
      description: 'Humanity fights for survival against giant humanoid Titans.',
      image: '/img/60fbd504b57bb226d209d141deccad41.jpg',
    },
    {
      id: 2,
      title: 'Your Name',
      genre: 'romance',
      genres: ['Romance', 'Drama', 'Supernatural'],
      rating: 8.9,
      stars: '★★★★★',
      description: 'Two teenagers share a profound, magical connection.',
      image: '/img/1337462.png',
    },
    {
      id: 3,
      title: 'One Punch Man',
      genre: 'comedy',
      genres: ['Comedy', 'Action', 'Superhero'],
      rating: 8.7,
      stars: '★★★★☆',
      description: 'A hero who can defeat any opponent with a single punch.',
      image: '/img/4b798dfb3a301f391fe62994e89edd98.jpg',
    },
    {
      id: 4,
      title: 'Death Note',
      genre: 'drama',
      genres: ['Drama', 'Thriller', 'Supernatural'],
      rating: 9.0,
      stars: '★★★★★',
      description: 'A high school student discovers a supernatural notebook.',
      image: '/img/28e08aea9bbeaa658aaeaa4c2340d444.jpg',
    },
    {
      id: 5,
      title: 'Demon Slayer',
      genre: 'fantasy',
      genres: ['Fantasy', 'Action', 'Supernatural'],
      rating: 8.8,
      stars: '★★★★★',
      description: 'A young boy becomes a demon slayer to save his sister.',
      image: '/img/Our Last Hope_3840x2160.jpg',
    },
    {
      id: 6,
      title: 'Steins;Gate',
      genre: 'sci-fi',
      genres: ['Sci-Fi', 'Thriller', 'Drama'],
      rating: 9.1,
      stars: '★★★★★',
      description: 'A group of friends accidentally create a time machine.',
      image: '/img/Soar in Solitude_3840x2160.jpg',
    },
  ];

  const filteredAnime = animeData.filter((anime) => {
    const matchesSearch = anime.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         anime.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         anime.genres.some(genre => genre.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesGenre = selectedGenre === 'all' || anime.genre === selectedGenre;
    return matchesSearch && matchesGenre;
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
            Anime Database
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.6rem' }}>
            Discover thousands of anime series and movies. Find your next obsession!
          </Typography>
        </Container>
      </Box>

      {/* Search and Filters */}
      <Box sx={{ padding: '3rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <TextField
              placeholder="Search anime..."
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
                endAdornment: (
                  <InputAdornment position="end">
                    <Button variant="contained" size="small">
                      Search
                    </Button>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, flexWrap: 'wrap' }}>
            {genres.map((genre) => (
              <Chip
                key={genre.key}
                label={genre.label}
                onClick={() => setSelectedGenre(genre.key)}
                variant={selectedGenre === genre.key ? 'filled' : 'outlined'}
                color={selectedGenre === genre.key ? 'primary' : 'default'}
                sx={{
                  fontWeight: selectedGenre === genre.key ? 'bold' : 'normal',
                  '&:hover': {
                    backgroundColor: selectedGenre === genre.key ? 'primary.main' : 'primary.light',
                    color: 'white',
                  },
                }}
              />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Anime Grid */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {filteredAnime.map((anime) => (
              <Grid item xs={12} sm={6} md={4} key={anime.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover .anime-overlay': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box sx={{ position: 'relative', height: '250px' }}>
                    <CardMedia
                      component="img"
                      image={anime.image}
                      alt={anime.title}
                      sx={{
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.3s ease',
                      }}
                    />
                    <Box
                      className="anime-overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0, 0, 0, 0.7)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<PlayArrow />}
                        sx={{ backgroundColor: 'primary.main' }}
                      >
                        Watch Now
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<Add />}
                        sx={{ borderColor: 'white', color: 'white' }}
                      >
                        Add to List
                      </Button>
                    </Box>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                      {anime.title}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, marginBottom: 0.5 }}>
                      <Typography sx={{ color: '#ffc107' }}>{anime.stars}</Typography>
                      <Typography sx={{ fontWeight: 'bold', color: '#e63946' }}>
                        {anime.rating}
                      </Typography>
                    </Box>
                    <Typography variant="body2" sx={{ color: '#666', marginBottom: '1rem' }}>
                      {anime.genres.join(', ')}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#777', lineHeight: 1.5 }}>
                      {anime.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default AnimeDatabase;
