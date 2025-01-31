import type { ActionExample } from "@elizaos/core";

export const getCurrentBalanceExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the kaia balance like right now?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "In which address?",
            },
        },
        {
            user: "{{user1}}",
            content: {
                text: "0x4d69770905f43c07d4085dfd296a03484d05280f",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me check the current balance in 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "GET_CURRENT_BALANCE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's currently 50 KAIA, feels like you have good amount. Can start transferring or deploying a smart contract.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the balance of 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the current balance in 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "GET_CURRENT_BALANCE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's currently 50 KAIA and can explore kaia minidapps.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Is there any funds in 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the current balance in 0x4d69770905f43c07d4085dfd296a03484d05280f.",
                action: "GET_CURRENT_BALANCE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "In 0x4d69770905f43c07d4085dfd296a03484d05280f, it's currently holding 50 KAIA.",
            },
        },
    ],
];
