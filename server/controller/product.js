const { response } = require('express');
const { Op } = require("sequelize");
let Products = require('../../models').Product;
let Categories = require('../../models').Category;
let Vendors = require('../../models').Vendor;

const getProducts = async (req, res = response) => {
    const products = await Products.findAll();
    res.json(products);
}

const getCategoriesProduct = async (req, res = response) => {
    const { idCategory } = req.params;

    const product = await Products.findAll({
        include: {
            model: Categories,
            where: {
                id: idCategory
            }
        }
    });
    res.json(product);
}

const getVendorsProduct = async (req, res = response) => {
    const { idVendor } = req.params;

    const existeProduct = await Products.findByPk(idVendor);

    if (!existeProduct) {
        return res.json({
            mgs: 'Id product no existe'
        });
    }

    const product = await Products.findAll({
        include: {
            model: Vendors,
            where: {
                id: idVendor
            }
        }
    });
    res.json(product);
}

const getProductForVendorsAndCategory = async (req, res = response) => {
    const { idCategory, idVendor } = req.params;

    const products = await Products.findAll({
        where: {
            VendorId: idVendor,
            CategoryId: idCategory
        },
        include: [
            {
                model: Vendors,
                id: idVendor
            },
            {
                model: Categories,
                id: idCategory,
            }
        ]
    });

    res.json(products);
}


const getProduct = async (req, res = response) => {
    const { id } = req.params;
    const product = await Products.findByPk(id);

    if (!product) {
        return res.json({
            mgs: 'Producto no existe'
        });
    }
    return res.json(product);

}

const createProduct = async (req, res = response) => {
    const { body } = req;

    const existeName = await Products.findOne({
        where: {
            name: body.name
        }
    });
    if (existeName) {
        return res.json({
            mgs: 'Ya existe producto ' + body.name
        });
    }
    const product = Products.build(body);
    await product.save();
    res.json({
        ok: true
    });
}

const deleteProduct = async (req, res = response) => {
    const { id } = req.params;

    const product = await Products.findByPk(id);

    if (!product) {
        return res.json({
            mgs: 'No existe Producto'
        });
    }

    await product.destroy(); //ELIMINAR USUARIO DE LA BASE DE DATOS
    // await Product.update({ estado: false });
    res.json({
        mgs: 'Producto eliminado'
    });
}

const putProduct = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;

    console.log('i => ', id);
    console.log('body=> ', body);
    try {
        const product = await Products.findByPk(id);
        if (!product) {
            return res.json({
                mgs: 'No existe producto'
            });
        }

        await product.update(body);

        res.json(product);

    } catch (error) {
        console.log(error);
        res.json({
            mgs: 'Hable con el administrador',
        });

    }
}

module.exports = {
    getProducts,
    getCategoriesProduct,
    getVendorsProduct,
    getProductForVendorsAndCategory,
    getProduct,
    createProduct,
    deleteProduct,
    putProduct
}