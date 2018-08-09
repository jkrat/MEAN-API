
const mongoose = require('mongoose');

var Person = mongoose.model('Person', new mongoose.Schema({
    name: { type: String, default: '' }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}));

module.exports = Person;