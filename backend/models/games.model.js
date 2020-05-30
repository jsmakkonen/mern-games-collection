const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gamesSchema = new Schema({
    title: { type: String, required: true, maxlength: 100 },
    developer: { type: String, required: true, maxlength: 100 },
    platform: { type: String, required: true, maxlength: 50 },
    description: { type: String, maxlength: 300 },
    release: { type: Number, maxlength: 5 },
    reviewscore: { type: Number, maxlength: 3 }
}, { timestamps: true });

const Game = mongoose.model('Game', gamesSchema);

module.exports = Game;