const productos = require('../data/products_db');

module.exports = {    /* module exports es igual a dos objetos literales || dos metodos */
    register : (req,res) => {
        return res.render('register',{
            productos
        });  /* retorna la vista renderizada de register */
    },
    login : (req,res) => {
        return res.render('login',{
            productos
        });
    }
}



/* acá tmb debo hacer que, cuando me renderice login, tmb lo hagan los productos -- DEBE IR DENTRO DEL MÉTODO, NO FUERA: login : (req,res) => {
        return res.render('login');
        productos   X ASÍ NO X
    } */