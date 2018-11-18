var devolucaoModel = require('../models/devolucaoModel');


module.exports.inserir = function(req, res){
    var dados = req.body;
    devolucaoModel.inserirDados(dados,function(erro, retorno){
        res.redirect('/index_cliente');
    });

    

}