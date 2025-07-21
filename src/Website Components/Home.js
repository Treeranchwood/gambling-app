import useNavigate from '../Hooks/useNavigate.js' // Import your custom hook
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  EmojiEvents as GoalsIcon,
  Book as JournalIcon,
} from '@mui/icons-material';

    const Home = () => {
    const navigate = useNavigate(); // Use the custom hook to get the navigate function
    return (
    <Container sx={{
      minHeight: '100vh',
      bgcolor: 'background.default', // Use Material-UI theme background
      fontFamily: 'Inter, sans-serif', // Ensure font is applied
      display: 'flex',
      flexDirection: 'column',
      pt: 2,  // Reduced top padding
      px: 4,  // Keep horizontal padding
    }}>
     

      <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          this app is designed to help you to quit gambling
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 6, maxWidth: '800px', mx: 'auto' }}>
          WOOOHOOOOOO!!!
        </Typography>
        <Grid container spacing={4} justifyContent="center">

          <Grid item xs={12} sm={6} md={4}>
            <div>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-5px)',
                  cursor: 'pointer',
                },
              }}
              onClick={() => navigate('WeeklyPlanner') } // Use the navigate function from the custom hook
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <CalendarIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Weekly Planner
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Organize your week
                </Typography>
              </CardContent>
            </Card>
            </div>
          </Grid>

          {/* Navigation Card for Goals Section */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-5px)',
                  cursor: 'pointer',
                },
              }}
              onClick={() => navigate('Goals')} // Use the navigate function from the custom hook
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <GoalsIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Goals
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Set your own goals
                </Typography>
              </CardContent>
            </Card>
            </div>
          </Grid>

          {/* Navigation Card for Journaling Section */}
          <Grid item xs={12} sm={6} md={4}>
            <div>
            <Card
              variant="outlined"
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                transition: '0.3s',
                '&:hover': {
                  boxShadow: 6,
                  transform: 'translateY(-5px)',
                  cursor: 'pointer',
                },
              }}
              onClick={() => navigate("Grattitude")} // Use the navigate function from the custom hook
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <JournalIcon sx={{ fontSize: 80, color: 'secondary.main', mb: 2 }} />
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Journaling
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Reflect on your thoughts and feelings, and track your progress.
                </Typography>
              </CardContent>
            </Card>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Home;