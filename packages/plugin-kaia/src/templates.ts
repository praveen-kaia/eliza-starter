export const getCurrentBalanceTemplate = `Respond with a JSON object containing the "address" and "balance". The address must be a valid Kaia EVM address provided in the input. 

IMPORTANT: Response must ALWAYS include both "address" and "balance" fields.

Example response:
\`\`\`json
{
    "address": "0x1234567890abcdef1234567890abcdef12345678",
    "balance": 123.45
}
\`\`\`

{{recentMessages}}

Extract the Kaia EVM address from the most recent message. Respond with a JSON markdown block containing both "address" and "balance".`;

