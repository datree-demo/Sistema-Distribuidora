var loginController = require('../controllers/loginController');


module.exports = function(app){

    app.get('/',function(req,res){
        res.render('Tela_Login/login', { layout: false });
    });

    app.post('/login',function(req,res){
        loginController.realizarLogin(req,res);
    });

    
}