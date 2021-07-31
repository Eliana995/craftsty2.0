const fs = require('fs');
const path = require('path');
const categorias = require('../data/categories_db');
const productos = require('../data/products_db');  /* debo buscar un prod que matchee con el id */

module.exports = {
    add : (req,res) => {
        /* return res.send(categorias)  = esto me muestra el json en el navegador - así sé que está llegando */
        return res.render('productAdd',{
            categorias,
            productos
        }) 
        /* que me renderice la vista que estoy creando: productAdd */
    },
    detail : (req,res) => {         /* método creado || para llegar a este metodo, tengo que hacer una ruta*/
        let producto = productos.find(producto => producto.id === +req.params.id) /* de productos, metiendo el metodo find -donde cada elemento es un producto- espero que devuelva el prod cuyo id sea igual igual igual al req.params.id || el prod puede estar o no estar */
        return res.render('productDetail',{
            producto,
            productos    /* mando este producto a la vista - renderizado | trabajo sobre index */
        })
    }
}