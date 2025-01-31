import { API_DEFAULTS } from "../constants";
import type { GetAccountResponse } from "../types";
import { BaseService } from "./base";

export class AccountService extends BaseService {

    getCurrentBalance = async (
        accountAddress: string
      ): Promise<GetAccountResponse> => {
        if (!this.config.apiKey || !accountAddress) {
          throw new Error("Invalid parameters");
        }

        if(!this.config.baseUrl) {
            throw new Error("Invalid network");
        }
      console.log("this.config", this.config);
        try {
          const url = new URL(`${this.config.baseUrl}/accounts/${accountAddress}`);
      
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
      
          return data ;
        } catch (error) {
          console.error("KaiaScan API Error:", error.message);
          throw error;
        }
      }

}