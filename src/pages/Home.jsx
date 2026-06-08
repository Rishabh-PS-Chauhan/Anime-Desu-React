import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControlLabel,
  Checkbox,
  Divider,
} from '@mui/material';
import {
  CloudUpload,
  Download,
  Person,
  Visibility,
  VisibilityOff,
  Google,
  Facebook,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Home = () => {
  const [loginOpen, setLoginOpen] = useState(false);
  const [signupOpen, setSignupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);

  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const handleSignupOpen = () => setSignupOpen(true);
  const handleSignupClose = () => setSignupOpen(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login submitted');
    handleLoginClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup submitted');
    handleSignupClose();
  };

  const features = [
    {
      icon: <CloudUpload sx={{ fontSize: '2.5rem' }} />,
      title: 'UPLOAD',
      description: 'Share your personal collection - anime not available on our website, fan art, AMVs, cosplay photos, or anime-related creations! Supported formats: JPG, PNG, MP4, and GIF. Max file size: 50MB. Please ensure your content follows our community guidelines!',
      link: '/community',
      color: 'linear-gradient(109.6deg, rgba(36,45,57,1) 11.2%, rgba(16,37,60,1) 51.2%, rgba(0,0,0,1) 98.6%)',
    },
    {
      icon: <Download sx={{ fontSize: '2.5rem' }} />,
      title: 'DOWNLOAD',
      description: 'Click the button above to download your selected anime file, whether it\'s fan art, AMVs, wallpapers, or cosplay photos. All files are safe and free for personal use. Please credit the original creator if you share or repost their work!',
      link: '/anime-database',
      color: 'radial-gradient(circle 986.6px at 10% 20%, rgba(251,6,6,0.94) 0%, rgba(3,31,213,1) 82.8%, rgba(248,101,248,1) 87.9%)',
    },
    {
      icon: <Person sx={{ fontSize: '2.5rem', color: '#e63946' }} />,
      title: 'LOGIN',
      description: 'Log in to dive back into your watchlist, fan collections, and community forums. Enter your username or email and password to continue your anime journey. New to the site? Join our anime world and create your free account!',
      link: '#',
      color: 'linear-gradient(109.6deg, rgba(36,45,57,1) 11.2%, rgba(16,37,60,1) 51.2%, rgba(0,0,0,1) 98.6%)',
      onClick: handleLoginOpen,
    },
  ];

  const showcaseItems = [
    {
      image: '/img/60fbd504b57bb226d209d141deccad41.jpg',
      title: 'Anime Database',
      description: 'Watch, Download or Share. Here you can find a wide array of titles just begging to be found by You. Explore the anime and movies that your heart desires !',
      link: '/anime-database',
    },
    {
      image: '/img/1337462.png',
      title: 'Anime-Desu Community',
      description: 'Join spirited conversations about the latest episodes, timeless classics, and hidden gems. Share your favorite moments, debate character arcs, or dive into manga side-stories. From shonen showdowns to slice-of-life serenity, there\'s a space here for every genre and every fan. Be a part of our ever growing family !',
      link: '/community',
    },
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          height: '100vh',
          background: 'linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(/img/wallpapersden.com_76057-3840x2160.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              textAlign: 'center',
              background: 'linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))',
              padding: '2rem',
              borderRadius: '1rem',
              backdropFilter: 'blur(5px)',
              maxWidth: '80%',
              margin: '0 auto',
            }}
          >
            <Typography
              variant="h1"
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                marginBottom: '1rem',
                background: 'linear-gradient(45deg, #ffffff, #e63946)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: '2.5rem',
              }}
            >
              explore the world of anime !
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: 'white',
                textTransform: 'uppercase',
                marginBottom: '2rem',
                fontSize: '1.6rem',
              }}
            >
              Discover and stream your favorite anime series and movies – from timeless classics to the latest releases. Join the community of anime lovers!
            </Typography>
            <Button
              component={Link}
              to="#showcase"
              variant="contained"
              sx={{
                backgroundColor: 'aliceblue',
                color: '#e63946',
                fontSize: '1.6rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#dddddd',
                },
              }}
            >
              Explore
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Showcase Section */}
      <Box id="showcase" sx={{ backgroundColor: '#dddddd', padding: '10rem 0' }}>
        <Container maxWidth="lg">
          {showcaseItems.map((item, index) => (
            <Card
              key={index}
              sx={{
                height: '400px',
                marginBottom: index === 0 ? '10rem' : '5rem',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: index === 1 ? 'row-reverse' : 'row',
              }}
            >
              <Box sx={{ width: '50%', height: '100%' }}>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>
              <Box
                sx={{
                  width: '50%',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h2" sx={{ marginBottom: '1rem' }}>
                  {item.title}
                </Typography>
                <Typography variant="body1" sx={{ marginBottom: '1rem', lineHeight: 1.7 }}>
                  {item.description}
                </Typography>
                <Button
                  component={Link}
                  to={item.link}
                  variant="outlined"
                  sx={{ alignSelf: 'center' }}
                >
                  {index === 0 ? 'Explore' : 'Join'}
                </Button>
              </Box>
            </Card>
          ))}
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ padding: '10rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={0}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  component={feature.onClick ? 'button' : Link}
                  to={feature.onClick ? undefined : feature.link}
                  onClick={feature.onClick}
                  sx={{
                    height: '300px',
                    background: feature.color,
                    color: index === 1 ? '#000000' : '#ffffff',
                    textAlign: 'center',
                    padding: '2.5rem 1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    border: 'none',
                    textDecoration: 'none',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                    },
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: '-100%',
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                      transition: 'left 0.5s',
                    },
                    '&:hover:before': {
                      left: '100%',
                    },
                  }}
                >
                  <Box sx={{ marginBottom: '1rem' }}>{feature.icon}</Box>
                  <Typography variant="h3" sx={{ marginBottom: '1rem' }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ lineHeight: 1.6, textAlign: 'center' }}>
                    {feature.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Login Modal */}
      <Dialog open={loginOpen} onClose={handleLoginClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: 700 }}>
          Welcome Back!
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              autoComplete="current-password"
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', my: 2 }}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button variant="text" color="primary">
                Forgot Password?
              </Button>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Sign In
            </Button>
            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="text.secondary">
                or
              </Typography>
            </Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<Google />}
                sx={{ py: 1 }}
              >
                Continue with Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<Facebook />}
                sx={{ py: 1 }}
              >
                Continue with Facebook
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Don't have an account?{' '}
                <Button variant="text" onClick={() => { handleLoginClose(); handleSignupOpen(); }}>
                  Sign up here
                </Button>
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>

      {/* Signup Modal */}
      <Dialog open={signupOpen} onClose={handleSignupClose} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: 'center', fontSize: '2.4rem', fontWeight: 700 }}>
          Join Anime-Desu!
        </DialogTitle>
        <DialogContent>
          <Box component="form" onSubmit={handleSignupSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="signup-email"
              label="Email Address"
              name="email"
              autoComplete="email"
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type={showSignupPassword ? 'text' : 'password'}
              id="signup-password"
              autoComplete="new-password"
              InputProps={{
                startAdornment: <Person sx={{ mr: 1, color: 'text.secondary' }} />,
                endAdornment: (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowSignupPassword(!showSignupPassword)}
                    edge="end"
                  >
                    {showSignupPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                ),
              }}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirm-password"
            />
            <FormControlLabel
              control={<Checkbox required color="primary" />}
              label={
                <Typography variant="body2">
                  I agree to the{' '}
                  <Button variant="text" size="small">
                    Terms of Service
                  </Button>{' '}
                  and{' '}
                  <Button variant="text" size="small">
                    Privacy Policy
                  </Button>
                </Typography>
              }
              sx={{ my: 2 }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, py: 1.5 }}
            >
              Create Account
            </Button>
            <Divider sx={{ my: 2 }}>
              <Typography variant="body2" color="text.secondary">
                or
              </Typography>
            </Divider>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Button
                variant="outlined"
                startIcon={<Google />}
                sx={{ py: 1 }}
              >
                Continue with Google
              </Button>
              <Button
                variant="outlined"
                startIcon={<Facebook />}
                sx={{ py: 1 }}
              >
                Continue with Facebook
              </Button>
            </Box>
            <Box sx={{ textAlign: 'center', mt: 2 }}>
              <Typography variant="body2">
                Already have an account?{' '}
                <Button variant="text" onClick={() => { handleSignupClose(); handleLoginOpen(); }}>
                  Sign in here
                </Button>
              </Typography>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Home;
