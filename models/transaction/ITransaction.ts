import { Model } from "sequelize";

export interface ITransaction {
    transaction_id:number;
    seller_id: number;
    offer_id:number;
    title: string;
    fees: number;
    amount: number;
    created_at: string;
    updated_at: string
};

export interface ITransactionModel extends Model<ITransaction> {
    
};