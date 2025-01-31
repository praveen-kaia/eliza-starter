export interface GetAccountResponse {
  address: string;
  balance: number;
  network: string;
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
