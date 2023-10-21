interface ToggleOption {
  label: string;
  value: number;
  SafeTxService: string;
  ProviderLink: string;
  ScanLink: string;
  // ApiKey: string;
}
import * as dotenv from "dotenv";
dotenv.config(); // Call this to load the .env file

// Now you can access environment variables

export const options: ToggleOption[] = [
  {
    label: "ehterum",
    value: 1,
    SafeTxService: "https://safe-transaction-mainnet.safe.global/",
    ProviderLink: "https://mainnet.infura.io/v3/",
    ScanLink: "https://api.etherscan.io/api",
    // ApiKey: process.env.Eth_Main,
  },
  {
    label: "genosis chain",
    value: 100,
    SafeTxService: "https://safe-transaction-gnosis-chain.safe.global/",
    ProviderLink: "https://rpc.gnosischain.com",
    ScanLink: "https://api.gnosisscan.io/api",
    // ApiKey: process.env.Genosis_main,
  },
  {
    label: "polygon",
    value: 137,
    SafeTxService: "https://safe-transaction-polygon.safe.global/",
    ProviderLink: "https://polygon-mainnet.infura.io",
    ScanLink: "https://api.polygonscan.com/api",
    // ApiKey: process.env.Polygon,
  },
  {
    label: "Arbitrum one",
    value: 42161,
    SafeTxService: "https://safe-transaction-arbitrum.safe.global/",
    ProviderLink: "https://arbitrum-mainnet.infura.io",
    ScanLink: "https://api.arbiscan.io/api",
    // ApiKey: process.env.Arbitrum_one,
  },
  {
    label: "Avalanche c-chain",
    value: 43114,
    SafeTxService: "https://safe-transaction-avalanche.safe.global/",
    ProviderLink: "https://api.avax.network/ext/bc/C/rpc",
    ScanLink: "https://api.snowtrace.io/api",
    // ApiKey: process.env.Avalanche,
  },
  {
    label: "Celo",
    value: 42220,
    SafeTxService: "https://safe-transaction-celo.safe.global/",
    ProviderLink: "https://forno.celo.org",
    ScanLink: "https://api.celoscan.io/",
    // ApiKey: process.env.Celo,
  },
  {
    label: "Gorali",
    value: 5,
    SafeTxService: "https://safe-transaction-goerli.safe.global/",
    ProviderLink: "https://rpc.ankr.com/eth_goerli",
    ScanLink: "https://api-goerli.etherscan.io/api",
    // ApiKey: process.env.Goerli,
  },
  {
    label: "Base mainnet",
    value: 8453,
    SafeTxService: "https://safe-transaction-base.safe.global/",
    ProviderLink: "https://mainnet.base.org/",
    ScanLink: "https://mainnet.base.org/",
    // ApiKey: process.env.Base_Main,
  },
  {
    label: "BNB Smart Chain",
    value: 56,
    SafeTxService: "https://safe-transaction-bsc.safe.global/",
    ProviderLink: "https://bsc-dataseed.binance.org/",
    ScanLink: "https://api.bscscan.com/api",
    // ApiKey: process.env.BNB,
  },
  {
    label: "Optimism",
    value: 10,
    SafeTxService: "https://safe-transaction-optimism.safe.global/",
    ProviderLink: "https://optimistic.ethereum.io",
    ScanLink: "https://api-optimistic.etherscan.io/",
    // ApiKey: process.env.Optimisum,
  },
];
