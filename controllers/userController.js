const express = require("express");
var router = express.Router();
//index
router.get("/", (req,res) =>{
	res.render('user/index')
});
//show all
router.get("/all", (req,res) =>{
	res.render("user/all")
})
module.exports = router;