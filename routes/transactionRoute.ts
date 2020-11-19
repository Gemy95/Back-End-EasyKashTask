import { Router } from 'express';
import transactionController from "../controllers/transactionController";
import transactionValidation from "../helpers/transactionValidation";

class TransactionRoute {
    public router: Router;
    private transactionController: transactionController = new transactionController();
    private transactionValidation: transactionValidation = new transactionValidation();

    constructor() {
        this.router = Router();
        this.routes(this.router);
    }

    public routes(router: Router): void {
    /**
   * Display transcation for user 
   * @route GET /API/transaction
   * @group EasyKashTask
   * @param {string} seller_id.query.required 
   * @param {string} page.query 
   * @param {string} per_page.query 
   * @returns {object} 200 -Transctions retrieved successfully
   * @returns {Error}  default - Unexpected error
    */   
        router.get(
            '/transaction',
            //this.transactionValidation.validateUserTransactions,
            this.transactionController.getUserTransactions
        );
    }
};


export default new TransactionRoute().router;