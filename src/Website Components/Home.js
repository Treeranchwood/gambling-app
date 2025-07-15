import {useState, useContext} from 'react'; // useState and useContext might not be needed if useNavigate is the only hook
import NavigationContext from '../Contexts/NavigationContext.js'; // Might not be directly needed in Home if useNavigate handles it
import Button from '@mui/material/Button';
import useNavigate from '../Hooks/useNavigate.js' // Import your custom hook
import React from 'react';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import { Stack } from '@mui/material'; // Import Stack for layout

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
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default', // Use Material-UI theme background
      fontFamily: 'Inter, sans-serif', // Ensure font is applied
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center', // Center content vertically
      alignItems: 'center', // Center content horizontally
      p: 4, // Add some padding around the content
    }}>
      {/* Material-UI CDN for styling and Roboto font */}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      <script src="https://unpkg.com/@mui/material@latest/umd/material-ui.production.min.js"></script>
      <script src="https://unpkg.com/@emotion/react@latest/umd/emotion-react.production.min.js"></script>
      <script src="https://unpkg.com/@emotion/styled@latest/umd/emotion-styled.production.min.js"></script>
      <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@mui/icons-material@latest/umd/material-ui-icons.production.min.js"></script>

      <Container maxWidth="lg" sx={{ textAlign: 'center', py: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          Welcome to Your Journey to Recovery
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 6, maxWidth: '800px', mx: 'auto' }}>
          This app is designed to support you in overcoming gambling challenges. Use the navigation below to plan your week, set meaningful goals, and reflect on your progress through journaling.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {/* Navigation Card for Weekly Planner */}
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
                  Organize your week and schedule activities to support your recovery.
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
                  Set and track your personal recovery goals.
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
              onClick={() => navigate("WeeklyPlanner")} // Use the navigate function from the custom hook
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
    </Box>
  );
};

export default Home;