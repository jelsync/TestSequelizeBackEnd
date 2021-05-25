const { Router } = require('express');
const router = Router();

const { getUser, getUsers, createUser, putUser, deleteUser } = require('../controller/user');

router.get('/', getUser);
router.get('/:id', getUsers);
router.post('/', createUser);
router.put('/:id', putUser);
router.delete('/:id', deleteUser);

module.exports = router;