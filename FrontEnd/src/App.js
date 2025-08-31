/**
 * @component App is the root of the app and is where the theme and navigation contexts are passed down from
 * @returns {JSX.Element} returns the root of the app where everything is being rendered from 
 */
// Importing required dependencies and components
import {useState} from 'react';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Articles from './Articles/Articles.js';
import Goals from './Website Components/Goals.js'
import Grattitude from './Website Components/Grattitude.js';
import Home from './Website Components/Home.js';
import WeeklyPlanner from './Website Components/WeeklyPlanner.js';
import LandingPage from './Website Components/LandingPage.js'
import NavigationContext from './Contexts/NavigationContext.js';
import ThemeContext from './Contexts/ThemeContext.js';
import Article1 from './Articles/DisplayArticles.js'
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { light, dark } from './Contexts/themes.js';


// root functions of the app
function App() {
  // tracks which component to render
  const [renderComponent, setRenderComponent] = useState("LandingPage");
  
  // tracks current theme state
  const [theme, setTheme] = useState('light');

  const componentMap = {
    // map to change a string an object so that pages can be rendered
    "LandingPage": LandingPage, 
    "Home": Home,
    "Articles": Articles,
    "Goals": Goals,
    "Grattitude": Grattitude,
    "WeeklyPlanner": WeeklyPlanner,
    "Navbar": Navbar,
    "Article1": Article1,
    "Article2": Article1,
    "Article3": Article1,
    "Article4": Article1,
  }

  // which element to render? and turn that into an object
  const ElementType = componentMap[renderComponent];
  
  // gets current theme object based on theme state
  const currentTheme = theme === 'dark' ? dark : light;

  return (
    // provides theme context to all child components
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        {/*provides the navigation context */}
        <NavigationContext.Provider value={{ renderComponent, setRenderComponent }}>
          <Navbar />
          { // specific code for the landing page
          renderComponent === "LandingPage" ? (
            <Box
              sx={{
                minHeight: '100vh',
                width: '100%',
                margin: '0',
                backgroundImage: theme === 'light' ? 'linear-gradient(135deg, #e0f7fa 0%, #e8eaf6 100%)' : 'none',
              }}
            >
              <ElementType />
            </Box>
          ) : (
            <ElementType />
          )}
          <Footer />
        </NavigationContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
