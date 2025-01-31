import type { Plugin } from "@elizaos/core";
import { getCurrentBalanceAction } from "./actions/getCurrentBalance";
import { transferAction } from "./actions/transfer";

export * as actions from "./actions";

export const kaiaPlugin: Plugin = {
  name: "kaia",
  description: "Kaia blockchain integration plugin",
  actions: [getCurrentBalanceAction, transferAction],
  evaluators: [],
  providers: [],
};
export default kaiaPlugin;
