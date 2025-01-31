import type { Plugin } from "@elizaos/core";
import { getCurrentBalanceAction } from "./actions/getCurrentBalance";
import { transferAction } from "./actions/transfer";
import { getNFTBalanceAction } from "./actions/getNFTBalance";

export * as actions from "./actions";

export const kaiaPlugin: Plugin = {
  name: "kaia",
  description: "Kaia blockchain integration plugin",
  actions: [getCurrentBalanceAction, getNFTBalanceAction, transferAction],
  evaluators: [],
  providers: [],
};
export default kaiaPlugin;
