// Import MySQL connection.
var connection = require("../config/connection.js");

//helper functions


//orm functions
var orm = {
  selectAll: function(tableName, cb){
    let queryStr = "SELECT * FROM "+tableName+";";
    connection.query(queryStr, function(err, result){
      if(err) throw err;
      cb(result);
    });
  },//end select All

  insertOne: function(tableName, cols, values, cb){
    let queryStr = "INSERT INTO "+tableName+" ("+cols.toString()+") ";
        queryStr+= "VALUES ("+values.toString()+")";
    connection.query(queryStr, function(err, result){
      if(err) throw err;
      cb(result);  
    })
  },//end insertOne

  updateOne: function(tableName, col, value, cond, cb){
    let queryStr = "UPDATE "+tableName+" SET "+col+" = "+value;
        queryStr+= " WHERE "+cond;
    connection.query(queryStr, function(err, result){
      if(err) throw err;
      cb(result);
    })
  }//end updateOne
  
}//end orm

//export module
module.exports = orm;