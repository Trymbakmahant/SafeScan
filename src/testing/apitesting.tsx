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

import React from "react";
import { DataThroughAddress } from "../utils/MaskNetwork-Api/RelationshipServiceUseingWeb3Bio";

const ApiTesting = () => {
  return (
    <div>
      ApiTesting
      <button
        onClick={async () => {
          try {
            const data = await DataThroughAddress(
              "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"
            );

            console.log(data);
          } catch (e) {
            console.log(e);
          }
        }}
      >
        click me{" "}
      </button>
    </div>
  );
};

export default ApiTesting;
