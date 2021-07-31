var express = require('express');
var router = express.Router();

const {register,login} = require('../controllers/usersController') /* creo que la constante que va a recibir la reestructuración de users controller || ENTRE LLAVES, ahí traigo REGISTER Y LOGIN (métodos que correspoden del controlador)*/

/* GET users listing. */
router.get('/register',register);  /* Creo un controlador de usuario */
router.get('/login',login);  /* CREO LAS RUTAS PARA QUE REGISTRO SE HAGA CARGO DE REGISTER Y LOGIN SE HAGA CARGO DE LOGIN */

module.exports = router;
