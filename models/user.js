const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
	name:{
		type: String
	},
	email:{
		type: String
	},
	age:{
		type: Number
	},
	size:{
		type: Number
	},
});

mongoose.model("user",userSchema);