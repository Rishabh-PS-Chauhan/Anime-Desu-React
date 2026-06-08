import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Divider,
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

const About = () => {
  const stats = [
    { number: '10,000+', label: 'Anime Titles' },
    { number: '50,000+', label: 'Active Users' },
    { number: '1M+', label: 'Reviews Posted' },
    { number: '5+', label: 'Years Online' },
  ];

  const features = [
    'Extensive anime database with detailed information',
    'Community-driven reviews and ratings',
    'Personalized recommendations based on your preferences',
    'Fan art gallery and community forums',
    'Regular updates with latest anime releases',
    'Mobile-friendly responsive design',
    'Multiple language support',
    'Advanced search and filtering options',
  ];

  const teamMembers = [
    {
      name: 'Rishabh Chauhan',
      role: 'Founder & Lead Developer',
      description: 'Passionate anime enthusiast with 5+ years of experience in web development.',
    },
    {
      name: 'Anime Community',
      role: 'Content Contributors',
      description: 'Dedicated fans who help maintain and expand our anime database.',
    },
    {
      name: 'Global Moderators',
      role: 'Community Managers',
      description: 'Experienced moderators ensuring a positive community experience.',
    },
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
            About Anime-Desu
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.6rem' }}>
            Your ultimate destination for discovering, exploring, and connecting with the world of anime!
          </Typography>
        </Container>
      </Box>

      {/* Mission Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ marginBottom: '2rem', color: '#333' }}>
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.6rem' }}>
                At Anime-Desu, we believe that anime is more than just entertainment – it's a gateway to new worlds, 
                emotions, and experiences. Our mission is to create a comprehensive platform where anime fans can 
                discover new series, share their passion, and connect with like-minded individuals from around the globe.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.6rem' }}>
                We strive to provide accurate information, honest reviews, and a welcoming community that celebrates 
                the diversity and creativity of Japanese animation. Whether you're a seasoned otaku or just starting 
                your anime journey, Anime-Desu is here to guide and inspire you.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: 'linear-gradient(135deg, #e63946, #d62828)',
                  borderRadius: '1rem',
                  padding: '3rem',
                  color: 'white',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                  Join Our Community
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '2rem', fontSize: '1.6rem' }}>
                  Be part of a growing community of anime enthusiasts who share your passion for Japanese animation.
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                  Start Your Anime Journey Today!
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            By the Numbers
          </Typography>
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', padding: '2rem' }}>
                  <Typography variant="h3" sx={{ color: '#e63946', marginBottom: '0.5rem', fontWeight: 700 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: '#555555', fontSize: '1.8rem' }}>
                    {stat.label}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ marginBottom: '2rem', color: '#333' }}>
                What We Offer
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} sx={{ paddingLeft: 0 }}>
                    <CheckCircle sx={{ color: '#e63946', marginRight: '1rem' }} />
                    <ListItemText
                      primary={feature}
                      primaryTypographyProps={{
                        fontSize: '1.6rem',
                        lineHeight: 1.6,
                      }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  background: 'linear-gradient(109.6deg, rgba(36,45,57,1) 11.2%, rgba(16,37,60,1) 51.2%, rgba(0,0,0,1) 98.6%)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  color: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                  Our Values
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: '1rem', fontSize: '1.6rem' }}>
                  <strong>Passion:</strong> We're driven by our love for anime and commitment to the community.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: '1rem', fontSize: '1.6rem' }}>
                  <strong>Quality:</strong> We maintain high standards in everything we do, from content to user experience.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: '1rem', fontSize: '1.6rem' }}>
                  <strong>Community:</strong> We believe in fostering a welcoming and inclusive environment for all fans.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, fontSize: '1.6rem' }}>
                  <strong>Innovation:</strong> We continuously improve and evolve to better serve our community.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Team Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Meet Our Team
          </Typography>
          <Grid container spacing={3}>
            {teamMembers.map((member, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card sx={{ height: '100%', padding: '2rem', textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                    {member.name}
                  </Typography>
                  <Typography variant="h4" sx={{ marginBottom: '1rem', color: '#e63946' }}>
                    {member.role}
                  </Typography>
                  <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                    {member.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Contact CTA */}
      <Box
        sx={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #e63946, #d62828)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ color: 'white', marginBottom: '1rem' }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: '2rem', fontSize: '1.6rem' }}>
            Have questions, suggestions, or want to collaborate? We'd love to hear from you!
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
              Contact Us
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Join Our Team
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default About;
