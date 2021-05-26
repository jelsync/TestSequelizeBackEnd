const { response } = require('express');
let Users = require('../../models').User;

const getUsers = async (req, res = response) => {
    const users = await Users.findAll();
    res.json({
        users
    });
}

const getUser = async (req, res = response) => {
    const { id } = req.params;
    const user = await Users.findByPk(id);
    if (!user) {
        return res.json({
            mgs: 'Usuario no existe'
        });
    }
    return res.json(user);

}

const createUser = async (req, res = response) => {
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

const deleteUser = async (req, res = response) => {
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

const putUser = async (req, res = response) => {
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
    getUser,
    getUsers,
    createUser,
    deleteUser,
    putUser
}