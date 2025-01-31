import { AccountService } from "./account";
import { TransactionService } from "./transaction";

export class KaiaScanService {
    private accountService: AccountService ;
    private config: any;
    private transactionService: TransactionService;

    constructor(config) {
        this.config = {
            apiKey: config.apiKey,
            baseUrl: config.baseUrl
        };

        this.accountService = new AccountService(this.config);
        this.transactionService = new TransactionService(this.config);
    }

    async getCurrentBalance(accountAddress: string) {
        return this.accountService.getCurrentBalance(accountAddress);
    }

    async getLatestBlock() {
        return this.transactionService.getLatestBlock();
    }

    async getBlock(blockNumber: string) {
        return this.transactionService.getBlock(blockNumber);
    }

    async getTransactionsByBlockNumber(blockNumber: string) {
        return this.transactionService.getTransactionsByBlockNumber(blockNumber);
    }

    async getTransactionsByAccount(blockNumber: string) {
        return this.transactionService.getTransactionsByAccount(blockNumber);
    }
    
}