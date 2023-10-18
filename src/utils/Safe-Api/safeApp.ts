"use client";
import SafeApiKit from "@safe-global/api-kit";
import { ethers, JsonRpcProvider, JsonRpcSigner } from "ethers";
import { SafeServiceInfoResponse } from "@safe-global/api-kit";
import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
import { useWalletClient } from "wagmi";

export async function getServiceInfo({
  signer,
}: {
  signer: JsonRpcSigner | undefined;
}) {
  try {
    const ethAdapterOwner1 = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    const txServiceUrl = "https://safe-transaction-goerli.safe.global";

    const safeService = new SafeApiKit({
      txServiceUrl,
      ethAdapter: ethAdapterOwner1,
    });

    const serviceInfo: SafeServiceInfoResponse =
      await safeService.getServiceInfo();
    console.log(serviceInfo);
    return serviceInfo;
  } catch (e) {
    console.log(e);
  }
}
