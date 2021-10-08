const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    res.end('Hola Mundo')
});

app.use((req, res, next)=>{
    res.status(404).send('404 Not Found')
})

module.exports = app;