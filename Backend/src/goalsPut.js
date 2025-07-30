const express = require('express');
const app = express();

app.use(require('cors')());
app.use(require('express').json());

let goalsData = {value: "Hi"}

app.put('/api/goals', (req, res) => {
    try {
        console.log('Received PUT request with data:', req.body);
        
        if (req.body.goals) {
            goalsData.value = req.body.goals;
        }
        
        res.json({
            data: goalsData
        });
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error',
            error: error.message
        });
    }
});

app.get('/api/goals', (req, res) => {
    try {
        res.json({
            success: true,
            data: goalsData
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'error',
            error: error.message
        });
    }
});

app.listen(3001);