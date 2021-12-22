'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KeywordAdvertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      KeywordAdvertisement.belongsTo(models.Keyword)
      KeywordAdvertisement.belongsTo(models.Advertisement)
    }
  };
  KeywordAdvertisement.init({

  }, {
    sequelize,
    modelName: 'KeywordAdvertisement',
  });
  return KeywordAdvertisement;
};