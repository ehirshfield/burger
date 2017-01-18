var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb){
    orm.selectAll("burgers", function(result){
      cb(result);
    });
  },
  insertOne: function(firstValue, cb){
    orm.insertOne("burgers","burger_name", firstValue, function(result){
      cb(result);
    });
  }
};





module.exports = burger;
