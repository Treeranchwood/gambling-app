import useNavigate from '../Hooks/useNavigate.js'
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {  Container,  Typography,  Grid,  Card,  CardContent,} from '@mui/material';

// Import Mui x Datepicker items
import {
  CalendarToday as CalendarIcon,
  EmojiEvents as GoalsIcon,
  Book as JournalIcon,
} from '@mui/icons-material';

    // function that returns the Home Page
    const Home = () => {
    
    // hook to navigate pages
    const navigate = useNavigate();

    // composable function to render Home Card components
    const renderCard = (name, title, body, icon) =>{
      return(
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
              onClick={() => navigate(name) } 
            >
              <CardContent sx={{ textAlign: 'center' }}>
                {icon}
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {body}
                </Typography>
              </CardContent>
            </Card>
      )
    }




    //  render the home page using the render card function
    return (
    <Container sx={{
      minHeight: '100vh',
      bgcolor: 'background.default',
            fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      pb: 4,
      px: 4, 
      textAlign: 'center', 
      maxWidth: "lg",
    }}>
     

        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          this app is designed to help you to quit gambling
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 6, maxWidth: '800px', mx: 'auto' }}>
          WOOOHOOOOOO!!!
        </Typography>
        <Grid container spacing={4} justifyContent="center">

          <Grid item xs={12} sm={6} md={4}>
            <div>
              {renderCard('WeeklyPlanner', 'Weekly Planner', 'This is the body text', <CalendarIcon sx={{ fontSize: 80, color: 'primary.main', mb: 2 }} /> )}
            </div>
          </Grid>

          
          <Grid item xs={12} sm={6} md={4}>
            <div>
            {renderCard('Goals', 'Goals', 'Set goals you want to accomplish today', <GoalsIcon sx={{ fontSize: 80, color: 'success.main', mb: 2 }} /> )}
            </div>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <div>
            {renderCard('Grattitude', 'Journaling', 'Reflect on your thoughts and feelings, and track your progress.', <JournalIcon sx={{ fontSize: 80, color: 'secondary.main', mb: 2 }} />)}
            </div>
          </Grid>
        </Grid>
      </Container>
  );
};

export default Home;