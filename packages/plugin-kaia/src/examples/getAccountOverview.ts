import type { ActionExample } from "@elizaos/core";

export const getAccountOverviewExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you give me an overview of my account?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Sure, which account address would you like to check?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "0x840e00ffc46734c3ac97b0e88b1589f83b3874ec",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me fetch the details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec.",
                action: "GET_ACCOUNT_OVERVIEW",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The account 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec is an EOA with a balance of 0.380511758776510076 KAIA, 38 total transactions, and uses an AccountKeyLegacy.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the overview of 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll get the account details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec.",
                action: "GET_ACCOUNT_OVERVIEW",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The account 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec is an EOA with a balance of 0.380511758776510076 KAIA, 38 total transactions, and uses an AccountKeyLegacy.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you show me the details of my portfolio?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Which account address would you like to check?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "0x840e00ffc46734c3ac97b0e88b1589f83b3874ec",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Fetching the portfolio details for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec.",
                action: "GET_ACCOUNT_OVERVIEW",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "The portfolio for 0x840e00ffc46734c3ac97b0e88b1589f83b3874ec includes an EOA with a balance of 0.380511758776510076 KAIA, 38 total transactions, and uses an AccountKeyLegacy.",
            },
        },
    ],
];