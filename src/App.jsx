import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AnimeDatabase from './pages/AnimeDatabase';
import Community from './pages/Community';
import Reviews from './pages/Reviews';
import News from './pages/News';
import About from './pages/About';
import Contact from './pages/Contact';

// Create Material-UI theme that matches the original design
const theme = createTheme({
  palette: {
    primary: {
      main: '#e63946', // Red color from original design
      light: '#fcf3f2',
      dark: '#d62828',
    },
    secondary: {
      main: '#ffffff',
      dark: '#dddddd',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#333333',
      secondary: '#555555',
    },
  },
  typography: {
    fontFamily: '"Montserrat", sans-serif',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.8rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.6rem',
      lineHeight: 1.6,
      letterSpacing: '0.15em',
    },
    body2: {
      fontSize: '1.4rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          fontWeight: 500,
          borderRadius: '10rem',
          padding: '0.5em 1.5em',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          },
        },
        contained: {
          backgroundColor: '#e63946',
          color: 'white',
          '&:hover': {
            backgroundColor: '#d62828',
          },
        },
        outlined: {
          borderColor: '#e63946',
          color: '#e63946',
          '&:hover': {
            backgroundColor: '#fcf3f2',
            borderColor: '#e63946',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '1rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/anime-database" element={<AnimeDatabase />} />
              <Route path="/community" element={<Community />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/news" element={<News />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
