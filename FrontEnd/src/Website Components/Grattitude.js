
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavigationContext from '../Contexts/NavigationContext.js';
import { useContext, useState } from 'react';
import ThemeContext from '../Contexts/ThemeContext.js';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container, Grid, Icon } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


// return the Journalling section of the app
function Grattitude() {
    // useState to handle reloads when changing dates
    const [selectedDate, setSelectedDate] = useState(dayjs());
    // the value assigned with the journal. Autosaves to local storage
    const [journalVal, setJournalVal] = useState(localStorage.getItem(`journal-${selectedDate.format('MM/DD/YYYY')}`) || '');
    // custom hook to navigate between pages
    const navigate = useNavigate();
    // context (prop) passed down to allow theme switching
    const { theme } = useContext(ThemeContext);

    // function handles changes in the input area of the app
    function handleChange(event) {
        const newValue = event.target.value;
        setJournalVal(newValue);
        localStorage.setItem(`journal-${selectedDate.format('MM/DD/YYYY')}`, newValue);
    }

    // function handles date changes in the app
    function handleDateChange(newDate) {
        setSelectedDate(newDate);
        const savedEntry = localStorage.getItem(`journal-${newDate.format('MM/DD/YYYY')}`) || '';
        setJournalVal(savedEntry);
    }

    // function to allow us to navigate -1 or +1 days using buttons
    function navigateDay(direction) {
        const newDate = dayjs(selectedDate).add(direction, 'day');
        handleDateChange(newDate);
    }

    // returning the journal
    return (
        <>
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
        <Box sx={{
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 3 }}>
                <h1>Journalling!</h1>
            </Stack>

            <Container
                // styled container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 3,
                    boxShadow: 3,
                    borderRadius: 8,
                    margin: 3
                }}
            >
                <TextField
                    // text field journalling
                    label="Journal Entry"
                    multiline
                    minRows={10}
                    maxRows={20}
                    fullWidth
                    variant="outlined"
                    placeholder="Journal..."
                    value={journalVal}
                    onChange={handleChange}
                    sx={{
                        width: '100%',
                        maxWidth: 800,
                        mt: 2
                    }}
                />
                <Stack direction='row' sx={{
                    // Stack to apply adequate spacing
                    display: "flex", 
                    width: '100%',
                    maxWidth: 800,
                    alignItems: 'center',
                    mt: 2,
                    
                    justifyContent: 'space-between',
                }}>
                    
                    <Box sx={{ pb: 2 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Select Date"
                                value={selectedDate}
                                onChange={handleDateChange}
                                
                            />
                        </LocalizationProvider>
                    </Box>

                    <Box sx={{ 
                        display: "flex", 
                        gap: 2, // provides spacing between buttons
                        pb: 2,
                        // Box used to provide proper spacing with the stack
                    }}>
                        <IconButton
                            onClick={() => navigateDay(-1)}
                            // change colour based on theme
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color: theme === 'light' ? 'black' : 'white'
                                }
                            }}
                        >
                            <ArrowBackIcon/> 
                        </IconButton>

                        <IconButton
                            onClick={() => navigateDay(1)}
                            sx={{
                                '& .MuiSvgIcon-root': {
                                    color: theme === 'light' ? 'black' : 'white'
                                }
                            }}
                        >
                            <ArrowForwardIcon/> 
                        </IconButton>
                    </Box>
                </Stack>
            </Container>
        </Box>
        </>
    );
}

export default Grattitude;



