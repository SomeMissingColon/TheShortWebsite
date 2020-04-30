const express = require("express");
var router = express.Router();
const mongoose = require("mongoose")
const User = mongoose.model("User");
//index
router.get("/", (req,res) =>{
	res.render('user/index')
});
//show all
router.get("/all", (req,res) =>{
	  User.find((err, docs) => {
        if (!err) {
            res.render("user/all",{
            	list: docs
            });
        }
        else {
            console.log('Error in retrieving employee list :' + err);
        }
    });
});

module.exports = router;