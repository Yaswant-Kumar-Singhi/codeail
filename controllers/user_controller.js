module.exports.profile = function(req,res){
    return res.render('user',{
        title : 'user controller working. Ejs loaded successfully '
    })
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
    //TODO LATER
}

module.exports.createSession = function(req,res){
    //TODO LATER
}