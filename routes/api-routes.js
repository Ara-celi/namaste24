var namaste = require("../app/models/quotes.js");


// Routes
// =============================================================
module.exports = function(app) {


  app.get("/api/all", function(req, res) {

    namaste.findAll({}).then(function(results) {
      res.json(results);
    });

  });


  app.post("/burgers/create", function(req, res) {

    console.log("namaste Data:");
    console.log(req.body);
    namaste.create({
      id: req.body.id,
      quote: req.body.quote,
      author: req.body.author,

      
    }).then(function(){
      res.redirect('/');
    });

  });


  app.post("/quotes/update", function(req, res) {

    console.log("namaste Data:");
    console.log(req.body.quotes);
    namaste.update({
      author: 1,
   },
      {
      where: {
      

       
        id: req.body.quotes

  
    }}).then(function(){
      res.redirect('/');
    })

  });


};
