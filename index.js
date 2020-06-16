// requiring libraries
const express = require('express');
const db = require('./config/mongoose');

//setting up the port number where my application will run
const port = 8000;

//making express function
app = express();

// use express router
app.use('/',require('./routes'));


//server on
app.listen(port,function(err,data){
    if(err){
        console.log("Error in running the server on Listening ", err);
        return ;
    }
    console.log(`Succcussfully connected to ${port}`);
});