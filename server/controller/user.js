const {response} = require('express');

const getUser = (req, res = response) => {
    res.json({
        ok: true
    });
}

const getUsers = (req, res = response) => {
    res.json({
        ok: true
    });
}

const createUser = (req, res = response) => {
    res.json({
        ok: true
    });
}

const deleteUser = (req, res = response) => {
    res.json({
        ok: true
    });
}

const putUser = (req, res = response) => {
    res.json({
        ok: true
    });
}

module.exports = {
    getUser,
    getUsers, 
    createUser,
    deleteUser,
    putUser
}