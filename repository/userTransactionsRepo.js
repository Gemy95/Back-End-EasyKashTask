const transaction = require('../models/transaction');

module.exports.getUserTransactions = async (seller_id,current_page,per_page)=>{
 let offset = ((parseInt(current_page)-1)*parseInt(per_page))+1;   
 let result = await transaction.findAndCountAll({where:{"seller_id":seller_id},"limit":parseInt(per_page),"offset":offset});
 return {
     transaction:result.rows,
     paging: {
        total: Math.ceil(result.count/per_page),
        current_page: current_page,
        per_page: result.rows.length
      }
 }
}