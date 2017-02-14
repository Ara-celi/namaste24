var Sequelize = require("sequelize");

var sequelize = require("../../config/connection.js");


var namaste = sequelize.define("quotes", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote_author: {
        type: Sequelize.STRING
    },
    emotion: {
        type: Sequelize.STRING,
    },

}, {
    timestamps: false
});


namaste.sync();


module.exports = namaste;
