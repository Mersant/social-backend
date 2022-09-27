const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(a) {
                return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(a);
            }, 
        },
    },
    toJSON: {
        getters: true,
    },
    id: false, 
});

module.exports = userSchema;