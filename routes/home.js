const express = require("express");
const router = express.Router();
var Seen = require('../models/Seen');
var User = require('../models/user');



//Get Dashboard

router.get('/home/:username', function(req,res){
    Seen.find({}, function(err,docs){
        if(err) throw err
        else   res.render('home', {Seen:docs});
    });
});




router.get('/deleteSeen/:id', function(req, res){

	Seen.findByIdAndRemove({_id: req.params.id},
	   function(err){
		if(err) throw err;
		else res.redirect('back');
	});
});


module.exports =router;