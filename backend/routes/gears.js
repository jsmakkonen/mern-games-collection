const router = require('express').Router();
const Gear = require('../models/gears.model');

router.route('/').get((req, res) => {
    Gear.find()
    .then(gears => res.json(gears))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').get((req, res) => {
    Gear.findById(req.params.id)
    .then(gear => res.json(gear))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const cpu = req.body.cpu;
    const gpu = req.body.gpu;
    const memory = req.body.memory;
    const storage = req.body.storage;
    const additional = req.body.additional;

    const newGear = new Gear({
        title,
        cpu,
        gpu,
        memory,
        storage,
        additional,
    });

    newGear.save()
    .then(res.json('Gear added!'))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

router.route('/:id').delete((req, res) => {
    Gear.findByIdAndDelete(req.params.id)
    .then(res.json('Gear was deleted!'))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

router.route('/:id').post((req, res) => {
    Gear.findById(req.params.id)
    .then(gear => {
        gear.title = req.body.title;
        gear.cpu = req.body.cpu;
        gear.gpu = req.body.gpu;
        gear.memory = req.body.memory;
        gear.storage = req.body.storage;
        gear.additional = req.body.additional;

        gear.save()
        .then(() => res.json('Gear updated'))
        .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;