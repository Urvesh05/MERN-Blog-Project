const express = require('express');
const router = express.Router();
const mySchema = require('../../models/schema');
const mongoose = require('mongoose');
const checkAuth= require('./middlewar/check-auth')

//get request 
router.get('/', checkAuth,(req, res, next) => {
    mySchema.find()
        .exec()
        .then(result => {
            res.status(200).json({
                Product: result
            })
        })
});

router.get('/:id', (req, res, next) => {
    const _id = req.params.id;
    mySchema.findById(_id)
        .exec()
        .then(result => {
            res.status(200).json({
                Product: result
            })
        })
});

router.post('/', (req, res, next) => {
    const product = new mySchema({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender,
        code: req.body.code,
        title: req.body.title,
        descrption: req.body.descrption,
        mrp: req.body.mrp,
        discountPercent: req.body.discountPercent,
    })

    product.save()
        .then(result => {
            console.log(result)
            res.status(200).json({ new_Product: result })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
});


router.delete('/:id', (req, res, next) => {
    mySchema.remove({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ message: 'Product hase deleted !', product: result })
        }).catch(err => {
            res.status(500).json({ error: err })
        })
});


// put request

router.put('/:id', (req, res, next) => {
    console.log(req.params.id);
    mySchema.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            gender: req.body.gender,
            code: req.body.code,
            title: req.body.title,
            descrption: req.body.descrption,
            mrp: req.body.mrp,
            discountPercent: req.body.discountPercent,
        }
    }).then(result => {
        res.status(200).json({ updated_product: result })
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
});

module.exports = router;