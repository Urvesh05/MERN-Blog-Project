const express = require('express');
const router = express.Router();
const mySchema = require('../../models/schema');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
    // res.status(200)
    //     .json({ msg: 'this is a get request' })
    mySchema.find().then(result => {
        res.status(200).json({
            studenData: result
        })
    }).catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
    })
});

router.get('/:id', (req, res, next)=>{
    console.log(req.params.id)
    mySchema.findById(req.params.id)
    .then(result=>{
        res.status(200).json({student:result
        })
    }).catch(err=>{
        console.log(err)
        res.status(500).json({error:err})
    })
})

router.post('/', (req, res, next) => {
    // res.status(200)
    //     .json({ msg: 'this is a post request' })
    // console.log(req.body);

    const student = new mySchema({
        _id: new mongoose.Types.ObjectId,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        gender: req.body.gender
    })

    student.save()
        .then(result => {
            console.log(result);

            res.status(200).json({
                newStudent: result
            })
        }).catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

module.exports = router;