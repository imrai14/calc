const express = require('express');
const router = express.Router();
const userService = require('./calc.service');

// routes
router.post('/saveData', saveData);
router.get('/getData/:id', getData);

module.exports = router;

function saveData(req, res, next) {
    userService.saveData(req.body)
        .then(data => data ? res.json(data) : res.status(400).json({ message: 'Something went wrong' }))
        .catch(err => next(err));
}

function getData(req, res, next) {
    userService.getData(req.params.id)
        .then(data => data ? res.json(data) : res.status(400).json({ message: 'Something went wrong' }))
        .catch(err => next(err));
}

