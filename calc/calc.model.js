const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    firstInput: { type: String, required: true },
    secondInput: { type: String, required: true },
    result: { type: String },
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Calc', schema);