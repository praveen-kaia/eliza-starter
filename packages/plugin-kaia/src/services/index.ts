import type { GetAccountResponse } from "../types";

const BASE_URL = "https://mainnet-oapi.kaiascan.io/api/v1";

export const createKaiascanService = (apiKey: string) => {

    const getCurrentBalance = async (
        accountAddress: string
    ): Promise<GetAccountResponse> => {
        if (!apiKey || !accountAddress) {
            throw new Error("Invalid parameters");
        }

        try {

            const url = new URL(`${BASE_URL}/accounts/${accountAddress}`);

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': '*/*',
			        'Authorization': `Bearer ${apiKey}`
                }
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error?.message || response.statusText);
            }

            const data = await response.json();

            return data;
        } catch (error) {
            console.error("Kaiascan API Error:", error.message);
            throw error;
        }
    };

    return { getCurrentBalance };
};
