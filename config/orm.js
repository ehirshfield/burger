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
    var query = "INSERT INTO ?? (?) VALUES (?);";
    connection.query(query, [tableChoice, firstCol, firstValue], function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  },

  updateOne: function(tableChoice, firstCol, firstValue, secondCol, secondValue, cb){
    var query = "UPDATE ?? SET ? = ? WHERE ? = ?;";
    connection.query(query, [tableChoice, firstCol, firstValue, secondCol, secondValue], function(err, result){
      if (err){
        throw err;
      }
      cb(result);
    });
  }
};

module.exports = orm;
