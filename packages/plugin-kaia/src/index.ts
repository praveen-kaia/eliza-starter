import type { Plugin } from "@elizaos/core";
import { getCurrentBalanceAction } from "./actions/getCurrentBalance";
import { transferAction } from "./actions/transfer";
import { faucetAction } from "./actions/faucet";
import { getLatestBlockAction } from "./actions/transactions/getLatestBlock";
import { getBlockAction } from "./actions/transactions/getBlockInfo";
import { getTransactionsByAccountAction } from "./actions/transactions/getTransactionsByAccount";
import { getTransactionsByBlockNumberAction } from "./actions/transactions/getTransactionsByBlockNumber";

export const kaiaPlugin: Plugin = {
  name: "kaia",
  description: "Kaia blockchain integration plugin",
  actions: [
    getLatestBlockAction,
    getCurrentBalanceAction,
    faucetAction,
    transferAction,
    getBlockAction,
    getTransactionsByAccountAction,
    getTransactionsByBlockNumberAction,
  ],
  evaluators: [],
  providers: [],
};
export default kaiaPlugin;
