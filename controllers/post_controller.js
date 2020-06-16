module.exports.post = function (req,res) {
    return res.render('post',{
        title : "post controller working. Ejs loaded successfully"
    })
    
}