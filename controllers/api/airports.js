var router = require('express').Router();
var Airport = require('../../models/Airports');
var Route = require('../../models/Routes');


router.get('/airports',function(req,res,next){
  Airport.find()
    .exec(function(err,airports){
      if(err){return next(err)}
      res.send(airports);
    })
});

router.get('/routes',function(req,res,next){
	Route.find()
	.exec(function(err,routes){
		if(err){return next(err)}
		res.send(routes);
	})
});

router.get('/airports/:IATA',function(req,res,next){
	Airport.find({IATA:req.params.IATA},function(err,airport)
	{
		if(err){return next(err)}
		res.send(airport);
	});
})

module.exports = router;