var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	Airport_id: {type:String},
	Name: {type:String},
	City: {type:String},
	Country:{type:String},
	IATA:{type:String},
	ICAO:{type:String},
	LAT:{type:Number},
	LON:{type:Number},
	Altitude:{type:Number},
	Timezone:{type:Number},
	DST:{type: String },
	TZ:{type:String}
});

module.exports = mongoose.model('Airport',schema);