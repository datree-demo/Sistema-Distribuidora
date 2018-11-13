var loginModel = require('../models/loginModel')();

module.exports.realizarLogin = function(req, res){
    var dados = req.body;
    console.log(dados);

    loginModel.coletarDados(dados,function (erro, retorno){
        console.log(retorno);
        if(retorno.length > 0){
            if(dados.password == retorno[0].password){
                if(retorno[0].id_nivel == 1){
                    console.log('foi');
                    message:'Login realizado';
                    //renderizar página de cliente
                    res.render('Tela_devolução/index_cliente',{ layout: false });
                    return id_nivel;
                    
                }

                else{
                    res.render('Tela_Principal/index_func',{ layout: false });
                }


            }

            else{
                message:('Senha incorreta')
                res.render('Tela_Login/login',{ layout: false });
            }
        }
        else{
            message:('CPF não registrado');
            res.render('Tela_Login/login',{ layout: false });
        }
       
    })

}