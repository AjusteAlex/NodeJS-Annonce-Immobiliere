'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Advertisement)
      User.hasMany(models.UserRole)
      User.belongsToMany(models.Role, {
        through: models.UserRole
      })
    }
  };
  User.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    tel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};