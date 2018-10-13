const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const OptionSchema = new Schema({
    TIMESTAMP: {
        type: String,
        required: true
    },
    EXPIRY_DT: {
        type: String,
        required: true
    },
    STRIKE_PR: {
        type: Number,
        required: true
    },
    OPTION_TYP: {
        type: String
    },
    CLOSE: {
        type: Number,
        required: true
    },
    UNDERLYING_CLOSE: {
        type: Number,
        required: true
    },
    DAYS_TO_EXP: {
        type: Number,
        required: true
    },
    NEAR: {
        type: String,
        required: true
    },
    FAR: {
        type: String,
        required: true
    },
    FARTHEST: {
        type: String,
        required: true
    },
    NEAR_CHECK: {
        type: Boolean,
        required: true
    },
    FAR_CHECK: {
        type: Boolean,
        required: true
    },
    FARTHEST_CHECK: {
        type: Boolean,
        required: true
    },
    DIFFERENCE: {
        type: Number,
        required: true
    },
    STRIKE_RANK: {
        type: Number,
        required: true
    },


});

module.exports = Option = mongoose.model('options', OptionSchema);
