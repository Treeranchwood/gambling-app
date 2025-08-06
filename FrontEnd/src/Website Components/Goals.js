import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavigationContext from '../Contexts/NavigationContext.js';
import { useContext, useState, useEffect } from 'react';
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
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [journalVal, setJournalVal] = useState(localStorage.getItem(`goals-${selectedDate.format('MM/DD/YYYY')}`) || '');
    const [backendData, setBackendData] = useState('');
    const navigate = useNavigate();
    const { renderComponent } = useContext(NavigationContext);
    const { theme } = useContext(ThemeContext);


    


    function handleChange(event) {
        const newValue = event.target.value;
        setJournalVal(newValue);
                debounce(() => {            
            localStorage.setItem(`goals-${selectedDate.format('MM/DD/YYYY')}`, newValue);
        }, 500);
    }

    function handleDateChange(newDate) {
        setSelectedDate(newDate);
        const savedEntry = localStorage.getItem(`goals-${newDate.format('MM/DD/YYYY')}`) || '';
        setJournalVal(savedEntry);
    }

    function navigateDay(direction) {
        const newDate = dayjs(selectedDate).add(direction, 'day');
        handleDateChange(newDate);
    }

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


        const debouncedFetch = () => debounce(fetchBackendData, 500);
        
        debouncedFetch();
    }, []);



    useEffect(()=>{
        const debouncedSendData = debounce(async () => {
            console.log("send data")
            const putResponse = await fetch('http://localhost:3001/api/goals', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    goals: journalVal
                })
            });                
            const putData = await putResponse.json();
        }, 1000);

        debouncedSendData();
    
    }, [journalVal])

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
                <h1>Goals!</h1>
            </Stack>

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
        <p id='goalsPut'>{backendData}</p>
        </>
    );
}

export default Goals;



