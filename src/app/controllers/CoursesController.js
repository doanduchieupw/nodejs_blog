const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class CoursesController {
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
}

module.exports = new CoursesController();
