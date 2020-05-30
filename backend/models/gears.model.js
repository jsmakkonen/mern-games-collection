const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gearsSchema = new Schema({
    title: { type: String, required: true, maxlength: 100 },
    cpu: { type: String, required: true, maxlength: 100 },
    gpu: { type: String, required: true, maxlength: 50 },
    memory: { type: String, maxlength: 300 },
    storage: { type: String, maxlength: 100 },
    additional: { type: String, maxlength: 100 }
}, { timestamps: true });

const Gear = mongoose.model('Gear', gearsSchema);

module.exports = Gear;