//npm
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
//files
const config = require('./config');
const massive = require('massive');
const {getInfo} = require("./controller/mainCtrl.js");
//controllers for the server
//const mainCtrl = require('./controller/mainCtrl.js');
//app set up for express
const corsOptions = {
  origin: 'http://localhost:3000'
};
const app = express();

app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(session({
  //secret: config.sessionSecret,
  secret: "I like to walk the dog with my yoyo",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false}
}));
app.use(passport.initialize());
app.use(passport.session());

/////////////
// DATABASE //
/////////////
//sync to database
// const connectionString = 'postgres://postgres:'+config.masPas+'@localhost/mpdb';
// // console.log(connectionString);
// const conn = massive.connectSync({ connectionString: connectionString});
// //add your connection to express
// app.set('db', conn);
// //declare a db object for requests
// const db = app.get('db');

app.get('/api/iI/:ip',getInfo)
//export app
module.export = app;

// app.post('/api/cart',mainCtrl.postCart);
app.listen(3000, function(){
  console.log('listening to port: ', config.getDefaultPort());
});
