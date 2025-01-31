import type { Plugin } from "@elizaos/core";
import { getCurrentBalanceAction,
  getNFTBalanceAction,
  getFTBalanceDetails,
  getAccountOverview,
  transferAction
} from "./actions";


export * as actions from "./actions";

export const kaiaPlugin: Plugin = {
  name: "kaia",
  description: "Kaia blockchain integration plugin",
  actions: [getCurrentBalanceAction, getNFTBalanceAction, getFTBalanceDetails, getAccountOverview, transferAction],
  evaluators: [],
  providers: [],
};
export default kaiaPlugin;
