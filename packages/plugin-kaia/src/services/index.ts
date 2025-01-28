import {API_DEFAULTS} from "../constants"
import { AccountService } from "./account";

export class KaiaScanService {
    private accountService: AccountService ;
    private config: any;
    // private transactionService;

    constructor(config) {
        this.config = {
            apiKey: config.apiKey,
        };

        this.accountService = new AccountService(this.config);
        // this.transactionService = new TransactionService(this.config);
    }

    async getCurrentBalance(accountAddress: string, network: string) {
        return this.accountService.getCurrentBalance(accountAddress, network);
    }
}