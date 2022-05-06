const newsRouter = require('./news');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
    app.get('/', (req, res) => {
        res.render('home');
    });

    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/me', meRouter);
}

module.exports = route;
