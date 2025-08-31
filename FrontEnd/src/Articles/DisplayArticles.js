/**
 * DisplayArticles component renders each individual article te user calls
 * @component DisplayArticles
 * @returns {JSX.Element} An article with text, an image, title, and home button to return back to the articles home page
 */
import { Container, Divider, Box } from "@mui/material"
import {Typography} from "@mui/material"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import useNavigate from '../Hooks/useNavigate.js';
import { useContext } from 'react';
import NavigationContext from '../Contexts/NavigationContext.js';
import { articleArray } from './ArticlesArray.js';

function Article1() {
    // gets navigation function from custom hook
    const navigate = useNavigate();
    
    // gets current component from navigation context
    const { renderComponent } = useContext(NavigationContext);
    
    /**
     * gets article ID from renderComponent 
     * @type {string}
     */
    const articleId = renderComponent.replace('Article', '');
    
    /**
     * Finds current article based on the ID
     */
    const currentArticle = articleArray.find(article => article.id === articleId) || articleArray[0];

    return( <Box sx={{display: 'flex', flexDirection: 'column'}}>
   
            <IconButton 
                    sx={{ 
                        alignSelf: 'flex-start',
                        ml: 3,
                        mt: 1
                    }} 
                    variant="text" 
                    onClick={() => navigate("Articles")}
                >
                    <HomeIcon sx={{ color: 'black' }} className="undo-button"/>
                </IconButton>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 }, mt: '0px' }}>
            <Box sx={{ 
                position: 'relative',
                width: '100%',
                mb: 4
            }}>
                

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: 2, sm: 4 },
                    mt: { xs: 2, sm: 4 }
                }}>
                    <img 
                        src={currentArticle.imgSrc} 
                        alt={`${currentArticle.title} featured image`}
                        style={{
                            borderRadius: "10%",
                            maxWidth: '100%',
                            height: 'auto',
                            objectFit: 'cover'
                        }}
                    />
                    
                    <Box sx={{ 
                        textAlign: { xs: 'center', sm: 'left' },
                        width: '100%'
                    }}>
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            gutterBottom 
                            sx={{ 
                                color: 'text.primary',
                                fontWeight: 'bold',
                                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
                            }}
                        >
                            {currentArticle.title}
                        </Typography>
                        <Typography 
                            variant="h6" 
                            gutterBottom 
                            sx={{ 
                                color: 'text.secondary',
                                fontWeight: 'bold',
                                fontSize: { xs: '1rem', sm: '1.15rem', md: '1.25rem' }
                            }}
                        >
                            Article {currentArticle.id}
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Divider sx={{ my: { xs: 3, sm: 4 } }} />

            <Typography 
                variant="body1" 
                sx={{ 
                    color: 'text.secondary',
                    mb: 6,
                    mx: 'auto',
                    fontSize: { xs: '1rem', sm: '1.1rem' },
                    lineHeight: { xs: 1.6, sm: 1.8 },
                    '& p': {
                        mb: { xs: 2, sm: 3 }
                    }
                }}
            >
               
                {currentArticle.body}
                
                <br /><br />
                
                This is additional content for Article #{currentArticle.id}. Each article can now have its own unique content and be dynamically rendered based on the ID passed from the articles page.
                
                <br /><br />
                
                The system now supports multiple articles with unique IDs, making it easy to add new articles and manage content dynamically.
               
            </Typography>
        </Container>
    </Box>
    );
}

export default Article1;