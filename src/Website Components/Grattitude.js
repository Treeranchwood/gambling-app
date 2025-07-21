
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavigationContext from '../Contexts/NavigationContext.js';
import { useContext, useState } from 'react';
import ThemeContext from '../Contexts/ThemeContext.js';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Grattitude () {


    const today = new Date()
    const day = today.getDate()
    let month = today.getMonth() + 1
    const year = today.getFullYear()

    if (month === 12 || month === 11 || month === 10){}
    else{
        month = `0${month}`
    }

    const currentDay = `${day}/${month}/${year}`    


    function handleChange (event){
        const newValue = event.target.value;
        setJournalVal(newValue);


        localStorage.setItem(currentDay, newValue);
    }

    const [journalVal, setJournalVal] = useState(localStorage.getItem(currentDay))

    const navigate = useNavigate();
    const {renderComponent} = useContext(NavigationContext);
    const {theme} = useContext(ThemeContext);

    return (
        <Box >
            <Stack direction="row">
            <IconButton 
                position = "fixed"
                variant="text" 
                sx={{ 
                    ml: 2, 
                    mt: 1,
                    '& .MuiSvgIcon-root': {
                        color: theme === 'light' ? 'black' : 'white'
                    }
                }} 
                onClick={() => navigate("WeeklyPlanner")}
            >
                <HomeIcon className="undo-button"/>
            </IconButton>

            <h1>Journalling!</h1>
           
            </Stack>



          
            <Box
  sx={{
    display: 'flex', 
    alignItems: 'center',  
    justifyContent: 'center',
    p: 2,
  }}
>
            <TextField
            label="Journalling"
            multiline 
            minRows={10} 
            maxRows={20} 
            fullwidth
            variant="outlined" 
            placeholder="Boring"
            justifyContent="center"
            value={journalVal}
            onChange={handleChange}
            

            sx={{
                margin: 2,
            }}


          />
    </Box>



        </Box>
    )
}

export default Grattitude



