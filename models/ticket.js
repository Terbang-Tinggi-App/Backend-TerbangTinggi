"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ticket.belongsTo(models.DetailTransaction, {
        foreignKey: "detail_transaction_id",
        as: "tiket",
      });
    }
  }
  Ticket.init(
    {
      detail_transaction_id: DataTypes.INTEGER,
      ticket_pdf: DataTypes.STRING,
      qr_code: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
