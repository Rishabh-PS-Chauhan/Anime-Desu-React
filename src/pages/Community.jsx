import React from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  Button,
  Chip,
} from '@mui/material';
import {
  Groups,
  Forum,
  Favorite,
  CalendarToday,
  Comment,
  Palette,
  Event,
  Star,
} from '@mui/icons-material';

const Community = () => {
  const stats = [
    {
      icon: <Groups sx={{ fontSize: '3rem', color: '#e63946' }} />,
      number: '25,000+',
      label: 'Active Members',
    },
    {
      icon: <Forum sx={{ fontSize: '3rem', color: '#e63946' }} />,
      number: '50,000+',
      label: 'Discussions',
    },
    {
      icon: <Favorite sx={{ fontSize: '3rem', color: '#e63946' }} />,
      number: '100,000+',
      label: 'Posts & Comments',
    },
    {
      icon: <CalendarToday sx={{ fontSize: '3rem', color: '#e63946' }} />,
      number: '500+',
      label: 'Events Hosted',
    },
  ];

  const features = [
    {
      icon: <Comment sx={{ fontSize: '2rem' }} />,
      title: 'Discussion Forums',
      description: 'Join conversations about your favorite anime series, characters, and storylines. Share theories, ask questions, and connect with like-minded fans.',
      buttonText: 'Join Discussion',
    },
    {
      icon: <Palette sx={{ fontSize: '2rem' }} />,
      title: 'Fan Art Gallery',
      description: 'Showcase your creativity! Share your anime fan art, cosplay photos, and AMVs with the community. Get feedback and inspiration from fellow artists.',
      buttonText: 'View Gallery',
    },
    {
      icon: <Event sx={{ fontSize: '2rem' }} />,
      title: 'Community Events',
      description: 'Participate in watch parties, cosplay contests, art challenges, and virtual meetups. Make new friends and celebrate your shared love for anime!',
      buttonText: 'View Events',
    },
    {
      icon: <Star sx={{ fontSize: '2rem' }} />,
      title: 'Recommendations',
      description: 'Get personalized anime recommendations based on your preferences. Share your favorites and help others discover their next obsession!',
      buttonText: 'Get Recommendations',
    },
  ];

  const activities = [
    {
      avatar: '/img/Itachi.jpg',
      username: 'AnimeFan2024',
      content: 'Just finished watching Attack on Titan and I\'m still processing that ending! What did you all think?',
      time: '2 hours ago',
    },
    {
      avatar: '/img/Itachi.jpg',
      username: 'CosplayQueen',
      content: 'Check out my latest Demon Slayer cosplay! Spent 3 months working on the costume details.',
      time: '5 hours ago',
    },
    {
      avatar: '/img/Itachi.jpg',
      username: 'AnimeCritic',
      content: 'New review up for Your Name - this movie never fails to make me cry. 10/10 masterpiece!',
      time: '1 day ago',
    },
    {
      avatar: '/img/Itachi.jpg',
      username: 'MangaReader',
      content: 'Anyone else excited for the new One Piece chapter? The theories are getting wild!',
      time: '2 days ago',
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
            Join Our Community
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.6rem' }}>
            Connect with fellow anime enthusiasts, share your passion, and discover new favorites together!
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {stats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ textAlign: 'center', padding: '2rem' }}>
                  <Box sx={{ marginBottom: '1rem' }}>{stat.icon}</Box>
                  <Typography variant="h3" sx={{ color: '#e63946', margin: '1rem 0' }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 700, color: '#555555' }}>
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
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card
                  sx={{
                    textAlign: 'center',
                    padding: '2rem',
                    backgroundColor: '#f8f9fa',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                  }}
                >
                  <Box>
                    <Box sx={{ marginBottom: '1.5rem', color: '#e63946' }}>
                      {feature.icon}
                    </Box>
                    <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                      {feature.description}
                    </Typography>
                  </Box>
                  <Button variant="outlined" sx={{ alignSelf: 'center', mt: 2 }}>
                    {feature.buttonText}
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Recent Activity */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f8f9fa' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Recent Community Activity
          </Typography>
          <Box sx={{ maxWidth: '800px', margin: '0 auto' }}>
            {activities.map((activity, index) => (
              <Card key={index} sx={{ marginBottom: '1rem', padding: '1.5rem' }}>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Avatar
                    src={activity.avatar}
                    alt={activity.username}
                    sx={{ width: 50, height: 50, flexShrink: 0 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="h4" sx={{ marginBottom: '0.5rem', color: '#333' }}>
                      {activity.username}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: '0.5rem', lineHeight: 1.6 }}>
                      {activity.content}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', fontSize: '1.4rem' }}>
                      {activity.time}
                    </Typography>
                  </Box>
                </Box>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Join Community CTA */}
      <Box
        sx={{
          padding: '5rem 0',
          background: 'linear-gradient(135deg, #e63946, #d62828)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ color: 'white', marginBottom: '1rem' }}>
            Ready to Join Our Community?
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', marginBottom: '2rem', fontSize: '1.6rem' }}>
            Create your account today and start connecting with fellow anime fans from around the world!
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
              Sign Up Now
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
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Community;
