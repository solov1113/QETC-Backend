"use strict";

const { Model } = require("sequelize");
// const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UniversityType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UniversityType.init(
    {
      ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "UniversityType",
      tableName: "universitytype",
    }
  );
  // const level = await UniversityType.findAll();
  return UniversityType;
};
