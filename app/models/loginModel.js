var db = require('../../config/db');


module.exports = function(){

    this.coletarDados = function(dados,retorno){
        var con = db();
      return con.query('SELECT cpf, nome, password FROM users WHERE cpf = ?', dados.cpf,retorno);


    };

    return this;
}
