
const Post = require('../model/post')



module.exports.create = function(req,res){
    Post.create({
        content : req.body.content,
        user : req.user._id
    },function(err,Post){
        if(err){
        console.log('err in creating a post'); return ;
        }
        //console.log(Post)
        return res.redirect('back');
       
    })

}

    
