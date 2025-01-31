import type { ActionExample } from "@elizaos/core";

export const getNFTBalanceExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "What's the NFT balance of 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I'll check the NFT balance in 0x4d69770905f43c07d4085dfd296a03484d05280f for you.",
                action: "GET_NFT_BALANCE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "It's currently holding 3 NFTs: KaiaMint #1, KaiaMint #2, and CryptoCollectible #99.",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Which NFTs are in 0x4d69770905f43c07d4085dfd296a03484d05280f?",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "Let me see which NFTs are in 0x4d69770905f43c07d4085dfd296a03484d05280f.",
                action: "GET_NFT_BALANCE",
            },
        },
        {
            user: "{{agent}}",
            content: {
                text: "I found 2 NFTs: KaiaOriginal #7 and RareApe #1011.",
            },
        },
    ],
];