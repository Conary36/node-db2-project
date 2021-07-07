const express = require('express')

const dbCar = require('./carsModel')

const router = express.Router()

router.get('/', (req, res) => {
    dbCar.getAll()//get all takes no parameters
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json({message: 'Try again!', err})
        })
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    dbCar.select()
          .from('cars')
          .where({id})
          .first()
          .then(acc => res.status(200).json(acc))
          .catch(err => res.status(500).json({message: err.message}))
})

router.post('/', (req, res) =>{
    dbCar.addCar(req.body) //removed addCars
          .then(items => {
              res.status(201).json( {newID: items})
          })
          .catch(err => {
              res.status(500).json({message: 'Try again!', err})
          })
})

router.put('/:id', (req, res)=>{
    const {id} = req.params;
    const changes = req.body;

    dbCar('cars')
         .where({id})
         .update(changes)
         .then(i => {
             if(i){
                 res.json({updated: i})
             }else{
                 res.status(404).json({message: 'Invalid id' })
             }
         })
         .catch(err => {
             res.status(500).json({message: 'error updating', err})
         })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    const item = req.body;

    dbCar('cars')
        .where({id})
        .del(item)
        .then(e => {
            if(e > 0){
                res.status(200).json({message: 'Deleted!'})
            }else{
                res.status(404).json({message: 'Not Found!'})
            }
        })
        .catch(err => {
            res.status(500).json({message: 'No luck, Try, again!', err})
        })
})

module.exports = router;