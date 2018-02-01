var mongoose = require('mongoose');
var Pet = mongoose.model('Pet');
var pets = require('../controllers/pets.js');

module.exports = function(app){
    app.get('/', function(req, res) {
        res.json({ message: 'welcome to our api!' });   
    }),
    app.get('/pets',function(request,response){
        pets.allPets(request,response)
    }),
    app.post('/new', function(req, res){
       pets.addPet(req,res)
    }),
    app.get('/pets/:id', function(req,res){
        pets.getPet(req,res)
    }),
    app.delete('/pets/:id', function(req,res){
        pets.deletePet(req,res)}),

    app.put('/edit', function(req,res){
        pets.updatePet(req,res)
    }),

    app.patch('/pets/:id', function(req, res){
        pets.pushPet(req,res)
    })
}



//reviews
    // app.post('/write/:id', function(req, res){
    //     reviews.addReview(req,res)
    // }),
    // app.get('/reviews/:id', function(req,res){
    //     reviews.getReviews(req,res)
    // })