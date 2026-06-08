import React from 'react';
import { Box, Typography, IconButton, Link } from '@mui/material';
import {
  Facebook,
  Instagram,
  YouTube,
  LinkedIn,
  Twitter,
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Facebook',
      icon: <Facebook />,
      url: 'https://www.facebook.com/The.Anime.Geeks/',
      color: 'blue',
    },
    {
      name: 'Instagram',
      icon: <Instagram />,
      url: 'https://www.instagram.com/1animegeek/',
      color: '#e63946',
    },
    {
      name: 'YouTube',
      icon: <YouTube />,
      url: 'https://www.youtube.com/@animegeek2016',
      color: '#e63946',
    },
    {
      name: 'LinkedIn',
      icon: <LinkedIn />,
      url: 'https://www.linkedin.com/in/rishabh-chauhan-om/',
      color: 'blue',
    },
    {
      name: 'Twitter',
      icon: <Twitter />,
      url: 'https://x.com/Rishabh35537968',
      color: 'blue',
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(109.6deg, rgba(36,45,57,1) 11.2%, rgba(16,37,60,1) 51.2%, rgba(0,0,0,1) 98.6%)',
        textAlign: 'center',
        padding: '3.5rem',
        color: 'white',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 2 }}>
        {socialLinks.map((social) => (
          <IconButton
            key={social.name}
            component={Link}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: 'white',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              padding: '1rem',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-3px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: social.color,
              },
              '& .MuiSvgIcon-root': {
                fontSize: '3rem',
              },
            }}
          >
            {social.icon}
          </IconButton>
        ))}
      </Box>
      <Typography variant="body1" sx={{ margin: 0 }}>
        Anime-Desu &copy; 2025, All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
