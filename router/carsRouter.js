const express = require('express')

const dbCars = require('./carsModel')

const router = express.Router()

router.get('/', (req, res) => {
    dbCars.getAll()//get all takes no parameters
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json({message: 'Try again!', err})
        })
})

router.post('/', (req, res) =>{
    dbCars.addCars(req.body)
          .then(item => {
              res.status(201).json(item)
          })
          .catch(err => {
              res.status(500).json({message: 'Try again!', err})
          })
})

module.exports = router;