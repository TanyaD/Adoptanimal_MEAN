var mongoose = require('mongoose');
var Schema=mongoose.Schema
var PetSchema = new mongoose.Schema({
    name: {type: String,unique:true, required:[true, "A pet must have a name"],
    minlength:[3, "Name must be at least 3 charachters long"]},
    type: {type: String, required:[true, "A pet must have a type"],
    minlength:[3, "Type must be at least 3 charachters long"]},
    description:{type: String, required:[true, "A pet must have a description"],
    minlength:[3, "Description must be at least 3 charachters long"]},
    like: {type: Number, default: 0},
    skill1: {type: String},
    skill2: {type: String},
    skill3: {type: String}
}, {timestamp: true})
var Pet=mongoose.model('Pet', PetSchema);


