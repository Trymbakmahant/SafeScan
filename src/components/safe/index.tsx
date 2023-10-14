import { Web3AuthModalPack, Web3AuthConfig } from "@safe-global/auth-kit";
import { Web3AuthOptions } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from "@web3auth/base";

// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#arguments
const options: Web3AuthOptions = {
  clientId:
    "BLJwVWQUu4eMOWzF2cMrhmBrKlO7m4KOr39418nSw28Z5q446Nek-VUdpP9ZcwCWM6C5TniHQrQYHBvE8NNMlwQ", // https://dashboard.web3auth.io/
  web3AuthNetwork: "testnet",
  chainConfig: {
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: "0x13881",
    // https://chainlist.org/
    rpcTarget:
      "https://polygon-mumbai.g.alchemy.com/v2/E_OwgnjNJnCelsz2bUWwNlZ880TmumS-",
  },
  uiConfig: {
    theme: "dark",
    loginMethodsOrder: ["google", "facebook"],
  },
};

// https://web3auth.io/docs/sdk/pnp/web/modal/initialize#configuring-adapters
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

// https://web3auth.io/docs/sdk/pnp/web/modal/whitelabel#whitelabeling-while-modal-initialization
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

const web3AuthConfig: Web3AuthConfig = {
  txServiceUrl: "https://safe-transaction-goerli.safe.global",
};

// Instantiate and initialize the pack
const web3AuthModalPack = new Web3AuthModalPack(web3AuthConfig);

import React from "react";

const index = () => {
  return (
    <button
      onClick={async () => {
        await web3AuthModalPack.init({
          options,
          adapters: [openloginAdapter],
          modalConfig,
        });

        // The signIn() method will return the user's Ethereum address
        // The await will last until the user is authenticated, so while the UI modal is showed
        const authKitSignData = await web3AuthModalPack.signIn();
      }}
    >
      hello
    </button>
  );
};

export default index;
