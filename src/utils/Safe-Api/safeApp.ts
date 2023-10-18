"use client";
import SafeApiKit from "@safe-global/api-kit";
import { ethers, JsonRpcProvider, JsonRpcSigner } from "ethers";
import {
  SafeServiceInfoResponse,
  MasterCopyResponse,
  SafeMultisigTransactionEstimateResponse,
  OwnerResponse,
  SafeCreationInfoResponse,
  TokenInfoListResponse,
  TransferListResponse,
  SafeMultisigTransactionListResponse,
  SafeModuleTransactionListResponse,
  SafeInfoResponse,
} from "@safe-global/api-kit";
import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
import { useWalletClient } from "wagmi";

export async function getServiceInfo({ safeService }: { safeService: any }) {
  try {
    const serviceInfo: SafeServiceInfoResponse =
      await safeService.getServiceInfo();
    console.log(serviceInfo);
    return serviceInfo;
  } catch (e) {
    console.log(e);
  }
}

/// this help to find safe account of the address
export async function getSafesByOwner({
  ownerAddress,
  safeService,
}: {
  ownerAddress: string;
  safeService: any;
}) {
  const safes: OwnerResponse = await safeService.getSafesByOwner(ownerAddress);
  return safes;
}

export async function getMultisigTransaction({
  safeService,
  safeTxHash,
}: {
  safeService: any;
  safeTxHash: any;
}) {
  const tx: SafeMultisigTransactionEstimateResponse =
    await safeService.getTransaction(safeTxHash);
  return tx;
}
export async function getSafeInfo({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: any;
}) {
  const safeInfo: SafeInfoResponse = await safeService.getSafeInfo(safeAddress);
  return safeInfo;
}
export async function getSafeCreationInfo({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: string;
}) {
  const safeCreationInfo: SafeCreationInfoResponse =
    await safeService.getSafeCreationInfo(safeAddress);
  return safeCreationInfo;
}
export async function SafeTransactionsHistory({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: string;
}) {
  const incomingTxs: TransferListResponse =
    await safeService.getIncomingTransactions(safeAddress);

  return incomingTxs;
}
export async function ModuleTransactionsHistory({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: string;
}) {
  const moduleTxs: SafeModuleTransactionListResponse =
    await safeService.getModuleTransactions(safeAddress);

  return moduleTxs;
}

export async function MultisigTransactionsHistory({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: string;
}) {
  const multisigTxs: SafeMultisigTransactionListResponse =
    await safeService.getMultisigTransactions(safeAddress);

  return multisigTxs;
}
export async function PendingTransactionsList({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: string;
}) {
  const pendingTxs: SafeMultisigTransactionListResponse =
    await safeService.getPendingTransactions(safeAddress);

  return pendingTxs;
}
export async function AllTransactionList({
  safeService,
  safeAddress,
}: {
  safeService: any;
  safeAddress: string;
}) {
  const allTxs: SafeMultisigTransactionListResponse =
    await safeService.getAllTransactions(safeAddress);
  return allTxs;
}

export async function PendingTransactionsListWithCurrentNonce({
  safeService,
  safeAddress,
  currentNonce,
}: {
  safeService: any;
  safeAddress: string;
  currentNonce: string;
}) {
  const pendingTxs: SafeMultisigTransactionListResponse =
    await safeService.getPendingTransactions(safeAddress, currentNonce);
  return pendingTxs;
}

export async function AllTokenForSafe({ safeService }: { safeService: any }) {
  const tokens: TokenInfoListResponse = await safeService.getTokenList();
  return tokens;
}
