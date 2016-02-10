exports = {

  var connection = require("connection.js");

  function add(){
    var burger_name = //Whichever burger the user clicks on
    connection.getConnection(function(err, result){
      connection.query("INSERT INTO burgers SET ?", [burger_name], function (err, result){
        if(err) {throw err}
      });
    });
  },

  function devour(){
    var burger_name = //Whichever burger the user clicks on
    connection.getConnection(function(err, result){
      connection.query("DELETE FROM burgers WHERE burger_name ?", [burger_name], function (err, result){
        if(err) {throw err}
      });
    });
  },


};