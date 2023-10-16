import { Web3AuthModalPack } from "@safe-global/auth-kit";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";
import { Web3AuthOptions } from "@web3auth/modal";
import SafeApiKit from "@safe-global/api-kit";
// // Allow to login and get the derived EOA
// await web3AuthModalPack.signIn();

// // Logout
// await web3AuthModalPack.signOut();

// // Get the provider
// web3AuthModalPack.getProvider();

import React, { useEffect } from "react";
import { Web3Auth } from "@web3auth/modal";

// Initialize within useEffect()
const web3auth = new Web3Auth({
  clientId:
    "BLJwVWQUu4eMOWzF2cMrhmBrKlO7m4KOr39418nSw28Z5q446Nek-VUdpP9ZcwCWM6C5TniHQrQYHBvE8NNMlwQ", // Get your Client ID from the Web3Auth Dashboard
  web3AuthNetwork: "testnet", // Web3Auth Network
  chainConfig: {
    chainNamespace: "eip155",
    chainId: "0x89",
    rpcTarget: "https://rpc.ankr.com/polygon",
    displayName: "Polygon Mainnet",
    blockExplorer: "https://polygon.etherscan.io",
    ticker: "MATIC",
    tickerName: "Polygon",
  },
});

await web3auth.initModal();

const Page = () => {
  const web3auth = new Web3Auth({
    clientId:
      "BLJwVWQUu4eMOWzF2cMrhmBrKlO7m4KOr39418nSw28Z5q446Nek-VUdpP9ZcwCWM6C5TniHQrQYHBvE8NNMlwQ", // Get your Client ID from the Web3Auth Dashboard
    web3AuthNetwork: "testnet", // Web3Auth Network
    chainConfig: {
      chainNamespace: "eip155",
      chainId: "0x13881",
      rpcTarget: "https://rpc-mumbai.maticvigil.com/",
      displayName: "Polygon Mumbai",
      blockExplorer: "https://mumbai.polygonscan.com/",
      ticker: "MATIC",
      tickerName: "Polygon",
    },
  });

  // const options: Web3AuthOptions = {
  //   clientId:
  //     "BLJwVWQUu4eMOWzF2cMrhmBrKlO7m4KOr39418nSw28Z5q446Nek-VUdpP9ZcwCWM6C5TniHQrQYHBvE8NNMlwQ",
  //   web3AuthNetwork: "testnet",
  //   chainConfig: {
  //     chainNamespace: CHAIN_NAMESPACES.EIP155,
  //     chainId: "0x8274f",
  //     rpcTarget: "https://1rpc.io/scroll/sepolia",
  //   },
  //   uiConfig: {
  //     theme: "dark",
  //     loginMethodsOrder: ["google", "facebook"],
  //   },
  // };

  // const modalConfig = {
  //   [WALLET_ADAPTERS.TORUS_EVM]: {
  //     label: "torus",
  //     showOnModal: false,
  //   },
  //   [WALLET_ADAPTERS.METAMASK]: {
  //     label: "metamask",
  //     showOnDesktop: true,
  //     showOnMobile: false,
  //   },
  // };

  // const openloginAdapter = new OpenloginAdapter({
  //   loginSettings: {
  //     mfaLevel: "mandatory",
  //   },
  //   adapterSettings: {
  //     uxMode: "popup",
  //     whiteLabel: {
  //       name: "Safe",
  //     },
  //   },
  // });

  // const web3AuthModalPack = new Web3AuthModalPack({
  //   txServiceUrl: "https://transaction-sepolia.safe.scroll.xyz",
  // });
  const initfunction = async () => {
    // await web3AuthModalPack.init({
    //   options,
    //   adapters: [openloginAdapter],
    //   modalConfig,
    // });
    await web3auth.initModal();
  };
  useEffect(() => {
    initfunction();
  });
  return (
    <button
      onClick={async () => {
        try {
          const ans: any = await web3auth.connect();

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
