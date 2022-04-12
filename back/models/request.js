const Sequelize = require("sequelize")
const db = require("../../dbConnection/db");

class Request extends Sequelize.Model {};

Request.init(
  {
    request_ip: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    request_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    request_artist: {
        type: Sequelize.STRING,
        allowNull: false
    }
  },
  { sequelize: db, modelName: "request" }
);

module.exports = Request;