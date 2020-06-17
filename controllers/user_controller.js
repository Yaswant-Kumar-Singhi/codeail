const User = require('../model/user');
const { create } = require('../model/user');


module.exports.profile = function(req,res){
    if(req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err,user){
            if(user){
                return res.render('user',{
                    title : "User Profile",
                    user : user
                })

            }
            return res.redirect('/users/sign-in');
        })

    }else{
        return res.redirect('/users/sign-in');
    }
}
//render the sign up page
module.exports.signup = function(req,res){
    return res.render('user_sign_up',{
        title : "Codeail | Sign Up"
    })
}


//render the sign in page
module.exports.signin = function(req,res){
    return res.render('user_sign_in',{
        title : "Codeail | Sign In"
    })
}

//get the sign up data
module.exports.create = function(req,res){
    if(req.body.password != req.body.confirmpassword){
        return res.redirect('back');
    }

    User.findOne({email:req.body.email},function(err,user){
        if(err) {console.log("eror in finding the user in signup"); return; }

        if(!user){
            User.create(req.body,function(err,user){
                if(err) {console.log("eror in creating user in signup"); return; } 

                return res.redirect('/users/sign-in');
            })
        }
        else{
            return res.redirect('back');
        }
    })
        
    
    
    
}

module.exports.createSession = function(req,res){
    //steps to auth the user
    //find the user

    User.findOne({email : req.body.email},function(err,user){
        if(err){console.log("error in finding the user in sign in page"); return; }

        //handle user found

        if(user){

            //handle password which does not match

            if(user.password != req.body.password){ return res.redirect('back');}

            //handle create session

            res.cookie('user_id',user_id)
            return res.redirect('/users/profile')

        }else{

            //handle user not found
            return res.redirect('back');

        }



    })

    

    //handle password which does not match

    //handle create session

    


}