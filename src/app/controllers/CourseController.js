const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class courseController {
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(
                (course) => res.render('course/show', { course: mongooseToObject(course) }),
                //res.json(course),
            )
            .catch(next);
        // res.send('detail ' + req.params.slug);
    }

    create(req, res, next) {
        res.render('course/create');
    }

    store(req, res, next) {
        req.body.image = `https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png`;
        const formData = req.body;
        const course = new Course(formData);
        course.save();
        res.redirect('/');
    }
}

module.exports = new courseController();
