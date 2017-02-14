
var quotes = require("../config/reg.js");
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
  });

};