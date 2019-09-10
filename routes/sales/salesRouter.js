const express = require('express');
const router = express.Router();
const salesDb = require('./salesDb');

router.get('/', (req, res) => {
    salesDb.get()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(error => {
            res.status(400).json({ message: 'error retrieving vehicles' })
        })
})
router.get('/:id', (req, res) => {
    salesDb.getById(req.params.id)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(400).json({ message: 'error retrieving vehicle' })
        })
})
router.post('/', (req, res) => {
    salesDb.insert(req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error => {
            res.status(200).json({ message: 'error adding vehicle' })
        })
})
router.put('/:id', (req, res) => {
    salesDb.update(req.params.id, req.body)
        .then(item => {
            res.status(200).json(item)
        })
        .catch(error=> {
            res.status(400).json({ message: 'error updating vehicle' })
        })
})
router.delete('/:id', (req, res) => {
    salesDb.remove(req.params.id)
        .then(item => {
            res.status(200).json(200)
        })
        .catch(item => {
            res.status(200).json({ message: 'error removing vehicle' })
        })
})

module.exports = router;