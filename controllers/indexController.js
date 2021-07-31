const productos = require('../data/products_db');
const tutoriales = require('../data/tutorials_db');

module.exports = {
    index : (req,res) => {   /* que exporte el controlador/ el primer metodo: index */
        /* console.log(productos);  EN CONSOLA, MUESTRA EL JSON PARSEADO  */
        /* return res.send(tutoriales) */   /* Me muestra el json en el navegador */
        return res.render('index',{    /* render le pertenece a res | RENDERIZO LA VISTA QUE SE LLAMA INDEX || No envío el archivo, lo renderizo (porque el navegador no lee EJS, sino HTML - Render lo convierte a html) */
            title : "Craftsty2.0",  /* en este objeto literal que estoy creando, le doy un valor a title */
            productos,  /* sería una redundancia crear la variable productos y darle valor productos (productos: productos) */
            nuevos : productos.filter(producto => productos.category === "nuevo"), /* creo un filtro donde NUEVO tenga el valor de un producto filtrado */
            refact : productos.filter(producto => productos.category === "refaccionado"),
            usados : productos.filter(producto => productos.category === "usado"),
            tutoriales
        })   
    }
}