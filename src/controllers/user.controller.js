// In ./src/controllers/user.controller.js
const httpStatus = require('http-status')
const pick = require('../utils/pick')
const ApiError = require('../utils/ApiError')
const catchAsync = require('../utils/catchAsyc')
const { userService } = require('../servers')

const createNewUser = catchAsync(async (req, res) => {
    const user = await userService.createUser(req.body);
    res.status(httpStatus.CREATED).send({ message: 'Create new user.', user })
});

const getAllUsers = catchAsync(async (req, res) => {
    const users = await userService.getAllUsers();
    res.send({ message: 'Get all users.', users })
});

const getFilteredUsers = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'role']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await userService.queryUsers(filter, options);
    res.send(result);
});

const getOneUser = catchAsync(async (req, res) => {
    const user = await userService.getUserById(req.params.userId);
    res.send({ message: 'Get a user.', user })
});

const updateOneUser = catchAsync(async (req, res) => {
    const user = await userService.updateUserById(req.params.userId, req.body);
    res.send({ message: 'Update a user.', user })
});

const deleteOneUser = catchAsync(async (req, res) => {
    const user = await userService.deleteUserById(req.params.userId);
    res.send({ message: 'Delete a user.', user })
});

module.exports = {
    createNewUser,
    getAllUsers,
    getFilteredUsers,
    getOneUser,
    updateOneUser,
    deleteOneUser
}
