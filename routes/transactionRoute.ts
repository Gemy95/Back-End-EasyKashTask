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
        router.get(
            '/transaction',
            //this.transactionValidation.validateUserTransactions,
            this.transactionController.getUserTransactions
        );
    }
};


export default new TransactionRoute().router;