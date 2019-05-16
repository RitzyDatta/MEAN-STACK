

const express = require('express');
const app = express(); // this fuction will return an express app. this is defined in line 1

app.use((req,res,next)  => {
    console.log('First Middleware');
    next();
});

app.use((req,res,next) => {
    res.send('Hello from express!')
});
