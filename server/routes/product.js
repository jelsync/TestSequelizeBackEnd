const { Router } = require('express');
const router = Router();

const { getProducts, getProduct, createProduct, deleteProduct, putProduct } = require('../controller/product');

router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', putProduct);

module.exports = router;