const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');
// const { connect } = require('http2');

app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
// HTTP request
// app.use(morgan('combined'))

// TEMPLATE engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource/views'));
console.log(path.join(__dirname, 'resource/views'));

route(app);

// connect db
const db = require('./config/db');
db.connect();

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});
