const express = require('express');
const router = express.Router();
// const carsDb = require('./carsDb')
const carsDb = require('../../data/db-config');

router.get('/', (req, res) => {
    carsDb('cars')
        .select('*')
            .then(users => {
                res.status(200).json(users)
            })
            .catch(err => {
                res.status(400).json({ message: 'error retrieving vehicles'})
            })
})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    carsDb('cars')
        .where({ id })
        .first()
        .then(budget => {
            res.status(200).json(budget)
        })
        .catch(err => {
            res.status(400).json({ message: 'error retrieving vehicle'})
        })
})

router.post('/', (req, res) => {
    const postData = req.body;

    carsDb('cars')
        .insert(postData, 'id')
        .then(([id]) => {
            carsDb('cars')
                .where({ id })
                .first()
                .then(budget => {
                    res.status(200).json(budget)
                })
                .catch(err => {
                    res.status(400).json({ message: 'error retrieving vehicle' })
                })
        })
        .catch(err => {
            res.status(400).json({ message: 'error adding vehicle' })
        })
}) // add validation

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const changes = req.body;

    carsDb('cars')
        .where('id', id)
        .update(changes)
        .then(count => {
            res.status(200).json({ message: `updated ${count}`})
        })
        .catch(err => {
            res.status(400).json({ message: 'error updating vehicle' })
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    carsDb('cars')
        .where('id', id)
        .del()
        .then(count => {
            res.status(200).json({ message: `deleted ${count}`})
        })
        .catch(err => {
            res.status(400).json({ message: 'error deleting vehicle' })
        })
})

// router.get('/', (req, res) => {
//     carsDb.get()
//         .then(user => {
//             res.status(200).json(user)
//         })
//         .catch(error => {
//             res.status(400).json({ message: 'error retrieving vehicles' })
//         })
// })
// router.get('/:id', (req, res) => {
//     carsDb.getById(req.params.id)
//         .then(item => {
//             res.status(200).json(item)
//         })
//         .catch(error => {
//             res.status(400).json({ message: 'error retrieving vehicle' })
//         })
// })
// router.post('/', (req, res) => {
//     carsDb.insert(req.body)
//         .then(item => {
//             res.status(200).json(item)
//         })
//         .catch(error => {
//             res.status(200).json({ message: 'error adding vehicle' })
//         })
// })
// router.put('/:id', (req, res) => {
//     carsDb.update(req.params.id, req.body)
//         .then(item => {
//             res.status(200).json(item)
//         })
//         .catch(error=> {
//             res.status(400).json({ message: 'error updating vehicle' })
//         })
// })// update
// router.delete('/:id', (req, res) => {
//     carsDb.remove(req.params.id)
//         .then(item => {
//             res.status(200).json(200)
//         })
//         .catch(item => {
//             res.status(200).json({ message: 'error removing vehicle' })
//         })
// })

module.exports = router;