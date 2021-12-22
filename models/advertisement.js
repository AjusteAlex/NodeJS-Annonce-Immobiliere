'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Advertisement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Advertisement.belongsTo(models.Property)
      Advertisement.belongsTo(models.User)
      Advertisement.hasMany(models.KeywordAdvertisement)
      Advertisement.belongsToMany(models.Keyword, {
        through: models.KeywordAdvertisement
      })
      Advertisement.hasMany(models.AdvantageAdvertisement)
      Advertisement.belongsToMany(models.Advantage, {
        through: models.AdvantageAdvertisement
      })
    }
  };
  Advertisement.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    sector: DataTypes.STRING,
    nbpieces: DataTypes.INTEGER,
    description: DataTypes.STRING,
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  }, {
    sequelize,
    modelName: 'Advertisement',
  });
  return Advertisement;
};