const Post = require('../model/post');

module.exports.home = function(req, res){
    // console.log(req.cookies);
    // res.cookie('user_id', 25);

     Post.find({}, function(err, post){
         return res.render('home', {
             title: "Codeial | Home",
             post:  post
         });
     });

    /*
    // populate the user of each post
    Post.find({}).populate("user").exec(function(err, post){
        return res.render('home', {
            title: "Codeial | Home",
            post:  post
        });
    })
*/
}

// module.exports.actionName = function(req, res){}