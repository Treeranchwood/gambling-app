import useNavigate from '../Hooks/useNavigate.js' // Import your custom hook
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Toolbar from '@mui/material/Toolbar';

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';



    const Articles = () => {
    const navigate = useNavigate();
    return (
    <Box sx={{
      minHeight: '100vh',
      bgcolor: 'background.default', 
      fontFamily: 'Inter, sans-serif', 
      display: 'flex',
      flexDirection: 'column',
      pt: 2,  // Reduced top padding
      px: 4,  // Keep horizontal padding
    }}>

      <Container maxWidth="lg" sx={{ textAlign: 'center', pt: 2 }}>
        <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          Articles
        </Typography>
        <Typography variant="h6" sx={{ color: 'text.secondary', mb: 6, maxWidth: '800px', mx: 'auto' }}>
          These articles are designed to help educate on the dangers of gambling!
        </Typography>
        <Grid container spacing={4} justifyContent="center" item xs={12} sm={6} md={4}>
         
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

              }}
              onClick={() => navigate('Article1') } 
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <img style={{ borderRadius: "10%" }} src="download.webp"/>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'medium' }}>
                  Is Gambling Haram?
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Behold the answers to the universe.
                </Typography>
              </CardContent>
            </Card>
            </div>
          </Grid>
      </Container>
    </Box>
  );
};

export default Articles
;