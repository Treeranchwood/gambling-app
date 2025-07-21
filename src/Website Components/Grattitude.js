
import Stack from '@mui/material/Stack';
import useNavigate from '../Hooks/useNavigate.js';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import NavigationContext from '../Contexts/NavigationContext.js';
import { useContext, useState } from 'react';
import ThemeContext from '../Contexts/ThemeContext.js';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import getDate from '../Components/getDate.js';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Grattitude() {
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [journalVal, setJournalVal] = useState(localStorage.getItem(dayjs().format('DD/MM/YYYY')) || '');
    const navigate = useNavigate();
    const { renderComponent } = useContext(NavigationContext);
    const { theme } = useContext(ThemeContext);

    function handleChange(event) {
        const newValue = event.target.value;
        setJournalVal(newValue);
        localStorage.setItem(selectedDate.format('MM/DD/YYYY'), newValue);
    }

    function handleDateChange(newDate) {
        setSelectedDate(newDate);
        const savedEntry = localStorage.getItem(newDate.format('MM/DD/YYYY')) || '';
        setJournalVal(savedEntry);
    }

    return (
        <Box>
            <Stack direction="row" alignItems="center" spacing={2} sx={{ mb: 3 }}>
                <IconButton
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
                    <HomeIcon className="undo-button" />
                </IconButton>
                <h1>Journalling!</h1>
            </Stack>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                }}
            >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Select Date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        sx={{ width: 300 }}
                    />
                </LocalizationProvider>

                <TextField
                    label="Journal Entry"
                    multiline
                    minRows={10}
                    maxRows={20}
                    fullWidth
                    variant="outlined"
                    placeholder="Write your thoughts here..."
                    value={journalVal}
                    onChange={handleChange}
                    sx={{
                        width: '100%',
                        maxWidth: 800,
                        mt: 2
                    }}
                />
            </Box>
        </Box>
    );
}

export default Grattitude;



