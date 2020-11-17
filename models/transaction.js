const Sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transaction', {
    transaction_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    seller_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    fees: {
      type: DataTypes.DOUBLE(30,5),
      allowNull: false
    },
    amount: {
      type: DataTypes.DOUBLE(30,5),
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'transaction',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "transaction_id" },
        ]
      },
    ]
  });
};
