const { Router } = require('express');
const router = Router();

const { getProducts, getProduct, createProduct, deleteProduct, putProduct, getCategoriesProduct } = require('../controller/product');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.get('/category/:idCategory', getCategoriesProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', putProduct);

module.exports = router;