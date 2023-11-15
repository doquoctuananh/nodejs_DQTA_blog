const Course = require('../models/Course');

class SiteController {
    home(req, res, next) {
        Course.find({})
            .lean()
            .then((courses) => {
                res.render('home', { courses });
            })

            .catch((err) => next(err));
    }

    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
