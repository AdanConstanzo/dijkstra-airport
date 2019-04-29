var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	To:{type:String},
	From: {type:String},
	Distance:{type:Number},
	Airport:{type:String}
});

module.exports = mongoose.model('Routes',schema);