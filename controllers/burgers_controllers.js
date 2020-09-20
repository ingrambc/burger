//dependancies
var express = require("express");
var router = express.Router();

// Import the model
var burger = require("../models/burger.js");

//routes
router.get("/", function(req, res){
  burger.selectAll(function(data){
    var tblObj = {burger: data};
    res.render("index", tblObj);
  });
}); //end of get

router.post("/api/burgers", function(req, res){
  burger.insertOne("name", req.body.name, function(result){
    res.json({id: result.insertId});
  });
}); //end of post

router.put("/api/burgers/:id", function(req, res){
  var cond = "id = " + req.params.id;

  burger.updateOne("devoured", "true", cond, function(result){
    if(result.changedRows === 0)
      return res.status(404).end();
    res.status(200).end();
  })
}); //end of put

// Export router
module.exports = router;