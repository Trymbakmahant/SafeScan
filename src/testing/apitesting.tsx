import React from "react";
// import AKAfunction from "../utils/Safe-Api/safeApp";

import SafeApiKit from "@safe-global/api-kit";
import { getServiceInfo } from "../utils/Safe-Api/safeApp";
import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
import { useWalletClient } from "wagmi";
import { JsonRpcSigner } from "ethers";
import { useEthersSigner } from "../utils/hooks/ethersSigner";

const apitesting = () => {
  const { data: walletClient, isError, isLoading } = useWalletClient();

  // Use nonNullableSigner as a JsonRpcSigner.

  const signer: JsonRpcSigner | undefined = useEthersSigner();
  // https://chainlist.org/?search=goerli&testnets=true

  async function hello() {
    try {
      // const safe: any = await getServiceInfo({ signer });
      console.log("safe");
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      <button
        onClick={() => {
          hello();
        }}
      >
        {" "}
        lfjwpojfjow eofdwo iofiouwh fioof{" "}
      </button>
    </div>
  );
};

export default apitesting;
