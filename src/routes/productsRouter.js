const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// ruta que me muestra todo el listado de guitarras
router.get('/guitars', productsController.guitars);
// ruta para mostar todos los accesorios
router.get('/accesories', productsController.accesories);

router.get('/cables', productsController.cables);

router.get('/pedals', productsController.pedals);
// detalle de producto
router.get('/detail/:id', productsController.detail);
// ruta carrito
router.get('/carrito', productsController.carrito);







module.exports = router;