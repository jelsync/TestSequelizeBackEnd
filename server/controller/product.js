const { response } = require('express');
let Products = require('../../models').Product;
let Categories = require('../../models').Category;

const getProducts = async (req, res = response) => {
    const products = await Products.findAll({
        include: [{
            model: Categories,
            where: {
                id: 1
            }
        }]
    });
    res.json(products);
}

// // const getProduct = async (req, res = response) => {
// //     // const { id } = req.params;
// //     // const user = await Products.findByPk(id);
// //     // if (!user) {
// //     //     return res.json({
// //     //         mgs: 'Usuario no existe'
// //     //     });
// //     // }
// //     // return res.json(user);

// // }

// // const createProduct = async (req, res = response) => {
// //     // const { body } = req;

// //     // const existeEmial = await Products.findOne({
// //     //     where: {
// //     //         email: body.email
// //     //     }
// //     // });
// //     // if (existeEmial) {
// //     //     return res.json({
// //     //         mgs: 'Ya existe corre ' + body.email
// //     //     });
// //     // }
// //     // const user = Products.build(body);
// //     // await user.save();
// //     // res.json({
// //     //     ok: true
// //     // });
// // }

// // const deleteProduct = async (req, res = response) => {
// //     // const { id } = req.params;

// //     // const user = await Products.findByPk(id);

// //     // if (!user) {
// //     //     return res.json({
// //     //         mgs: 'No existe usuario '
// //     //     });
// //     // }

// //     // await user.destroy(); //ELIMINAR USUARIO DE LA BASE DE DATOS
// //     // // await Product.update({ estado: false });
// //     // res.json({
// //     //     mgs: 'Usuario eliminado'
// //     // });
// // }

// // const putProduct = async (req, res = response) => {
// //     // const { id } = req.params;
// //     // const { body } = req;

// //     // try {
// //     //     const user = await Products.findByPk(id);

// //     //     if (!user) {
// //     //         return res.json({
// //     //             mgs: 'No existe usuario ' + body.firstName
// //     //         });
// //     //     }

// //     //     await Products.update(body);

// //     //     res.json(user);

// //     // } catch (error) {
// //     //     console.log(error);
// //     //     res.json({
// //     //         mgs: 'Hable con el administrado',
// //     //     });

// //     // }
// // }

module.exports = {
    getProducts
    // getProduct,
    // createProduct,
    // deleteProduct,
    // putProduct
}