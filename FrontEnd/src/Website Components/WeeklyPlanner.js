import Toolbar from '@mui/material/Toolbar';
import NavigationContext from '../Contexts/NavigationContext.js';
import { Box, Typography, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import ThemeContext from '../Contexts/ThemeContext.js';
import { useContext } from 'react';

function WeeklyPlanner () {

    const navigate = useNavigate()

    return(
        <>
    <Box>
    <Stack direction="row" spacing={2}>
    <IconButton
            variant="text"
            sx={{
                position: 'absolute',
                ml: 3,
                mt: 3,
                '& .MuiSvgIcon-root': {
                    color: theme === 'light' ? 'black' : 'white'
                }
            }}
            onClick={() => navigate("WeeklyPlanner")}
        >
            <HomeIcon className="undo-button" />
        </IconButton>


        <Typography 
            variant="h4" 
            component="h1" 
            gutterBottom 
            sx={{ 
                color: 'text.primary',
                fontWeight: 'bold',
                fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' }
            }}
                        >
            I am the Weekly Planner!
        </Typography>
        </Stack>


    </Box>
        </>
    )


}

export default WeeklyPlanner

