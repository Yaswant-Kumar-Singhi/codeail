module.exports.profile = function(req,res){
    return res.render('user',{
        title : 'user controller working. Ejs loaded successfully '
    })
}