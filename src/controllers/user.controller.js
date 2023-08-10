// In ./src/controllers/user.controller.js
const httpStatus = require('http-status')
const { userService } = require('../servers')

const createNewUser = async (req, res) => {
    const { body } = req;
    const user = await userService.createUser(body);
    res.status(httpStatus.CREATED).send({ message: 'Create new user.', user })
};

const getAllUsers = (req, res) => {
    res.send({ message: 'Get all users.' })
};

const getOneUser = (req, res) => {
    res.send({ message: 'Get one user.' })
};

const updateOneUser = (req, res) => {
    res.send({ message: 'Update one user.' })
};

const deleteOneUser = (req, res) => {
    res.send({ message: 'Delete one user.' })
}

module.exports = {
    createNewUser,
    getAllUsers,
    getOneUser,
    updateOneUser,
    deleteOneUser
}
