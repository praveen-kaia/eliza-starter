import {API_DEFAULTS} from "../constants"
import { AccountService } from "./account";

export class KaiaScanService {
    private accountService: AccountService ;
    private config: any;
    // private transactionService;

    constructor(config) {
        this.config = {
            apiKey: config.apiKey,
            baseUrl: config.baseUrl
        };

        this.accountService = new AccountService(this.config);
        // this.transactionService = new TransactionService(this.config);
    }

    async getCurrentBalance(accountAddress: string) {
        return this.accountService.getCurrentBalance(accountAddress);
    }

    async getNFTBalance(accountAddress: string) {
        return this.accountService.getNFTBalance(accountAddress);
    }

    async getFTBalanceDetails(accountAddress: string) {
        return this.accountService.getFTBalanceDetails(accountAddress);
    }

    async getAccountOverview(accountAddress: string) {
        return this.accountService.getAccountOverview(accountAddress);
    }
}