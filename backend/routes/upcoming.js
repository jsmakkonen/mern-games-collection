const router = require('express').Router();
const Upcoming = require('../models/upcoming.model');

router.route('/').get((req, res) => {
    Upcoming.find()
    .then(upcoming => res.json(upcoming))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const developer = req.body.developer;
    const platform = req.body.platform;
    const description = req.body.description;
    const release = req.body.release;

    const newUpcomingGame = new Upcoming({
        title,
        developer,
        platform,
        description,
        release
    });

    newUpcomingGame.save()
    .then(res.json('Game added to watchlist!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Upcoming.findByIdAndDelete(req.params.id)
    .then(res.json('Upcoming game was deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/:id').post((req, res) => {
    Upcoming.findById(req.params.id)
    .then(item => {
        item.title = req.body.title;
        item.developer = req.body.developer;
        item.platform = req.body.platform;
        item.description = req.body.description;
        item.release = req.body.release;

        item.save()
        .then(() => res.json('Upcoming game updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;