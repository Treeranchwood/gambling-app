import useNavigate from '../Hooks/useNavigate.js'
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {articleArray} from "./ArticlesArray.js"

import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from '@mui/material';

const Articles = () => {
    const navigate = useNavigate();

    

    const renderCard = (imgSrc, title, body, key)=>{
        return(
            <Grid item xs={12} sm={6} md={4}>
        <Card
                            variant="outlined"
                            id={key}
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                borderRadius: 3,
                                transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 3,
                                },
                            }}
                        >
                            <CardActionArea onClick={() => navigate("Article1.js")}>
                                <CardMedia
                                    component="img"
                                    image={imgSrc}
                                    sx={{
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 12,
                                        objectFit: 'cover',
                                    }}
                                />
                                <CardContent sx={{ 
                                    textAlign: 'left',
                                    p: { xs: 2, sm: 3 }
                                }}>
                                    <Typography 
                                        variant="h5" 
                                        component="h2" 
                                        gutterBottom 
                                        sx={{ 
                                            fontWeight: 'medium',
                                            fontSize: { xs: '1.25rem', sm: '1.5rem' },
                                            mb: 1
                                        }}
                                    >
                                        {title}
                                    </Typography>
                                    <Typography 
                                        variant="body1" 
                                        color="text.secondary"
                                        sx={{
                                            fontSize: { xs: '0.875rem', sm: '1rem' },
                                            lineHeight: 1.6
                                        }}
                                    >
                                       {body} 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        </Grid>)
    }
    
    return (
        <Box sx={{
            minHeight: '100vh',
            bgcolor: 'background.default',
            fontFamily: 'Inter, sans-serif',
            display: 'flex',
            flexDirection: 'column',
            pt: { xs: 2, sm: 3 },
            px: { xs: 2, sm: 4 },
        }}>
            <Container maxWidth="lg" sx={{ 
                textAlign: 'center', 
                pt: { xs: 2, sm: 3 },
                px: { xs: 2, sm: 3 }
            }}>
                <Typography 
                    variant="h4" 
                    component="h1" 
                    gutterBottom 
                    sx={{ 
                        color: 'text.primary', 
                        fontWeight: 'bold',
                        fontSize: { xs: '1.75rem', sm: '2.125rem', md: '2.5rem' }
                    }}
                >
                    Articles
                </Typography>
                
                <Typography 
                    variant="h6" 
                    sx={{ 
                        color: 'text.secondary', 
                        mb: { xs: 4, sm: 6 }, 
                        maxWidth: '800px', 
                        mx: 'auto',
                        fontSize: { xs: '1rem', sm: '1.25rem' },
                        px: { xs: 2, sm: 0 }
                    }}
                >
                    These articles are designed to help educate on the dangers of gambling!
                </Typography>

                <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">        

                    {articleArray.map((key, id)=> renderCard(articleArray[id].imgSrc, articleArray[id].title, articleArray[id].body, key))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Articles;