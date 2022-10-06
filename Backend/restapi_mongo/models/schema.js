// const express = require('express');
const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
    // name:{
    //     type:String,
    //     require:true,
    //     unique:true,
    //     trim:true
    // },
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    phone:Number,
    gender:String,
    code:String,
    title:String,
    descrption:String,
    mrp:Number,
    discountPercent:Number,
   
})

const testDB= new mongoose.model('testDB',mySchema);

module.exports = testDB;