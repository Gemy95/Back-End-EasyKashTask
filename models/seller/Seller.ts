import { DataTypes, Sequelize , ModelDefined} from "sequelize";
import sequelize from '../connection';
import { ISeller , ISellerModel } from "../seller/ISeller";
import transaction from "../transaction/Transaction";
import moment from 'moment';

let seller : ModelDefined<ISeller,ISellerModel> = sequelize.define('seller', {
    seller_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(50),
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
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get() {
        return moment(this.getDataValue("updated_at")).format("YYYY-MM-DD HH:mm:ss");
      }
    }
  }, {
    tableName: 'seller',
    timestamps: false
  });
   
  transaction.belongsTo(seller, { foreignKey: 'seller_id', targetKey: 'seller_id' });
  seller.hasMany(transaction, { foreignKey: "seller_id", sourceKey: 'seller_id' });


   export default seller;




