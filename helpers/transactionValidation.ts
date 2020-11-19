import { query } from 'express-validator';
import sellerModel from "../models/seller/Seller";

export default class TransactionValidation {
public validateUserTransactions = () => {
    return  [
          query("per_page").isInt({min: 1}).withMessage("invalid, minimum per page value 1").not().isEmpty().withMessage("required per_page"),
          query("page").isInt({ min: 1 }).withMessage("invalid, minimum per page value 1").not().isEmpty().withMessage("required page"),
          query("seller_id").isInt({min: 1}).withMessage("invalid, minimum seller id value 1").not().isEmpty().withMessage("required seller_id")
          .custom(value => {
                  return sellerModel.findOne({ where:{"seller_id": value} })
                      .then(seller => {
                          if (!seller) {
                              return Promise.reject("seller not found");
                          } 
                      });
              })
        ];
  };
}