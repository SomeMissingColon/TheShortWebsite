
const uri = 'mongodb://127.0.0.1:27017/TheShortDB';
const mongoose = require("mongoose");

mongoose.connect(uri,{useNewUrlParser:true},(err) =>{
	if (!err) {
		console.log("Connection to "+uri+ "succeeded")
	}else{
		console.log("Error while attempting to connect to " +uri+"\n"+err)
	}
});

require("./models/user");