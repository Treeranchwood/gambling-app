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
import NavigationContext from './Contexts/NavigationContext.js'; // Adjust path if needed
import Article1 from './Articles/Article1.js'
import { Toolbar } from '@mui/material';


function App() {
  const [renderComponent, setRenderComponent] = useState("Home"); // Default component to render

  const componentMap = {
    "LandingPage": LandingPage, // The key is the string name, the value is the actual imported component
    "Home": Home,
    "Articles": Articles,
    // Add all your other components here if you want to dynamically render them
    "Goals": Goals,
    "Grattitude": Grattitude,
    "WeeklyPlanner": WeeklyPlanner,
    "Navbar": Navbar,
    "Article1": Article1,
  }

  const ElementType = componentMap[renderComponent]



  return (
    <NavigationContext.Provider value={{ renderComponent, setRenderComponent }}>    
      <Navbar></Navbar>      
      <ElementType/> 
      <Footer/>
    

    
    </NavigationContext.Provider>
  );
}

export default App;
