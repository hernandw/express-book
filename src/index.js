const express = require('express');
const app = require('./app');
const path = require('path');
const router = require('./routes/');
const morgan = require('morgan');

app.set('views', path.join(__dirname, 'views'));
app.set('routes', path.join(__dirname, 'routes'));

app.set('view engine', 'ejs')
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use(router);



const main = async()=>{
    await app.listen(app.get('port'));
    console.log('Server on port 3000');
}

main();
