/**
 * @component LandingPage is the initial page the user loads on to 
 * @returns {JSX.Element} Landing page that looks pretty and allows for transition into either the articles or the gambling self help
 */
import useNavigate from '../Hooks/useNavigate.js';
import {Container, Typography, Stack, Button, Box} from "@mui/material"
import {useState, useEffect} from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// function that renders the Landing Page
function LandingPage () {

  // function that checks the windowsize and returns a state that tells us if we need to switch to Mobile view
  const [windowSize, setWindowSize ] = useState(false)
  // useEffect required as we are accessing the DOM and not the VDOM - managing side effects
  useEffect(() => {
    const checkMobile = () => {
      setWindowSize(window.innerWidth < 600);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
  }, [])

  // Custom hook that allows navigation between pages
  const navigate = useNavigate()
  
  



  // return the Landing page
    return(
        // main container for landing page
        <Container maxWidth="md" sx={{
        
           flexGrow: 1, 
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center', 
          py: 10,
          textAlign: 'center', 
          color: 'text.primary', 
        }}>


          
          <Typography
          // Title Text
            variant="h2"         

            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: '4.5rem',
            }}
          >
            This app is designed to help people quit Gambling
          </Typography>

          <Typography
          // body Text
            variant="h5"
            sx={{
              mb: 5,
              color: 'text.secondary',
              fontSize: '1.5',
              mx: 5
            }}
          >
         Either go read articles, or get started on your journey by going to the home page
          </Typography>

        <Stack sx={{flexDirection: "row"}}>
          <Button
            variant="contained"
            size="large"
            onClick={()=> navigate("Home")}

            sx={{
              borderRadius: 50,
              px: 7,
              py: 2.2,   
              margin: 2,          
            }}
          >
            {windowSize? "Home": "Go to Home!"}
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={()=> navigate("Articles")}


            sx={{
              borderRadius: 50,
              px: 7,
              py: 2.2,       
              margin: 2,       
            }}
          >
            {windowSize? "Articles": "Go to Articles!"}
          </Button>
          </Stack>
        </Container>
        
    
        )



}

export default LandingPage

