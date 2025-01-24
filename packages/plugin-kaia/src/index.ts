import type { Plugin } from "@elizaos/core";
import { getCurrentBalanceAction } from "./actions/getCurrentBalance";

export * as actions from "./actions";

export const kaiaPlugin: Plugin = {
    name: "kaia",
    description: "Kaia blockchain integration plugin",
    actions: [getCurrentBalanceAction],
    evaluators: [],
    providers: [],
};
export default kaiaPlugin;
