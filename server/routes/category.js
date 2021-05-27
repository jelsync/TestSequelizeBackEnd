const { Router } = require('express');
const router = Router();

const { getCategories, getCategory } = require('../controller/category');

router.get('/', getCategories);
router.get('/:id', getCategory);

module.exports = router;