"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.product, {
        foreignKey: "product_id",
        onDelete: "SET NULL",
        as: "product",
      });

      this.belongsTo(models.categories, {
        foreignKey: "category_id",
        onDelete: "SET NULL",
        as: "categories",
      });
    }
  }
  product_category.init(
    {
      product_id: DataTypes.INTEGER,
      category_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "product_categories",
      freezeTableName: true,
    }
  );
  return product_category;
};
