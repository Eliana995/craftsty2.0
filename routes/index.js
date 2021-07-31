var express = require('express');
var router = express.Router();

const {index} = require('../controllers/indexController')   /* creo que la constante que va a recibir la reestructuración del index controller || ENTRE LLAVES, ahí traigo INDEX (El método que correspode del controlador)*/

/* GET home page. */
router.get('/', index);   /* quien se encarga de esto(la barra / ) es index */
/* "creo" una ruta de usuarios porque REGISTER Y LOGIN le pertenecen a usuario */


module.exports = router;
