import { Model } from "sequelize";

export interface IOffer {
    offer_id: number;
    seller_id: number;
    offer_type: string;
    offer_code: string;
    offer_discount:number;
    created_at: string;
    updated_at: string
};

export interface IOfferModel extends Model<IOffer> {
};