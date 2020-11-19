import { DataTypes, Sequelize , ModelDefined} from "sequelize";
import sequelize from '../connection';
import { IOffer , IOfferModel } from "../offer/IOffer";
import transaction from "../transaction/Transaction";
import seller from "../seller/Seller";
import moment from 'moment';

let offer : ModelDefined<IOffer,IOfferModel> = sequelize.define('offer', {
    offer_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    seller_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    offer_type: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    offer_code: {
      type: DataTypes.STRING(30),
      allowNull: false
    },
    offer_discount: {
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
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      get() {
        return moment(this.getDataValue("updated_at")).format("YYYY-MM-DD HH:mm:ss");
      }
    }
  }, {
    tableName: 'offer',
    timestamps: false
  });
   
  offer.belongsTo(seller, { foreignKey: 'offer_id', targetKey: 'offer_id' });
  seller.hasMany(offer, { foreignKey: "offer_id", sourceKey: 'offer_id' });

  transaction.hasOne(offer, { foreignKey: 'offer_id', sourceKey: 'offer_id' });
  offer.belongsTo(transaction, { foreignKey: 'offer_id', targetKey: 'offer_id' });

  export default offer;




