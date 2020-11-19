import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

export interface ISeller {
    seller_id: string;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    address: string;
    created_at: string;
    updated_at: string
};

export interface ISellerModel extends Model<ISeller> {
};