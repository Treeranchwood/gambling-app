/**
 * Navbar component is a navbar with theme switching
 * @component Navbar
 * @returns {JSX.Element} Navigation bar with theme switching
 */
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
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
import { FormControlLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';
import {dark, light} from '../Contexts/themes.js'
import { ThemeProvider } from '@mui/material/styles';
import ThemeContext from '../Contexts/ThemeContext.js';

/**
 *  theme swiching with sun and moon icons
 */
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
        ...theme.applyStyles('dark', {
          backgroundColor: '#8796A5',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
    ...theme.applyStyles('dark', {
      backgroundColor: '#003892',
    }),
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#aab4be',
    borderRadius: 20 / 2,
    ...theme.applyStyles('dark', {
      backgroundColor: '#8796A5',
    }),
  },
}));

/**
 * Component that hides the navbar when scrolling down and shows it when scrolling up.
 */
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

/**
 * Main Navbar component that renders navigation elements and theme controls. 
 * @returns {JSX.Element} returns a navbar with theme switching, a logo and navigation
 */
function Navbar(props) {
  // which component is currently being rendered
  const {renderComponent} = useContext(NavigationContext);
  
  // gets navigation function from custom hook
  const navigate = useNavigate();
  
  // gets the theme context
  const {theme, setTheme} = useContext(ThemeContext);

  // toggles between light and dark themes
  function changeTheme(){
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  }

  // maps theme names to actual theme objects so that we can actually change the themes
  const componentMap = {
    'light': light,
    'dark': dark,
   }

  // determines where the navbar button should navigate
  const buttonText1 = renderComponent === "Articles" ? "Home" : "Articles";
  const buttonText2 = renderComponent === "Article1" ? "Home" : "Articles";
  let buttonText = "Articles"

  if (buttonText1 === "Home" || buttonText2 === "Home"){
    buttonText = "Home"
  }
  

  // tracks if mobile navigation should be used
  const [mobileNavbar, setMobileNavbar] = useState(false);

  // detects mobile screen size and updates navigation state
  useEffect(() => {
    const checkMobile = () => {
      setMobileNavbar(window.innerWidth < 600);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // gets current theme object from component map
  const currentTheme = componentMap[theme]

if (mobileNavbar){
  // mobile navbar layout
  return (
    <ThemeProvider theme={currentTheme}>
    <Box sx={{display: 'flex'}}>
    <HideOnScroll {...props}>
    <AppBar 
    

      
    sx={{ 
      color: 'common.white', 
      }}>
        <Toolbar >
          <Box sx={{display: 'flex',  flexGrow: 1}}>
          
            <img style={{marginTop: 7, width: 50, height: 50}} src={Icon} alt="Icon" onClick={() => navigate("LandingPage")}/>
            <Button
                sx={{ my: 2, color: 'white',  mr: 2}}
                onClick={() => navigate(buttonText)}
              >
                {buttonText}
                
          </Button>
          </Box>

          <FormControlLabel
        control={
          <MaterialUISwitch 
            sx={{ m: 1 }}
            checked={theme === 'dark'}
            onChange={changeTheme}
          />
        }
      />

        </Toolbar>
    </AppBar>
    </HideOnScroll>
    </Box>
    <Box sx={{ minHeight: { xs: 56, sm: 64 } }} /> 

    </ThemeProvider>
    
  );
} else {
  // desktop navbar layout
  return(
    <ThemeProvider theme={currentTheme}>
    <Box sx={{display: 'flex'}}>
    <AppBar 
    

      
    sx={{ 
      color: 'common.white', 
      }}>
        <Toolbar >
          <Box sx={{display: 'flex',  flexGrow: 1}}>
          
            <img style={{marginTop: 7, width: 50, height: 50}} src={Icon} alt="Icon" onClick={() => navigate("LandingPage")}/>
            <Button
                sx={{ my: 2, color: 'white',  mr: 2}}
                onClick={() => navigate(buttonText)}
              >
                {buttonText}
                
          </Button>
          </Box>

          <FormControlLabel
        control={
          <MaterialUISwitch 
            sx={{ m: 1 }}
            checked={theme === 'dark'}
            onChange={changeTheme}
          />
        }
      />

        </Toolbar>
    </AppBar>
    </Box>
    <Box sx={{ minHeight: { xs: 56, sm: 64 } }} /> 
    
    </ThemeProvider>
  )
  
}

}
export default Navbar;
