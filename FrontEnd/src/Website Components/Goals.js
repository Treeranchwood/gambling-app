/**
 * Goals allows the user to set goals for themselves daily. The goals are designed to be short term day by day, not long ones
 * which is why the app is designed like a journal
 * @component Goals
 * @returns {JSX.Element} Goals setting page, with date scrolling and a home button as well as integration from the backend
 * so that we can see the goals externally and provide some motivation to the users
 */
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavigationContext from '../Contexts/NavigationContext.js';
import { useContext, useState, useEffect, useMemo } from 'react';
import ThemeContext from '../Contexts/ThemeContext.js';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { debounce } from 'lodash';


function Goals() {
    // is the current date the user has selected
    const [selectedDate, setSelectedDate] = useState(dayjs());
    
    // value of the goals textbox
    const [journalVal, setJournalVal] = useState(localStorage.getItem(`goals-${selectedDate.format('MM/DD/YYYY')}`) || '');
    
    // stores data from backend
    const [backendData, setBackendData] = useState('');
    
    // grabbing navigation context
    const navigate = useNavigate();
    
    // gets current component from context
    const { renderComponent } = useContext(NavigationContext);
    
    // grab the current theme
    const { theme } = useContext(ThemeContext);


    


    // debounces saves to the local storage
    const debouncedLocalStorageSave = useMemo(() => 
        debounce((value, date) => {
            localStorage.setItem(`goals-${date.format('MM/DD/YYYY')}`, value);
        }, 500), 
        []
    );

    // function handelchange handles changes in the input area
    function handleChange(event) {
        const newValue = event.target.value;
        setJournalVal(newValue);
        // debouncing saves to the loal storage
        debouncedLocalStorageSave(newValue, selectedDate);
    }

    // handles date changes
    function handleDateChange(newDate) {
        setSelectedDate(newDate);
        const savedEntry = localStorage.getItem(`goals-${newDate.format('MM/DD/YYYY')}`) || '';
        setJournalVal(savedEntry);
    }

    // navigates between days
    function navigateDay(direction) {
        const newDate = dayjs(selectedDate).add(direction, 'day');
        handleDateChange(newDate);
    }

    // fetches data from the backend to the frontend
    useEffect(() => {
        const fetchBackendData = async () => {
            try {
                const getResponse = await fetch('http://localhost:3001/api/goals');
                const getData = await getResponse.json();
                console.log('GET Response:', getData);
                
                if (getData.success && getData.data.value) {
                    setBackendData(getData.data.value);
                }
            } catch (error) {
                setBackendData('Error connecting to backend');
            }
        };
        fetchBackendData();
    }, []);

    // onchange of the inputarea a debounced fetch is sent to the server - ideally when this is 
    // we should increase the debounced fetch so that we can view this later
    const debouncedSendData = useMemo(() =>
        debounce(async (value) => {
            console.log("send data")
            const putResponse = await fetch('http://localhost:3001/api/goals', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    goals: value
                })
            });                
            const putData = await putResponse.json();
        }, 1000),
        []
    );

    // only on change of the debounced data should we ever send to the backend
    useEffect(() => {
        debouncedSendData(journalVal);
    }, [journalVal, debouncedSendData])

    return (
        <>
        <IconButton
            variant="text"
            sx={{
                position: 'absolute',
                ml: 3,
                mt: 1,
                '& .MuiSvgIcon-root': {
                    color: theme === 'light' ? 'black' : 'white'
                }
            }}
            onClick={() => navigate("Home")}
        >
            <HomeIcon className="undo-button" />
        </IconButton>
        
        <Box sx={{
            px: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            {/* page title */}
            <Stack direction="row" alignItems="center" spacing={2} sx={{ my: 3 }}>
                <h1>Goals!</h1>
            </Stack>

            {/* goals input container to manage the size */}
            <Container
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
                {/* goals text input */}
                <TextField
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
                    display: "flex", 
                    width: '100%',
                    maxWidth: 800,
                    alignItems: 'center',
                    mt: 2,
                    
                    justifyContent: 'space-between',
                }}>
                    {/* date picker */}
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
                        gap: 2,
                        pb: 2,
                    }}>
                        <IconButton
                            onClick={() => navigateDay(-1)}
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
        {/* displays backend data */}
        <p id='goalsPut'>{backendData}</p>
        </>
    );
}

export default Goals;



