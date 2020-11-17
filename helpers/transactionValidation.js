const { query, body } = require("express-validator");
let sellerModel= require("../models/seller");

module.exports.validateUserTransactions = () => {
    return  [
          query("per_page").isLength({ min: 1 }).withMessage("invalid minimum per page length 1").not().isEmpty().withMessage("required per_page"),
          query("page").isLength({ min: 1 }).withMessage("invalid minimum per page length 1").not().isEmpty().withMessage("required page"),
          query("seller_id").not().isEmpty().withMessage("required seller_id")
          .custom(value => {
                  return sellerModel.findOne({ "seller_id": value })
                      .then(seller => {
                          if (seller) {
                              return Promise.reject("seller not found");
                          } 
                      });
              })
        ];
  };