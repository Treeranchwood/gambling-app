import Toolbar from '@mui/material/Toolbar';
import NavigationContext from '../Contexts/NavigationContext.js';
import { Box, Typography, IconButton, Card, TextField, Button, ThemeProvider, Container, Grid, Stack, Divider, CardContent, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import useNavigate from '../Hooks/useNavigate.js';
import ThemeContext from '../Contexts/ThemeContext.js';
import { useContext } from 'react';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function WeeklyPlanner() {
    const { theme: themeMode } = useContext(ThemeContext);
    const theme = useTheme(); // Use Material-UI's useTheme hook
    const navigate = useNavigate();

    // State for all days
    const [monday, setMonday] = useState(() => {
        const saved = localStorage.getItem('monday');
        return saved ? JSON.parse(saved) : ["cheese", "milk", "eggs"];
    });
    const [tuesday, setTuesday] = useState(() => {
        const saved = localStorage.getItem('tuesday');
        return saved ? JSON.parse(saved) : [];
    });
    const [wednesday, setWednesday] = useState(() => {
        const saved = localStorage.getItem('wednesday');
        return saved ? JSON.parse(saved) : [];
    });
    const [thursday, setThursday] = useState(() => {
        const saved = localStorage.getItem('thursday');
        return saved ? JSON.parse(saved) : [];
    });
    const [friday, setFriday] = useState(() => {
        const saved = localStorage.getItem('friday');
        return saved ? JSON.parse(saved) : [];
    });
    const [saturday, setSaturday] = useState(() => {
        const saved = localStorage.getItem('saturday');
        return saved ? JSON.parse(saved) : [];
    });
    const [sunday, setSunday] = useState(() => {
        const saved = localStorage.getItem('sunday');
        return saved ? JSON.parse(saved) : [];
    });

    // Input states for all days
    const [mondayInput, setMondayInput] = useState("");
    const [tuesdayInput, setTuesdayInput] = useState("");
    const [wednesdayInput, setWednesdayInput] = useState("");
    const [thursdayInput, setThursdayInput] = useState("");
    const [fridayInput, setFridayInput] = useState("");
    const [saturdayInput, setSaturdayInput] = useState("");
    const [sundayInput, setSundayInput] = useState("");

    // Generic function to add tasks
    const handleAddTask = (dayTasks, setDayTasks, dayInput, setDayInput, dayName) => {
        if (dayInput.trim()) {
            const newTasks = [...dayTasks, dayInput.trim()];
            setDayTasks(newTasks);
            localStorage.setItem(dayName.toLowerCase(), JSON.stringify(newTasks));
            setDayInput("");
        }
    };

    // Generic function to remove tasks
    const handleRemoveTask = (dayTasks, setDayTasks, index, dayName) => {
        const newTasks = dayTasks.filter((_, i) => i !== index);
        setDayTasks(newTasks);
        localStorage.setItem(dayName.toLowerCase(), JSON.stringify(newTasks));
    };


    // Helper function to render task list
    const renderTaskList = (tasks, setTasks, dayName) => {
        if (tasks.length === 0) {
            return (
                <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ 
                        textAlign: 'center',
                        fontStyle: 'italic',
                        py: 2
                    }}
                >
                    No tasks yet
                </Typography>
            );
        }

        return (
            <Stack spacing={1}>
                {tasks.map((item, index) => (
                    <Card 
                        key={index}
                        sx={{ 
                            borderRadius: 1,
                            background: theme.palette.mode === 'dark' 
                                ? 'rgba(255,255,255,0.05)' 
                                : 'rgba(0,0,0,0.02)',
                        }}
                    >
                        <CardContent sx={{ 
                            p: 1.5,
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            '&:last-child': { pb: 1.5 }
                        }}>
                            <Typography 
                                variant="body2" 
                                sx={{ 
                                    fontWeight: 500,
                                    flex: 1,
                                    mr: 1
                                }}
                            >
                                {item}
                            </Typography>
                            <IconButton 
                                size="small" 
                                onClick={() => handleRemoveTask(tasks, setTasks, index, dayName)}
                                sx={{
                                    color: 'error.main',
                                    '&:hover': {
                                        backgroundColor: 'error.light',
                                        color: 'white',
                                    },
                                }}
                            >
                                <CloseIcon fontSize="small" />
                            </IconButton>
                        </CardContent>
                    </Card>
                ))}
            </Stack>
        );
    };

    // Helper function to render add task section
    const renderAddTaskSection = (dayTasks, setDayTasks, dayInput, setDayInput, dayName) => {
        return (
            <Box>
                <Typography 
                    variant="body2" 
                    component="h3" 
                    sx={{ 
                        mb: 1.5, 
                        fontWeight: '500'
                    }}
                >
                    Add New Task
                </Typography>
                <Stack spacing={1.5}>
                    <TextField
                        fullWidth
                        size="small"
                        label="Enter a new task"
                        variant="outlined"
                        value={dayInput}
                        onChange={(e) => setDayInput(e.target.value)}
                    />
                    <Button
                        onClick={() => handleAddTask(dayTasks, setDayTasks, dayInput, setDayInput, dayName)}
                        variant="contained"
                        size="small"
                        startIcon={<AddIcon />}
                        disabled={!dayInput.trim()}
                    >
                        Add Task
                    </Button>
                </Stack>
            </Box>
        );
    };


    const renderDayCard = (dayName, dayTasks, setDayTasks, dayInput, setDayInput) => {
        return (
            <Grid item xs={12} sm={6} md={4}>
                <Card 
                    sx={{ 
                        height: '100%',
                        borderRadius: 2,
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                >
                    <CardContent sx={{ p: 3, height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <Typography 
                            variant="h6" 
                            component="h2" 
                            sx={{ 
                                mb: 2,
                                fontWeight: '600',
                                color: 'primary.main'
                            }}
                        >
                            {dayName}
                        </Typography>
                        <Box sx={{ flex: 1, mb: 2 }}>
                            {renderTaskList(dayTasks, setDayTasks, dayName)}
                        </Box>

                        {renderAddTaskSection(dayTasks, setDayTasks, dayInput, setDayInput, dayName)}
                    </CardContent>
                </Card>
            </Grid>
        );
    };

    return (
        <>
            <Toolbar />
            <Container maxWidth="lg" sx={{ py: 3, px: 2 }}>
                <Box sx={{ mb: 4, textAlign: 'center' }}>
                    <Stack direction="row" alignItems="center" justifyContent="center" spacing={2} sx={{ mb: 2 }}>
                        <IconButton
                            onClick={() => navigate('Home')}
                            sx={{
                                color: 'primary.main',
                                '&:hover': {
                                    backgroundColor: 'primary.light',
                                    color: 'white',
                                },
                            }}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography 
                            variant="h4" 
                            component="h1" 
                            sx={{ 
                                fontWeight: 'bold',
                                color: 'primary.main'
                            }}
                        >
                            Weekly Planner
                        </Typography>
                    </Stack>
                </Box>

                <Grid container spacing={3}>
                    {renderDayCard("Monday", monday, setMonday, mondayInput, setMondayInput)}
                    {renderDayCard("Tuesday", tuesday, setTuesday, tuesdayInput, setTuesdayInput)}
                    {renderDayCard("Wednesday", wednesday, setWednesday, wednesdayInput, setWednesdayInput)}
                    {renderDayCard("Thursday", thursday, setThursday, thursdayInput, setThursdayInput)}
                    {renderDayCard("Friday", friday, setFriday, fridayInput, setFridayInput)}
                    {renderDayCard("Saturday", saturday, setSaturday, saturdayInput, setSaturdayInput)}
                    {renderDayCard("Sunday", sunday, setSunday, sundayInput, setSundayInput)}
                </Grid>
            </Container>
        </>
    );
}

export default WeeklyPlanner;

