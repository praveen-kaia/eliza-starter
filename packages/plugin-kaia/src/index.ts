import type { Plugin } from "@elizaos/core";
import {
  getCurrentBalanceAction,
  getNFTBalanceAction,
  getFTBalanceDetailsAction,
  getAccountOverviewAction,
  faucetAction,
  getLatestBlockAction,
  transferAction,
  getBlockAction,
  getTransactionsByAccountAction,
  // getTransactionsByBlockNumberAction
} from "./actions";

export * as actions from "./actions";

export const kaiaPlugin: Plugin = {
  name: "kaia",
  description: "Kaia blockchain integration plugin",
  actions: [
    getLatestBlockAction,
    getNFTBalanceAction,
    getFTBalanceDetailsAction,
    getCurrentBalanceAction,
    getAccountOverviewAction,
    faucetAction,
    transferAction,
    getBlockAction,
    getTransactionsByAccountAction,
    // getTransactionsByBlockNumberAction
  ],
  evaluators: [],
  providers: [],
};
export default kaiaPlugin;
