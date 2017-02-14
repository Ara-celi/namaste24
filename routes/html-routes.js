var path = require("path");
var namaste = require("../app/models/quotes.js");

// Routes
// =============================================================
module.exports = function(app) {

  // Index route loads index.html
  app.get("/", function(req, res) {
    quotes.findAll({}).then(function(results) {
		res.render("index", {quote: results});
    });
  });

};