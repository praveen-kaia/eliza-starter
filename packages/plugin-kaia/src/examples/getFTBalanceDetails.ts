import type { ActionExample } from "@elizaos/core";

export const getFTBalanceDetailsExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the token balance of 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the token balance in 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "GET_FT_BALANCE_DETAILS",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The address currently holds 1500.75 tokens.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "How many tokens are in 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me see how many tokens are in 0x4d69770905f43c07d4085dfd296a03484d05280f.",
                action: "GET_FT_BALANCE_DETAILS",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I found 2000 tokens in the address.",
            },
        },
    ],
];