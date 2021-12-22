'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AdvantageAdvertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      AdvantageAdvertisement.belongsTo(models.Advantage)
      AdvantageAdvertisement.belongsTo(models.Advertisement)
    }
  };
  AdvantageAdvertisement.init({
  }, {
    sequelize,
    modelName: 'AdvantageAdvertisement',
  });
  return AdvantageAdvertisement;
};