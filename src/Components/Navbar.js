import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import { useContext } from 'react';
import NavigationContext from '../Contexts/NavigationContext.js';
import useNavigate from '../Hooks/useNavigate.js';
import Icon from './Icon.png'
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

  //check if the window is mobile




function HideOnScroll(props) {

  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};


function Navbar(props) {
  const {renderComponent} = useContext(NavigationContext);
  const navigate = useNavigate();
  const buttonText = renderComponent == "Articles" ? "Home" : "Articles";
  

  const [mobileNavbar, setMobileNavbar] = useState(false);

  // 2. useEffect to handle initial check and listen for resize events
  useEffect(() => {
    // Function to check window width and update state
    const checkMobile = () => {
      setMobileNavbar(window.innerWidth < 600);
    };

    // Initial check when the component mounts
    checkMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [])

if (mobileNavbar){
  return (
    
    <HideOnScroll {...props}>
    <AppBar 
    
      
    sx={{ 
      color: 'common.white', 
      }}>
        <Toolbar >
          
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <img style={{width: 50, height: 50}} src={Icon} onClick={() => navigate("LandingPage")}/>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          <Button
                sx={{ my: 2, color: 'white', display: 'block', mr: 2}}
                onClick={() => navigate(buttonText)}
              >
                {buttonText}
                
          </Button>
        </Toolbar>
    </AppBar>
    </HideOnScroll>
  );
} else {
  return(
    <AppBar 
    
      
    sx={{ 
      color: 'common.white', 
      }}>
        <Toolbar >
          
          <IconButton sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <img style={{width: 50, height: 50}} src={Icon} alt="Icon" onClick={() => navigate("LandingPage")}/>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>

          <Button
                sx={{ my: 2, color: 'white', display: 'block', mr: 2}}
                onClick={() => navigate(buttonText)}
              >
                {buttonText}
                
          </Button>
        </Toolbar>
    </AppBar>
  )
}
}
export default Navbar;
