
var reg = require('../config/reg.js');


// Routes
// =============================================================
module.exports = function(app) {

  

  // in ur routes u need an app.post for logins
app.post('/api/login', function(req,res) {
    reg.findOne({
        where: {
            user: req.body.firstName
        }
    }).then(function(user) {
    // user will be what u get back from the query, you want to check if user exists
    // if user doesn't exist then return stops the script
    if (!user)
      alert('No user found');
      return;

    // if it does exist then u check if passwords match
    // if passwods don't match then return stops the script
    if (user.password != req.body.password)
      alert('Incorrect password');
      return;
    
    // if passwords match then u have to store the session. u could easily use a module to do this. without a module ud have to create cookie sessions. if u want a module look at passport
    });
});


  app.get("/api/all", function(req, res) {

    reg.findAll({}).then(function(results) {
      res.json(results);
    });

  });
app.get("/api/login", function(req,res){
  findOne({ where: { username: username }}).then(function(results) {
      res.json(results);
    });
});


 


 





// this is inside ur api-routes.js so when the user clicks submit on the browser it runs an ajax post to /api/new *this is ur new user*
app.post("/api/new", function(req,res) {
  console.log(req.body);
  // this gives back an object with ur data, you will have
  // req.body.firstName
  // req.body.lastName
  // req.body.birthday
  // req.body.username
  // req.body.password
  // ^with this information you want to do a mysql query to create a new entry into some table, preferably called "users"
  // after all thats done u can just
  res.done(); // or if u want to refresh the page then:
  res.render('/');
});
};
