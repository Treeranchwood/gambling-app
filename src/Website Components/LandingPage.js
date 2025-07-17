import useNavigate from '../Hooks/useNavigate.js';
import {Container, Typography, Stack, Button, Box} from "@mui/material"
import {useState, useEffect} from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function LandingPage () {

  const [windowSize, setWindowSize ] = useState(false)
  useEffect(() => {
    const checkMobile = () => {
      setWindowSize(window.innerWidth < 600);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
  }, [])





  const navigate = useNavigate()
  
  




    return(
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
            variant="h2"         

            sx={{
              fontWeight: 'bold',
              mb: 3,
              fontSize: '4.5rem',
            }}
          >
            Lorem ipsum dolor sit amet
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 5,
              color: 'text.secondary',
              fontSize: '1.5',
              mx: 5
            }}
          >
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

