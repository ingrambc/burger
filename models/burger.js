//Import orm for database interaction
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(res){
      cb(res);
    });
  },//end of select all

  insertOne: function(cols, values, cb){
    orm.insertOne("burgers", cols, values, function(res){
      cb(res);
    });
  },//end of insertOne

  updateOne: function(col, value, cond, cb){
    orm.updateOne("burgers", col, value, cond, function(res){
      cb(res);
    })
  },//end of updateOne

  deleteOne: function(cond, cb){
  console.log("entered burger.deleteOne");
    orm.deleteOne("burgers", cond, function(res){
      cb(res)
    });
  }// end deleteOne

}//end of burger

//Export burger
module.exports = burger;