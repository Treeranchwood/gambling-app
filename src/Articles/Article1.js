import { Container, Divider, Box } from "@mui/material"
import {Typography} from "@mui/material"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import useNavigate from '../Hooks/useNavigate.js';

function Article1() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <Box sx={{ 
                position: 'relative',
                width: '100%',
                mb: 4
            }}>
                <IconButton 
                    sx={{ 
                        position: { xs: 'relative', sm: 'absolute' }, 
                        left: { xs: 0, sm: -16, md: -24 },
                        top: { xs: 2, sm: 0 },
                        mb: { xs: 2, sm: 0 }
                    }} 
                    variant="text" 
                    onClick={() => navigate("Articles")}
                >
                    <HomeIcon sx={{ color: 'black' }} className="undo-button"/>
                </IconButton>

                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: { xs: 'center', sm: 'flex-start' },
                    gap: { xs: 2, sm: 4 },
                    mt: { xs: 2, sm: 4 }
                }}>
                    <img 
                        src="download.webp" 
                        alt="Article featured image"
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
                            Why Gambling is Haram
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
                            By muslim king 123
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
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </Typography>
        </Container>
    );
}

export default Article1;