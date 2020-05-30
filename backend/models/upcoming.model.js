const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const upcomingGamesSchema = new Schema({
    title: { type: String, required: true, maxlength: 100 },
    developer: { type: String, required: true, maxlength: 100 },
    platform: { type: String, required: true, maxlength: 50 },
    description: { type: String, maxlength: 300 },
    release: { type: String, maxlength: 50 }
}, { timestamps: true });

const Upcoming = mongoose.model('Upcoming', upcomingGamesSchema);

module.exports = Upcoming;