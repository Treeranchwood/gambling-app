/**
 * Articles component displays a grid of cards that allows users to navigate to their chosen articles
 * @component Articles
 * @returns {JSX.Element} A grid of jsx clickable cards
 */
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
    // gets navigation function from custom hook
    const navigate = useNavigate();

    /**
     * function render card renders the card components for the grids
     * @param {string} imgSrc - Source path for article image
     * @param {string} title - Article title
     * @param {string} body - the brief description of the article
     * @param {string} id - Unique id of the card so it can be recognised by the display
     * @returns {JSX.Element} Mui Card components for clickable articles
     */
    const renderCard = (imgSrc, title, body, id)=>{
        return(
            <Grid item xs={12} sm={6} md={4}>
        <Card
                            variant="outlined"
                            key={id}
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
                            <CardActionArea onClick={() => navigate(`Article${id}`)}>
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

                    {articleArray.map((article, index)=> renderCard(article.imgSrc, article.title, article.body, article.id))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Articles;