var Sequelize = require("sequelize");

var sequelize = require("../../config/connection.js");


var User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
        allowNull: false
    },
    birthday: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    email: {
        type: Sequelize.STRING,
        validate: {
        isEmail: true
        }
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            is: /^[a-z0-9\_\-]+$/i,
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

}, {
    timestamps: false
});


User.sync();


module.exports = User;