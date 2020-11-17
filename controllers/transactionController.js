const transactionService = require ('../services/transactionService');
const { validationResult } = require("express-validator");

module.exports.getUserTransactions = async (req,res)=>{
try{
    const errors = validationResult(req);
     if (!errors.isEmpty())
            return res.status(400).json({ "msessage": errors.array() });  
  let result = await transactionService.getUserTransactions(req.query);
  res.status(200).json({"message":"data retrieved successfully",data:result});
}catch(error){
   res.status(400).json({"message":error.message});
  }
}