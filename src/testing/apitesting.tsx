// import React from "react";
// // import AKAfunction from "../utils/Safe-Api/safeApp";
// import { ethers } from "ethers";
// import SafeApiKit from "@safe-global/api-kit";
// import {
//   getSafeInfo,
//   getServiceInfo,
//   getSafesByOwner,
//   Ownerdetal,
// } from "../utils/Safe-Api/safeApp";

// import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
// import { useWalletClient, useAccount } from "wagmi";
// import { providers } from "ethers";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();
//   // const address = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//   async function hello() {
//     try {
//       const ans = await Ownerdetal({ signer });
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         {" "}
//         lfjwpojfjow eofdwo iofiouwh fioof{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

////////////////////////////////// MASK NETWORK TESTING /////////////////////////////

// import React from "react";
// import { DataThroughAddress } from "../utils/MaskNetwork-Api/RelationshipServiceUseingWeb3Bio";

// const ApiTesting = () => {
//   return (
//     <div>
//       ApiTesting
//       <button
//         onClick={async () => {
//           try {
//             const data = await DataThroughAddress(
//               "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
//             );

//             console.log(data);
//           } catch (e) {
//             console.log(e);
//           }
//         }}
//       >
//         click me{" "}
//       </button>
//     </div>
//   );
// };

// export default ApiTesting;

///////////////////////////////////////////// get safe info  through address ///////////////////////////////

// import { getDataWithTransactionHash } from "../utils/Safe-Api/safeApp";
// import React from "react";
// // import AKAfunction from "../utils/Safe-Api/safeApp";
// import { ethers } from "ethers";
// import SafeApiKit from "@safe-global/api-kit";
// import {
//   getSafeInfo,
//   getServiceInfo,
//   getSafesByOwner,
// } from "../utils/Safe-Api/safeApp";

// import { EthersAdapter } from "@safe-global/protocol-kit/dist/src/adapters/ethers";
// import { useWalletClient, useAccount } from "wagmi";
// import { providers } from "ethers";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();

//   async function hello() {
//     const safeTxHash = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//     try {
//       const ans = await getSafeInfo(signer, txServiceList.Goerli, safeTxHash);
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         lfjwpojfjow eofdwo iofiouwh fioof
//       </button>
//     </div>
//   );
// };

// export default apitesting;

/////////////////////////////////////////////////// safe creation info ///////////////////////////////
// import React from "react";
// import { getSafesByOwner } from "../utils/Safe-Api/safeApp";
// import { useWalletClient, useAccount } from "wagmi";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();

//   async function hello() {
//     const safeTxHash = "0xbC2eFF3EA913317e523EB65A579d723334F9f135";
//     try {
//       const ans = await getSafesByOwner(
//         safeTxHash,
//         signer,

//         txServiceList.Goerli
//       );
//       console.log(ans);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         Testings{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

///////////////////////////// safe transaction detail ////////////////////////////////

// import React from "react";
// import { getDataWithTransactionHash } from "../utils/Safe-Api/safeApp";
// import { useWalletClient, useAccount } from "wagmi";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";
// import { fetchTransaction } from "@wagmi/core";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();

//   async function hello() {
//     const safeTxHash =
//       "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
//     const safeAddress = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//     try {
//       const transaction = await fetchTransaction({
//         hash: "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac",
//       });
//       // const ans = await getDataWithTransactionHash(
//       //   signer,
//       //   txServiceList.Goerli,
//       //   safeTxHash
//       // );
//       console.log(transaction);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         Testings{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

/////////////////////////// All transaction  testing //////////////////////////
// import React from "react";
// import {
//   AllTransactionList,
//   getDataWithTransactionHash,
// } from "../utils/Safe-Api/safeApp";
// import { useWalletClient, useAccount } from "wagmi";
// import { useEthersSigner } from "../utils/hooks/ethersSigner";
// import { txServiceList } from "../utils/Safe-Api/ServciceData";
// import { fetchTransaction } from "@wagmi/core";

// const apitesting = () => {
//   const { data: walletClient, isError, isLoading } = useWalletClient();
//   const signer: any = useEthersSigner();
//   const { address } = useAccount();

//   async function hello() {
//     const safeTxHash =
//       "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
//     const safeAddress = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";
//     try {
//       const transaction = await fetchTransaction({
//         hash: safeTxHash,
//       });
//       console.log(transaction);
//     } catch (e) {
//       console.log(e);
//     }
//   }

//   return (
//     <div>
//       <button
//         onClick={() => {
//           hello();
//         }}
//       >
//         Testings{" "}
//       </button>
//     </div>
//   );
// };

// export default apitesting;

/////////////////////////// All transaction  of creater contract //////////////////////////
import React from "react";
import { AllTransactionList } from "../utils/Safe-Api/safeApp";
import { useWalletClient, useAccount } from "wagmi";
import { useEthersSigner } from "../utils/hooks/ethersSigner";
import { useEthersProvider } from "../utils/hooks/ethersProvider";
import axios from "axios";
import { ProviderLink } from "../utils/Safe-Api/ServciceData";
const { ethers } = require("ethers");

const apitesting = () => {
  const { data: walletClient, isError, isLoading } = useWalletClient();
  const signer: any = useEthersSigner();

  async function hello() {
    const safeTxHash =
      "0x596104426ff8fd56e0488099cfe1829b45aaab323af1ef9cf8d610cae7af57ac";
    const safeAddress = "0xa43624b7472c37B1E1884645a3D04710afCD8eB5";

    const apiKey = "26TJW7XYJ3UUYQ7T9E3PV4TDZR748TR84V";
    const address = "0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2";

    const apiUrl = "https://api.etherscan.io/api";
    const action = "txlist"; // For normal transactions
    const module = "account";
    const startBlock = "0"; // Start from block 0
    const endBlock = "latest"; // Up to the latest block

    axios
      .get(apiUrl, {
        params: {
          module,
          action,
          address,
          startblock: startBlock,
          endblock: endBlock,
          sort: "desc", // To get the most recent transactions first
          apikey: apiKey,
        },
      })
      .then((response) => {
        const transactions = response.data.result;
        console.log("Transactions:", transactions);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <div>
      <button
        onClick={() => {
          hello();
        }}
      >
        Testings{" "}
      </button>
    </div>
  );
};

export default apitesting;

// https://api.etherscan.io/api
//    ?module=logs
//    &action=getLogs
//    &address=0xa6B71E26C5e0845f74c812102Ca7114b6a896AB2
//    &fromBlock=12878196
//    &toBlock=12878196
//    &page=1
//    &offset=1000
//    &apikey=26TJW7XYJ3UUYQ7T9E3PV4TDZR748TR84V
