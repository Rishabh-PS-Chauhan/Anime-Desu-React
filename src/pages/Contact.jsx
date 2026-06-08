import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextareaAutosize,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  Schedule,
  Send,
} from '@mui/icons-material';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Email sx={{ fontSize: '2rem', color: '#e63946' }} />,
      title: 'Email Us',
      details: ['info@anime-desu.com', 'support@anime-desu.com'],
    },
    {
      icon: <Phone sx={{ fontSize: '2rem', color: '#e63946' }} />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    },
    {
      icon: <LocationOn sx={{ fontSize: '2rem', color: '#e63946' }} />,
      title: 'Visit Us',
      details: ['123 Anime Street', 'Tokyo, Japan 100-0001'],
    },
    {
      icon: <Schedule sx={{ fontSize: '2rem', color: '#e63946' }} />,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat - Sun: 10:00 AM - 4:00 PM'],
    },
  ];

  const subjects = [
    'General Inquiry',
    'Technical Support',
    'Content Suggestion',
    'Partnership Opportunity',
    'Bug Report',
    'Feature Request',
    'Other',
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
            Contact Us
          </Typography>
          <Typography variant="body1" sx={{ color: 'white', fontSize: '1.6rem' }}>
            We'd love to hear from you! Get in touch with our team for any questions or feedback.
          </Typography>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#f7f7f7' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Contact Information */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', padding: '2rem' }}>
                <Typography variant="h2" sx={{ marginBottom: '2rem', color: '#333' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.6rem' }}>
                  Have a question, suggestion, or just want to say hello? We're here to help! 
                  Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
                </Typography>
                
                <Box sx={{ marginBottom: '3rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, marginBottom: '1rem' }}>
                    <Email sx={{ color: '#e63946', marginTop: '0.5rem' }} />
                    <Box>
                      <Typography variant="h3" sx={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                        Email Us
                      </Typography>
                      <Typography variant="body1" sx={{ paddingTop: '1rem', fontSize: '1.6rem' }}>
                        info@anime-desu.com
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.6rem' }}>
                        support@anime-desu.com
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginBottom: '3rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, marginBottom: '1rem' }}>
                    <Phone sx={{ color: '#e63946', marginTop: '0.5rem' }} />
                    <Box>
                      <Typography variant="h3" sx={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                        Call Us
                      </Typography>
                      <Typography variant="body1" sx={{ paddingTop: '1rem', fontSize: '1.6rem' }}>
                        +1 (555) 123-4567
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.6rem' }}>
                        +1 (555) 987-6543
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginBottom: '3rem' }}>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, marginBottom: '1rem' }}>
                    <LocationOn sx={{ color: '#e63946', marginTop: '0.5rem' }} />
                    <Box>
                      <Typography variant="h3" sx={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                        Visit Us
                      </Typography>
                      <Typography variant="body1" sx={{ paddingTop: '1rem', fontSize: '1.6rem' }}>
                        123 Anime Street
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.6rem' }}>
                        Tokyo, Japan 100-0001
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box>
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, marginBottom: '1rem' }}>
                    <Schedule sx={{ color: '#e63946', marginTop: '0.5rem' }} />
                    <Box>
                      <Typography variant="h3" sx={{ display: 'inline-block', marginBottom: '0.5rem' }}>
                        Business Hours
                      </Typography>
                      <Typography variant="body1" sx={{ paddingTop: '1rem', fontSize: '1.6rem' }}>
                        Mon - Fri: 9:00 AM - 6:00 PM
                      </Typography>
                      <Typography variant="body1" sx={{ fontSize: '1.6rem' }}>
                        Sat - Sun: 10:00 AM - 4:00 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                <Box sx={{ marginTop: '3rem' }}>
                  <Box
                    component="img"
                    src="/img/Itachi.jpg"
                    alt="Office"
                    sx={{
                      maxWidth: '100%',
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                      marginTop: '2rem',
                    }}
                  />
                </Box>
              </Card>
            </Grid>

            {/* Contact Form */}
            <Grid item xs={12} md={6}>
              <Card sx={{ height: '100%', padding: '2rem' }}>
                <Typography variant="h2" sx={{ marginBottom: '2rem', color: '#333' }}>
                  Send us a Message
                </Typography>
                <Box component="form" onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    sx={{ marginBottom: '1.2rem' }}
                    InputProps={{
                      sx: { fontSize: '1.6rem' },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: '1.6rem' },
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    sx={{ marginBottom: '1.2rem' }}
                    InputProps={{
                      sx: { fontSize: '1.6rem' },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: '1.6rem' },
                    }}
                  />
                  
                  <FormControl fullWidth sx={{ marginBottom: '1.2rem' }}>
                    <InputLabel sx={{ fontSize: '1.6rem' }}>Subject</InputLabel>
                    <Select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      sx={{ fontSize: '1.6rem' }}
                    >
                      {subjects.map((subject) => (
                        <MenuItem key={subject} value={subject} sx={{ fontSize: '1.6rem' }}>
                          {subject}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  
                  <TextField
                    fullWidth
                    multiline
                    rows={6}
                    label="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    sx={{ marginBottom: '2rem' }}
                    InputProps={{
                      sx: { fontSize: '1.6rem' },
                    }}
                    InputLabelProps={{
                      sx: { fontSize: '1.6rem' },
                    }}
                  />
                  
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    startIcon={<Send />}
                    sx={{
                      py: 1.5,
                      fontSize: '1.8rem',
                      textTransform: 'uppercase',
                      fontWeight: 600,
                    }}
                  >
                    Send Message
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ padding: '5rem 0', backgroundColor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ textAlign: 'center', marginBottom: '3rem', color: '#333' }}>
            Frequently Asked Questions
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Card sx={{ padding: '2rem', height: '100%' }}>
                <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                  How do I add anime to my watchlist?
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.6rem' }}>
                  Simply navigate to any anime page and click the "Add to List" button. 
                  You can organize your anime into different lists like "Watching", "Completed", "Plan to Watch", etc.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ padding: '2rem', height: '100%' }}>
                <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                  Can I contribute to the anime database?
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.6rem' }}>
                  Yes! We welcome community contributions. You can submit new anime entries, 
                  edit existing information, or upload fan art through our community section.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ padding: '2rem', height: '100%' }}>
                <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                  How do I report inappropriate content?
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.6rem' }}>
                  Use the "Report" button on any content, or contact our moderation team directly. 
                  We take content moderation seriously and respond quickly to reports.
                </Typography>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ padding: '2rem', height: '100%' }}>
                <Typography variant="h3" sx={{ marginBottom: '1rem', color: '#333' }}>
                  Is Anime-Desu free to use?
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.6, fontSize: '1.6rem' }}>
                  Yes! Anime-Desu is completely free to use. We're supported by our community 
                  and optional premium features, but all core functionality is available at no cost.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Contact;
