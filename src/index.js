const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const path = require('path');
const methodOverride = require('method-override');
const route = require('./routes');
const db = require('./config/db');

//connect to db
db.connect();

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static file
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
app.use(morgan('combined'));

// override with POST having ?_method
app.use(methodOverride('_method'));

//Template engine
app.engine(
    'hbs',
    hbs.engine({
        extname: '.hbs',
        helpers: { sum: (val1, val2) => val1 + val2 },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
