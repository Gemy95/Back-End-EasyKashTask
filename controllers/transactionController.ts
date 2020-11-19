import transactionService from '../services/transactionService';
import { validationResult } from "express-validator";
import { Request, Response } from 'express';

export default class TransactionController {
public getUserTransactions = async (req:Request,res:Response)=>{
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

}