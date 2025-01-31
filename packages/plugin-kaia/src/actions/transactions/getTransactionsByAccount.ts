import { composeContext, elizaLogger } from "@elizaos/core";
import { generateMessageResponse } from "@elizaos/core";
import {
    type Action,
    type ActionExample,
    type HandlerCallback,
    type IAgentRuntime,
    type Memory,
    ModelClass,
    type State,
} from "@elizaos/core";
import { validateKaiaScanConfig } from "../../environment";
import { getTransactionsByAccountExamples } from "../../examples/getTransactionsByAccount";
import { KaiaScanService } from "../../services";
import { API_DEFAULTS } from "../../constants";
import { getTransactionsByAccountTemplate } from "../../templates/getTransactionsByAccount";

export const getTransactionsByAccountAction: Action = {
    name: "GET_TRANSACTIONS_BY_ACCOUNT",
    similes: [
        "GET_TRANSACTIONS_BY_ACCOUNT",
        "GET_TRANSACTIONS_BY_ACCOUNT",
        "KAIA_TRANSACTIONS_BY_ACCOUNT",
        "CHECK_TRANSACTIONS_BY_ACCOUNT",
        "CHECK_TRANSACTIONS_BY_ADDRESS",
        "KAIA_TRANSACTIONS_BY_ADDRESS",
        "GET_TRANSACTIONS_BY_ADDRESS",
        "GET_TRANSACTIONS_BY_ADDRESS",
    ],
    description: "Get the transactions by account",
    validate: async (runtime: IAgentRuntime) => {
        await validateKaiaScanConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        // Initialize/update state
        if (!state) {
            state = (await runtime.composeState(message)) as State;
        }
        state = await runtime.updateRecentMessageState(state);

        // state -> context
        const txnContext = composeContext({
            state,
            template: getTransactionsByAccountTemplate,
        });

        // context -> content
        const content = await generateMessageResponse({
            runtime,
            context: txnContext,
            modelClass: ModelClass.SMALL,
        });

        // parse content
        const hasNetwork =
            content?.network && !content?.error;

        if (!hasNetwork) {
            return;
        }

       const hasAddress =
            content?.address && !content?.error;

        if (!hasAddress) {
            return;
        }

        // Instantiate API service
        const config = await validateKaiaScanConfig(runtime);
        const kaiaScanService = new KaiaScanService({
            apiKey: config.KAIASCAN_API_KEY,
            baseUrl: API_DEFAULTS.BASE_URL[String(content.network)],
        }
        );

        // Fetch Account Balance & respond
        try {
            const kaiaScanData = await kaiaScanService.getTransactionsByAccount(String(content.address));
            elizaLogger.success(
                `Successfully fetched transactions for ${content.address} on ${content.network}`
            );


           

            if (callback) {
                let AccountTransactions;
                if (kaiaScanData && kaiaScanData.results.length > 0) {
                    AccountTransactions = kaiaScanData.results.map((transaction) => {
                        return {
                            from: transaction.from,
                            to: transaction.to,
                            value: transaction.amount,
                            type: transaction.transaction_type,
                            hash: transaction.transaction_hash,
                        };
                    });
                } else {
                    AccountTransactions = "No transactions found for this address";
                }
                console.log(AccountTransactions);
                callback({
                    text: `The transactions in a block for ${content.address} on ${content.network} is ${AccountTransactions}. \n Let's play and build some MiniDapps on LINE.`,
                    content: kaiaScanData,
                });

                return true;
            }
        } catch (error) {
            elizaLogger.error("Error in GET_TRANSACTIONS_BY_BLOCK_NUMBER handler:", error);

            callback({
                text: `Error fetching transactions of a block info: ${error.message}`,
                content: { error: error.message },
            });

            return false;
        }

        return;
    },
    examples: getTransactionsByAccountExamples as ActionExample[][],
} as Action;
