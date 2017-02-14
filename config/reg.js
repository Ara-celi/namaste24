var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");


var reg = sequelize.define("info", {
  // username: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   unique: true,
  //   validate: {
  //     is: /^[a-z0-9\_\-]+$/i,
  //   }
  // },
  // email: {
  //   type: Sequelize.STRING,
  //   validate: {
  //     isEmail: true
  //   }
  // },
  firstName: {
    type: Sequelize.STRING,
  },
  lastName: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  }
});


reg.sync();

module.exports = reg;

