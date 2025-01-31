export interface GetAccountResponse {
  results: {
    contract: {
      symbol: string;
      name: string;
      contract_address: string;
      decimal: number;
      verified: boolean;
      total_supply: number;
      implementation_address: string;
    };
    token_count: number;
    balance: number;
  }[];
  paging: {
    total_count: number;
    current_page: number;
    last: boolean;
    total_page: number;
  };
  property: Record<string, unknown>;
  address: string;
  balance: number;
  account_type: string;
  total_transaction_count: number;
}

import type { Address, Hash } from "viem";
import * as viemChains from "viem/chains";

const _SupportedChainList = Object.keys(viemChains) as Array<
  keyof typeof viemChains
>;
export type SupportedChain = (typeof _SupportedChainList)[number];

// Transaction types
export interface Transaction {
  hash: Hash;
  from: Address;
  to: Address;
  value: bigint;
  data?: `0x${string}`;
  chainId?: number;
}

// Action parameters
export interface TransferParams {
  fromChain: SupportedChain;
  toAddress: Address;
  amount: string;
  data?: `0x${string}`;
}
