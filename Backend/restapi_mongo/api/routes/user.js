const express = require('express');
const router = express.Router();
const userSchema = require('../../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const checkAuth = require('./middlewar/check-auth')

router.post('/', checkAuth, (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({
                error: err
            })
        }
        else {
            const user = new userSchema({
                _id: new mongoose.Types.ObjectId,
                username: req.body.username,
                password: hash,
                email: req.body.email,
                phone: req.body.phone,
                userType: req.body.userType
            })
            user.save().then(result => {
                res.status(200).json({ message: 'user insert has successfull' })
            }).catch(err => {
                res.status(500).json({
                    error: err
                })
            })
        }
    })

})


router.post('/login', checkAuth, (req, res, next) => {
    userSchema.find({ username: req.body.username })
        .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(401).json({
                    msg: "user not exist"
                })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result)=>{
                if(!result)
                {
                    return res.status(401).json({msg:'password matching fail!'})
                }
                if(result){ 
                    const token = jwt.sign({
                        username:user[0].username,
                        userType:user[0].userType,
                        email:user[0].email,
                        phone:user[0].phone
                    },
                    'this is dummy text',
                    {expiresIn:'24h'}
                    );
                res.status(200).json({
                    username:user[0].username,
                    userType:user[0].userType,
                    email:user[0].email,
                    phone:user[0].phone,
                    token:token 
                })
                }
            })
        }).catch(err=>{
            res.status(500).json({error:err})
        })

})


module.exports = router;