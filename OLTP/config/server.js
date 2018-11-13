module.exports = function(){
    var express = require('express');
    var bodyParser = require('body-parser');
    var expressValidator = require('express-validator');
    var expressLayouts = require('express-ejs-layouts');

  
    var app = express();
    app.set('view engine','ejs');
    app.set("view options", { layout: false });
    app.set('views','./app/views');
  
    app.use(bodyParser.json()); // support json encoded bodies
    app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

    app.use(expressLayouts)          // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação

  
    app.use(expressValidator());
  
    var rotas = require('../app/routes/web');
    rotas(app);
  
    app.listen(8000,function(){
      console.log("localhost:8000");
    });
  
  };
  