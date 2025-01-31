import type { ActionExample } from "@elizaos/core";

export const faucetExamples: ActionExample[][] = [
    [
        {
            user: "assistant",
            content: {
                text: "I'll help you send some Kaia testnet tokens to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_FAUCET_TOKENS",
            },
        },
        {
            user: "user",
            content: {
                text: "Transfer some faucet kaia testnet tokens to 0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
                action: "SEND_FAUCET_TOKENS",
            },
        },
    ],
];