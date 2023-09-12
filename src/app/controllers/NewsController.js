
class NewsController {
    index(req,res) {
        res.render('news')
    }   
    show(req,res){
        res.send("detail News")
    }
}

module.exports = new NewsController;