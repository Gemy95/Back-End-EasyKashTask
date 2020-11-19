import { DataTypes, Sequelize , ModelDefined} from "sequelize";
import sequelize from '../connection';
import { ITransaction , ITransactionModel } from "../transaction/ITransaction";
import moment from 'moment';

let transaction : ModelDefined<ITransaction,ITransactionModel> = sequelize.define('transaction', {
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
    offer_id: {
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
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get() {
        return moment(this.getDataValue("created_at")).format("YYYY-MM-DD HH:mm:ss");
      }
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP') ,
      get() {
        return moment(this.getDataValue("updated_at")).format("YYYY-MM-DD HH:mm:ss");
      }
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

  export default transaction;



