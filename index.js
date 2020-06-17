// requiring libraries
const express = require('express');
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const { urlencoded } = require('express');

//setting up the port number where my application will run
const port = 8000;

//making express function
app = express();

//all the views are to rener is from some layout
app.use(expressLayout);
app.use(express.urlencoded());
app.use(cookieParser());

//extract style and script from sub pages
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );

// use express router
app.use('/',require('./routes'));


app.use(express.static('./assets'));




//set up a view engine
app.set('view engine','ejs');
app.set('views','./views');


//server on
app.listen(port,function(err,data){
    if(err){
        console.log("Error in running the server on Listening ", err);
        return ;
    }
    console.log(`Succcussfully connected to ${port}`);
});