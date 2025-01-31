import { API_DEFAULTS } from "../constants";
import type { GetAccountResponse } from "../types";
import { BaseService } from "./base";

export class AccountService extends BaseService {

    getCurrentBalance = async (
        accountAddress: string,
        network: string
      ): Promise<GetAccountResponse> => {
        if (!this.config.apiKey || !accountAddress) {
          throw new Error("Invalid parameters");
        }

        if(!API_DEFAULTS.BASE_URL[network]) {
            throw new Error("Invalid network");
        }
      
        try {
          const url = new URL(`${API_DEFAULTS.BASE_URL[network]}/accounts/${accountAddress}`);
      
          const response = await fetch(url, {
            method: "GET",
            headers: {
              Accept: "*/*",
              Authorization: `Bearer ${this.config.apiKey}`,
            },
          });
      
          if (!response.ok) {
            const error = await response.json();
            throw new Error(error?.message || response.statusText);
          }
      
          const data = await response.json();
      
          return { ...data, network };
        } catch (error) {
          console.error("KaiaScan API Error:", error.message);
          throw error;
        }
      }

}