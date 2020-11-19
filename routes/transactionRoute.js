const express = require ('express');
const router = express.Router();
const transactionController = require("../controllers/transactionController"); 
const transactionValidations = require("../helpers/transactionValidation");  

router.get("/transaction",transactionValidations.validateUserTransactions(),transactionController.getUserTransactions);

module.exports = router;