import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavigationContext from '../Contexts/NavigationContext.js';
import { useContext } from 'react';



function Grattitude () {
    const navigate = useNavigate();
    const {renderComponent} = useContext(NavigationContext);
    console.log(renderComponent);

    return (
        <>
        <Stack direction="row">

            <h1>{renderComponent}</h1>
            <IconButton variant = "text" sx = {{ml:2, mt:1}} onClick={()=> navigate("WeeklyPlanner")}>
                <HomeIcon sx={{ color: 'black', size : "large", edge: "start", }} className="undo-button"/>
            </IconButton>
        </Stack>
        </>
    )


}

export default Grattitude



