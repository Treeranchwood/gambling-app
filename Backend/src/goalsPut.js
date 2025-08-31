// imports
const express = require('express');
const app = express();

// enables CORS which allows communication between browser tabs
app.use(require('cors')());
// parses JSON 
app.use(require('express').json());

// value to be sent via put request
let goalsData = {value: "Hi"}

// put request that is sent to the front end goals area
app.put('/api/goals', (req, res) => {
    try {
        console.log('Received PUT request with data:', req.body);
        
        // updates goals data if request body contains goals
        if (req.body.goals) {
            goalsData.value = req.body.goals;
        }
        
        // sends back updated goals data
        res.json({
            data: goalsData
        });
        
    } catch (error) {
        // handles errors with 500 status
        res.status(500).json({
            success: false,
            message: 'error',
            error: error.message
        });
    }
});

// app.get to bring in the value of the user's goals
app.get('/api/goals', (req, res) => {
    try {
        // sends back current goals data
        res.json({
            success: true,
            data: goalsData
        });
    } catch (error) {
        // handles errors with 500 status
        res.status(500).json({
            success: false,
            message: 'error',
            error: error.message
        });
    }
});

app.listen(3001);







