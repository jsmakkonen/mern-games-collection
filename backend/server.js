const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection established successfully.');
});

const gamesRouter = require('./routes/games');
const gearsRouter = require('./routes/gears');
const upcomingRouter = require('./routes/upcoming');

app.use('/games', gamesRouter);
app.use('/gears', gearsRouter);
app.use('/upcoming', upcomingRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});