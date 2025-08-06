import Toolbar from '@mui/material/Toolbar';
import NavigationContext from '../Contexts/NavigationContext.js';
import { Box, Typography, IconButton, Card, TextField, Button, ThemeProvider} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import ThemeContext from '../Contexts/ThemeContext.js';
import { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

function WeeklyPlanner () {
    function addTask(setter, newTasks) {
        setter(newTasks);
    }
    const [monday, setMonday] = useState(["cheese", "milk", "eggs"])
    const [mondayInput, setMondayInput] = useState("")



    const { theme } = useContext(ThemeContext);


    const navigate = useNavigate()

    return(
        <>
        <Toolbar/>
    <Box>
    <Grid  direction="column" spacing={2}>
        {monday.map((item, index) => (
            <Grid spacing={2}>
            <Card key={index} id={index} >
                {item}
                <IconButton size="small" onClick={() => {
                    setMonday(monday.filter((x, i) => i !== index));
                }}>
                    <CloseIcon fontSize="small" />
                </IconButton>
            </Card>
            </Grid>
        ))}
    </Grid>
    <Stack direction="row" spacing={2}>
    <TextField
        id="monday"
        label="new task"
        variant="outlined"
        value={mondayInput}
        onChange={e => setMondayInput(e.target.value)}
    />
    <Button
        onClick={() => {
            if (mondayInput) {
                addTask(setMonday, [...monday, mondayInput]);
                setMondayInput("");
            }
        }}
        variant="contained"
        color="primary"
    >
        Add
    </Button>
    </Stack>


    </Box>
        </>
    )


}

export default WeeklyPlanner

