const { Schema, model, default: mongoose } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: {
        type: Schema.Types.ObjectId,
        auto: true,
    },
    reactionBody: {
        type: Schema.Types.ObjectId,
        required: true,
        minlength: 1,
        maxlength: 280,
    },
    username: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    toJSON: {
        virtuals: true,
    },
});