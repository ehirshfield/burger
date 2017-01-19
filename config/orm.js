var connection = require("./connection.js");

var orm = {
  selectAll: function(tableChoice, cb){
    var query = "SELECT * FROM ??;";
    connection.query(query, [tableChoice], function(err, result){
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  insertOne: function(tableChoice, firstCol, firstValue, cb){
    var query = "INSERT INTO " + tableChoice;
      query += " (";
      query += firstCol.toString();
      query += ") ";
      query += "VALUES (?)";

    connection.query(query, [firstValue], function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(tableChoice, firstCol, firstValue, secondCol, secondValue, cb){
    // var query = "UPDATE ?? SET ? = ? WHERE ? = ?;";
    var query = "UPDATE " + tableChoice;
      query += " SET " + firstCol;
      query += " = ";
      query += firstValue + " WHERE ";
      query += secondCol + " = ?";
    var secondValue = parseInt(secondValue);
    console.log(query);

    connection.query(query, [secondValue], function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
