// const http = require('http');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const express = require('express');

//import routes
const indexRouter = require('./routes/indexRouter');
const formRouter = require('./routes/formRouter');

const app = express();

//logs details about the request
app.use(logger('dev'));

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));

app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter)
.post('/')
app.use('/', formRouter);



app.listen(8080, ()=> {
    console.log('Server is running on port 8080')
});