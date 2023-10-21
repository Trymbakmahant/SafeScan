import axios from "axios";

export async function ScanCall(
  address: string,
  apiKey: string,
  apiUrl: string
) {
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
