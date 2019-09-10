const express = require('express');
const router = express.Router();
const carsDb = require('./carsDb')

router.get('/', (req, res) => {
    carsDb.get()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(400).json({ message: 'error retrieving vehicles' })
        })
})
router.get('/:id', (req, res) => {
    carsDb.getById(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(400).json({ message: 'error retrieving vehicle' })
        })
})
router.post('/', (req, res) => {
    carsDb.insert(req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(200).json({ message: 'error adding vehicle' })
        })
})
router.put('/:id', (req, res) => {
    carsDb.update(req.params.id, req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error=> {
            res.status(400).json({ message: 'error updating vehicle' })
        })
})// update
router.delete('/:id', (req, res) => {
    carsDb.remove(req.params.id)
        .then(item => {
            res.status(200).json(200)
        })
        .catch(item => {
            res.status(200).json({ message: 'error removing vehicle' })
        })
})

module.exports = router;