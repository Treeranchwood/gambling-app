import './App.css';
import {useState} from 'react';
import Navbar from './Components/Navbar.js';
import Footer from './Components/Footer.js';
import Articles from './Website Components/Articles.js';
import Goals from './Website Components/Goals.js'
import Grattitude from './Website Components/Grattitude.js';
import Home from './Website Components/Home.js';
import WeeklyPlanner from './Website Components/WeeklyPlanner.js';
import LandingPage from './Website Components/LandingPage.js'
import NavigationContext from './Contexts/NavigationContext.js';
import ThemeContext from './Contexts/ThemeContext.js';
import Article1 from './Articles/Article1.js'
import { Box } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { light, dark } from './Contexts/themes.js';

function App() {
  const [renderComponent, setRenderComponent] = useState("Home"); // State to determine current website output
  const [theme, setTheme] = useState('dark')

  const componentMap = {
    // map to change a string an object
    "LandingPage": LandingPage, 
    "Home": Home,
    "Articles": Articles,
    "Goals": Goals,
    "Grattitude": Grattitude,
    "WeeklyPlanner": WeeklyPlanner,
    "Navbar": Navbar,
    "Article1": Article1,
  }

  const ElementType = componentMap[renderComponent]
  const currentTheme = theme === 'dark' ? dark : light;

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ThemeProvider theme={currentTheme}>
        <CssBaseline />
        <NavigationContext.Provider value={{ renderComponent, setRenderComponent }}>
          <Navbar />
          {renderComponent === "LandingPage" ? (
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
