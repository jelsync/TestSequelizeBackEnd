const { response } = require('express');
let Categories = require('../../models').Category;

const getCategories = async (req, res = response) => {
    const categories = await Categories.findAll();
    res.json(categories);
}

const getCategory = async (req, res = response) => {
    const { id } = req.params;
    const catergory = await Categories.findByPk(id);
    res.json(catergory)
}

module.exports = {
    getCategories,
    getCategory
}