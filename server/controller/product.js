const { response } = require('express');
// let Users = require('../../models').User;
// let Buys = require('../../models').Buy;
// let UserProducts = require('../../models').UserProduct;
// let Emails = require('../../models').Email;

const getProducts = async (req, res = response) => {
    const users = await Users.findAll({
        // include:[{
        //     model: Buys,
        //     where:{
        //         userId: 1
        //     }
        // }]
    });
    res.json(users);
}

const getProduct = async (req, res = response) => {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    if (!user) {
        return res.json({
            mgs: 'Usuario no existe'
        });
    }
    return res.json(user);

}

const createProduct = async (req, res = response) => {
    const { body } = req;

    const existeEmial = await Users.findOne({
        where: {
            email: body.email
        }
    });
    if (existeEmial) {
        return res.json({
            mgs: 'Ya existe corre ' + body.email
        });
    }
    const user = Users.build(body);
    await user.save();
    res.json({
        ok: true
    });
}

const deleteProduct = async (req, res = response) => {
    const { id } = req.params;

    const user = await Users.findByPk(id);

    if (!user) {
        return res.json({
            mgs: 'No existe usuario '
        });
    }

    await user.destroy(); //ELIMINAR USUARIO DE LA BASE DE DATOS
    // await Users.update({ estado: false });
    res.json({
        mgs: 'Usuario eliminado'
    });
}

const putProduct = async (req, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const user = await Users.findByPk(id);

        if (!user) {
            return res.json({
                mgs: 'No existe usuario ' + body.firstName
            });
        }

        await user.update(body);

        res.json(user);

    } catch (error) {
        console.log(error);
        res.json({
            mgs: 'Hable con el administrado',
        });

    }
}

module.exports = {
    getProduct,
    getProducts,
    createProduct,
    deleteProduct,
    putProduct
}