import type { Plugin } from "@elizaos/core";
import { getCurrentBalanceAction } from "./actions/getCurrentBalance";
import { transferAction } from "./actions/transfer";
import { getNFTBalanceAction } from "./actions/getNFTBalance";
import { getFTBalanceDetails } from "./actions/getFTBalanceDetails";
import { getAccountOverview } from "./actions/getAccountOverview";

export * as actions from "./actions";

export const kaiaPlugin: Plugin = {
  name: "kaia",
  description: "Kaia blockchain integration plugin",
  actions: [getCurrentBalanceAction, getNFTBalanceAction, getFTBalanceDetails, getAccountOverview, transferAction],
  evaluators: [],
  providers: [],
};
export default kaiaPlugin;
