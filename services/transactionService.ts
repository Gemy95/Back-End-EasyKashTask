import transactionRepo from '../repository/userTransactionsRepo';

export default class TransactionService {
public static getUserTransactions = async (queryParameters)=>{
  let per_page = Number(queryParameters.per_page) < 1 ? 10 : queryParameters.per_page;;  
  let current_page = Number(queryParameters.page) < 1 ? 1 : queryParameters.page;
  let result = await transactionRepo.getUserTransactions(queryParameters.seller_id,current_page,per_page);
  return result;
 }
}
