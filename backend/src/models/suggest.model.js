const express = require("express");

const mongoose = require("mongoose");

const suggestSchema = new mongoose.Schema({
    user_name : {type : String, required : true},
    name :{type : String, required : true} , 
    status: {type :String, required : true},
    description: {type :String, required : true},
    post_count: {type : Number, required : true},
    followers: {type : Number, required : true},
    following: {type : Number, required : true},
    tags : {type : Number, required : true},
    profile_pic : {type : String},
    images : [{type : String}],
    videos : [{type : String}],

});

const Suggest = mongoose.model("suggest", suggestSchema);

module.exports = Suggest;