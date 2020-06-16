// Creating Express
const express = require('express');
const db = require('./config/mongoose');

//setting up the port number where my application will run
const port = 8000;

app = express();

/*setting up routers and assets
app.use('/',require('./routes'));
app.use(express.static('assets'));


//setting  up view engine to fetch records
app.set('view engine','ejs');
app.set('views','./views');
*/

app.listen(port,function(err,data){
    if(err){
        console.log("Error while Listening ", err);
        return ;
    }
    console.log("Succcussfully connected");
});