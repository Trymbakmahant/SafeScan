"use client";
import SafeApiKit from "@safe-global/api-kit";
import { ethers, providers } from "ethers";
import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
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
  address,
  safeService,
}: {
  address: `0x${string}` | undefined;
  safeService: any;
}) {
  try {
    console.log(safeService);
    const safes: OwnerResponse = await safeService.getSafesByOwner(address);
    return safes;
  } catch (e) {
    console.log(e);
  }
}

export async function Ownerdetal({
  signer,
}: {
  signer: providers.JsonRpcSigner;
}) {
  try {
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    const address = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
    const txServiceUrl = "https://safe-transaction-goerli.safe.global";

    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });

    const serviceInfo: OwnerResponse = await safeService.getSafesByOwner(
      address
    );
    console.log(serviceInfo);
    return serviceInfo;
  } catch (e) {
    console.log(e);
  }
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
  address,
}: {
  safeService: any;
  address: any;
}) {
  try {
    console.log("hello");
    const safeInfo: SafeInfoResponse = await safeService.getSafeInfo(address);
    console.log(safeInfo);
    return safeInfo;
  } catch (e) {
    console.log(e);
  }
}
export async function getSafeCreationInfo({
  safeService,
  address,
}: {
  safeService: any;
  address: string;
}) {
  const safeCreationInfo: SafeCreationInfoResponse =
    await safeService.getSafeCreationInfo(address);
  return safeCreationInfo;
}
export async function SafeTransactionsHistory({
  safeService,
  address,
}: {
  safeService: any;
  address: string;
}) {
  const incomingTxs: TransferListResponse =
    await safeService.getIncomingTransactions(address);

  return incomingTxs;
}
export async function ModuleTransactionsHistory({
  safeService,
  address,
}: {
  safeService: any;
  address: string;
}) {
  const moduleTxs: SafeModuleTransactionListResponse =
    await safeService.getModuleTransactions(address);

  return moduleTxs;
}

export async function MultisigTransactionsHistory({
  safeService,
  address,
}: {
  safeService: any;
  address: string;
}) {
  const multisigTxs: SafeMultisigTransactionListResponse =
    await safeService.getMultisigTransactions(address);

  return multisigTxs;
}
export async function PendingTransactionsList({
  safeService,
  address,
}: {
  safeService: any;
  address: string;
}) {
  const pendingTxs: SafeMultisigTransactionListResponse =
    await safeService.getPendingTransactions(address);

  return pendingTxs;
}
export async function AllTransactionList({
  safeService,
  address,
}: {
  safeService: any;
  address: string;
}) {
  const allTxs: SafeMultisigTransactionListResponse =
    await safeService.getAllTransactions(address);
  return allTxs;
}

export async function PendingTransactionsListWithCurrentNonce({
  safeService,
  address,
  currentNonce,
}: {
  safeService: any;
  address: string;
  currentNonce: string;
}) {
  const pendingTxs: SafeMultisigTransactionListResponse =
    await safeService.getPendingTransactions(address, currentNonce);
  return pendingTxs;
}

export async function AllTokenForSafe({ safeService }: { safeService: any }) {
  const tokens: TokenInfoListResponse = await safeService.getTokenList();
  return tokens;
}
