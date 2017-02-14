// Dependencies
// =============================================================
var User = require('../js/models/User.js');

//add user to db
// =============================================================
module.exports = function(app) {    
    app.post('/test', function(req, res) {
        User.create({
            id: req.body.id,
            firstName: req.body.firstname,
            lastName: req.body.lastname,
            birthday: req.body.birthday,
            email: req.body.email, 
            username: req.body.username,
            password: req.body.password
            

        }).then(function(data) {
            res.json(data);
        });
    });
};