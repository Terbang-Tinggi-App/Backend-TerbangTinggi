"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flight.hasMany(models.DetailTransaction, {
        foreignKey: "flight_id",
        as: "detail_transaction",
      });
    }
  }
  Flight.init(
    {
      code: DataTypes.STRING,
      airlineIata: DataTypes.STRING,
      airlineLogo: DataTypes.STRING,
      airlineName: DataTypes.STRING,
      departureAirport: DataTypes.STRING,
      departure: DataTypes.STRING,
      arrivalAirport: DataTypes.STRING,
      arrival: DataTypes.STRING,
      date: DataTypes.DATEONLY,
      returnDate: DataTypes.DATEONLY,
      capacity: DataTypes.INTEGER,
      tripType: DataTypes.STRING,
      sc: DataTypes.STRING,
      departureTime: DataTypes.TIME,
      arrivalTime: DataTypes.TIME,
      price: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Flight",
    }
  );
  return Flight;
};
