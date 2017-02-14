var Sequelize = require("sequelize");

var sequelize = require("../../config/loginConnection.js");


var User = sequelize.define("users", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    firstName: {
        type: Sequelize.STRING
    },
    lastName: {
        type: Sequelize.STRING
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

    //Here email_confirmation

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
        allowNull: false,
        validate: {
            notEmpty: true,
            len: [0, Infinity]
        }
    }

    //Here password .VIRTUAL

}, {
    timestamps: false
});


User.sync();


module.exports = User;