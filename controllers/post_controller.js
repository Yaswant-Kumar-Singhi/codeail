const User = require('../model/user')
const Post = require('../model/post')



module.exports.create = function(req,res){
    Post.create({
        content : req.body.content,
        user : req.user._id
    },function(err,post){
        if(err){
        console.log('err in creating a post'); return ;
        }
        return res.redirect('back');
    })

}

    
