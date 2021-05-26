const { Router } = require('express');
const router = Router();

const { getUser, getUsers, createUser, putUser, deleteUser } = require('../controller/user');

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.delete('/:id', deleteUser);
router.put('/:id', putUser);

module.exports = router;