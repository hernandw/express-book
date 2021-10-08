const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.render('index')
});

app.use((req, res, next)=>{
    res.status(404).send('404 Not Found')
})

module.exports = app;