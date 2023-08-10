// In ./src/controllers/user.controller.js
const httpStatus = require('http-status')
const { userService } = require('../servers')

const createNewUser = async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ message: 'Create new user.', user })
};

const getAllUsers = async (req, res) => {
    const users = await userService.getAllUsers();
    res.send({ message: 'Get all users.', users })
};

const getOneUser = async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    res.send({ message: 'Get a user.', user })
};

const updateOneUser = async (req, res) => {
    const user = await userService.updateUserById(req.params.userId, req.body);
    res.send({ message: 'Update a user.', user })
};

const deleteOneUser = async (req, res) => {
    console.log(req.params.userId);
    const user = await userService.deleteUserById(req.params.userId);
    res.send({ message: 'Delete a user.', user })
}

module.exports = {
    createNewUser,
    getAllUsers,
    getOneUser,
    updateOneUser,
    deleteOneUser
}
