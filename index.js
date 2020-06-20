// requiring libraries
const express = require('express');
const db = require('./config/mongoose');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('mongoose');
const saasMiddleware = require('node-sass-middleware');

const passportLocal = require('./config/passport-local-strategy');

const { urlencoded } = require('express');

//setting up the port number where my application will run
const port = 8000;

//making express function
app = express();

app.use(saasMiddleware({
    src: './assets/scss',
    dest : './assets/css/',
    debug : true,
    outputStyle: 'extended',
    prefix : '/css'
}))

//all the views are to rener is from some layout
app.use(expressLayout);
app.use(express.urlencoded());
app.use(cookieParser());

//extract style and script from sub pages
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );



app.use(express.static('./assets'));




//set up a view engine
app.set('view engine','ejs');
app.set('views','./views');


// mongo store is used to store the session cookies in the db
app.use(session({
    name : 'codeial',
    //TODO change the secret in production mode
    secret : 'blahsomething',
    saveUninitialized : false,
    resave : false,
    cookie : {
        maxAge : (1000 * 60 * 100)
    },
    store : new MongoStore(
        {
        
            mongooseConnection : mongoose.connection,
            autoRemove : 'disabled'

        }, function(err){
        console.log(err)
    })
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);


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