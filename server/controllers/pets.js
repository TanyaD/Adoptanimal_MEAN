var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');

module.exports = {
    getPet: function(req,res){
        Pet.find({_id:req.params.id},function(err,pet){      
            console.log(pet)
            if(err){
                res.json({message:"error", error:error})
            }
            res.json({message:"Success",pet:pet[0]})
            })
        },
    allPets: function(req,res){
        Pet.find({}).exec(function(err,pets){
        if(err){
            res.json({message:"error", error:error})
        }
        else{
            res.json({message:"Success",pets:pets})
        }
        })
    },
    addPet: function(req, res){
        console.log("POST DATA", req.body);
        var pet=new Pet(req.body);
        pet.save(function(error, Pet){
            if(error){
                res.json({message: "Error", error: error})
            }
            else{
                res.json({message: "Success", data: Pet})
            }
        })
    },
    deletePet: function(req,res){    
        Pet.remove({_id:req.params.id},function(err,pet){       
            console.log(pet)
            res.json(pet)
        })
    },
    updatePet: function(req,res){
         Pet.update({_id:req.body._id},req.body,{runValidators:true},function(error,pet){
            if(error){
                res.json({message: "Error", error: error})
            }
            else{
            console.log(pet)
            res.json({message:"Success",pet:pet})
            }
        })
    },
}