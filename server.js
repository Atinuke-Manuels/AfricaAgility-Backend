require('dotenv').config();
// import the express module
const express = require('express');
// create the express app
const app=  express();


//The view engine will now use ejs
app.set('view engine', 'ejs');

//This is used to define the port if default port is not present it uses the port in the env file
const port = process.env.PORT || 5000
// define the listening port
// define your route
app.get('/', (req, res) => {
    // res.send('Hello everyone')
    res.render('index');
})
app.listen(port, () => {
    console.log(`App is listening port ${port}`);
})