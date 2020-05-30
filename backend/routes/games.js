const router = require('express').Router();
const Game = require('../models/games.model');

router.route('/').get((req, res) => {
    Game.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Game.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const developer = req.body.developer;
    const platform = req.body.platform;
    const description = req.body.description;
    const release = Number(req.body.release);
    const reviewscore = Number(req.body.reviewscore);

    const newGame = new Game({
        title,
        developer,
        platform,
        description,
        release,
        reviewscore
    });

    newGame.save()
    .then(res.json('Game added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Game.findByIdAndDelete(req.params.id)
    .then(res.json('One game was deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/:id').post((req, res) => {
    Game.findById(req.params.id)
    .then(game => {
        game.title = req.body.title;
        game.developer = req.body.developer;
        game.platform = req.body.platform;
        game.description = req.body.description;
        game.release = Number(req.body.release);
        game.reviewscore = Number(req.body.reviewscore);

        game.save()
        .then(() => res.json('Game updated!'))
        .catch(err => res.status(400).json(`Error: ${err}`));
    })
    .catch(err => res.status(400).json(`Error: ${err}`));
})

module.exports = router;