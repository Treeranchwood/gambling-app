import {useState} from 'react';
import NavigationContext from '../Contexts/NavigationContext.js';

function WeeklyPlanner () {
    return(

        <h1>
            {NavigationContext.currentpage}
            I am the Weekly Planner!
        </h1>
    )


}

export default WeeklyPlanner

