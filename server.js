var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
app.use(session({
    secret: 'penguinsrock',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
  
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(`${__dirname}/static`)));
app.set('views', path.join(`${__dirname}/views`));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('index')
})
app.post('/result', function(req, res) {
    req.session.name = req.body.name
    req.session.loc = req.body.loc 
    req.session.lang = req.body.lang 
    req.session.comment = req.body.comment 
    res.locals.name = req.session.name 
    res.locals.loc = req.session.loc 
    res.locals.lang = req.session.lang 
    res.locals.comment = req.session.comment 
    console.log(req.body.name);
    res.render('results')
})


app.listen(8000, function(){
    console.log("How ya doing on 8000?");
})

