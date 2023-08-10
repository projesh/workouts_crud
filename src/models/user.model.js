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

/**
 * Check if email is taken
 * @param {string} email - The user's email
 * @param {ObjectId} [excludeUserId] - The id of the user to be excluded
 * @returns {Promise<boolean>}
 */
userSchema.statics.isEmailTaken = async function (email, excludeUserId) {
    const user = await this.findOne({ email, _id: { $ne: excludeUserId } });
    return !!user;
};

const User = mongoose.model('User', userSchema)

module.exports = User;
