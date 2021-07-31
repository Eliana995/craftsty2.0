const express = require('express'); /* necesito requerir express */
const router = express.Router();  /* necesito que, de express, me traiga el método ROUTER */
const {add} = require('../controllers/productsController')


/* PRODUCTS */
router.get('/add',add);     /* de router, uso el método get - la petición va a ser barra add - quien se hace cargo es add */
router.get('/detail/:id',detail);    /* /detail/:id = le doy un parámetro para que la vista me muestre el detalle del producto que quiero || VOY A CONTROLADOR A CREAR EL MÉTODO PARA QUE LO TOME BIEN */



module.exports = router;