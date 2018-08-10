
const mongoose = require('mongoose');

var Task = mongoose.model('Task', new mongoose.Schema({
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }}));

module.exports = Task; 