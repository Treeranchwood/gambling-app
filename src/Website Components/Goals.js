import {useState, useContext} from 'react';
import Toolbar from '@mui/material/Toolbar';
import ThemeContext from '../Contexts/ThemeContext.js';

function Footer () {
    const {theme} = useContext(ThemeContext);
    return(
    <>
        <h1>
                I am the Footer!
            </h1>
            <h1>{theme}</h1>
    </> 
    )


}

export default Footer

