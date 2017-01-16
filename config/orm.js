var connection = require("./connection.js");

var orm = {
  selectAll: function(selectChoice, tableChoice){
    var query = "SELECT ?? FROM ??";
    connection.query(query, [selectChoice, tableChoice], function(err, result){
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },

  insertOne: function(tableChoice, firstCol, firstValue){
    var query = "INSERT INTO ?? (?) VALUES (?)";
    connection.query(query, [tableChoice, firstCol, firstValue], function(err, result){
      if (err){
        throw err;
      }
      console.log(result);
    });
  },

  updateOne: function(tableChoice, firstCol, firstValue, secondCol, secondValue){
    var query = "UPDATE ?? SET ? = ? WHERE ? = ?";
    connection.query(query, [tableChoice, firstCol, firstValue, secondCol, secondValue], function(err, result){
      if (err){
        throw err;
      }
      console.log(result);
    });
  };
};

module.exports = orm;
