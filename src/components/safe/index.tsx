import { Web3AuthModalPack } from "@safe-global/auth-kit";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthOptions } from "@web3auth/modal";

// // Allow to login and get the derived EOA
// await web3AuthModalPack.signIn();

// // Logout
// await web3AuthModalPack.signOut();

// // Get the provider
// web3AuthModalPack.getProvider();

import React, { useEffect } from "react";

const Page = () => {
  const options: Web3AuthOptions = {
    clientId:
      "BLJwVWQUu4eMOWzF2cMrhmBrKlO7m4KOr39418nSw28Z5q446Nek-VUdpP9ZcwCWM6C5TniHQrQYHBvE8NNMlwQ",
    web3AuthNetwork: "testnet",
    chainConfig: {
      chainNamespace: CHAIN_NAMESPACES.EIP155,
      chainId: "0x13881",
      rpcTarget:
        "https://polygon-mumbai.g.alchemy.com/v2/E_OwgnjNJnCelsz2bUWwNlZ880TmumS-",
    },
    uiConfig: {
      theme: "dark",
      loginMethodsOrder: ["google", "facebook"],
    },
  };

  const modalConfig = {
    [WALLET_ADAPTERS.TORUS_EVM]: {
      label: "torus",
      showOnModal: false,
    },
    [WALLET_ADAPTERS.METAMASK]: {
      label: "metamask",
      showOnDesktop: true,
      showOnMobile: false,
    },
  };

  const openloginAdapter = new OpenloginAdapter({
    loginSettings: {
      mfaLevel: "mandatory",
    },
    adapterSettings: {
      uxMode: "popup",
      whiteLabel: {
        name: "Safe",
      },
    },
  });

  const web3AuthModalPack = new Web3AuthModalPack({
    txServiceUrl: "https://safe-transaction-{chain}.safe.global",
  });
  const initfunction = async () => {
    await web3AuthModalPack.init({
      options,
      adapters: [openloginAdapter],
      modalConfig,
    });
  };
  useEffect(() => {
    initfunction();
  });
  return (
    <button
      onClick={async () => {
        try {
          const ans: any = await web3AuthModalPack.signIn();

          console.log(ans);
        } catch (e) {
          console.log(e);
        }
      }}
    >
      hello
    </button>
  );
};

export default Page;
