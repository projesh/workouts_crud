// In ./src/routers/v1/user.route.js
const express = require('express')

const useController = require('../../controllers/user.controller')

const router = express.Router()

router
    .route('/')
    .get(useController.getAllUsers)
    .post(useController.createNewUser);

router
    .route('/:userId')
    .get(useController.getOneUser)
    .patch(useController.updateOneUser)
    .delete(useController.deleteOneUser);

module.exports = router;
