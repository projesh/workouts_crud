// In ./src/models/user.model.js
const mongoose = require('mongoose')

const { roles } = require('../config/roles')

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            validate(value) {

            }
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minlength: 8,
            validate(value) {

            },
            private: true,
        },
        role: {
            type: String,
            enum: roles,
            default: 'user'
        },
        isEmailVerified: {
            type: Boolean,
            default: true
        }
    }
);

const User = mongoose.model('User', userSchema)

module.exports = User;
