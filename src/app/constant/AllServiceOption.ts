interface ToggleOption {
  label: string;
  value: number;
  SafeTxService: string;
  ProviderLink: string;
  ScanLink: string;
  ApiKey: string;
}
export const options: ToggleOption[] = [
  {
    label: "ehterum",
    value: 1,
    SafeTxService: "https://safe-transaction-mainnet.safe.global/",
    ProviderLink: "https://mainnet.infura.io/v3/",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "genosis chain",
    value: 100,
    SafeTxService: "https://safe-transaction-gnosis-chain.safe.global/",
    ProviderLink: "https://rpc.gnosischain.com",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "polygon",
    value: 137,
    SafeTxService: "https://safe-transaction-polygon.safe.global/",
    ProviderLink: "https://polygon-mainnet.infura.io",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "Arbitrum one",
    value: 42161,
    SafeTxService: "https://safe-transaction-arbitrum.safe.global/",
    ProviderLink: "https://arbitrum-mainnet.infura.io",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "Avalanche c-chain",
    value: 43114,
    SafeTxService: "https://safe-transaction-avalanche.safe.global/",
    ProviderLink: "https://api.avax.network/ext/bc/C/rpc",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "Celo",
    value: 42220,
    SafeTxService: "https://safe-transaction-celo.safe.global/",
    ProviderLink: "https://forno.celo.org",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "Gorali",
    value: 5,
    SafeTxService: "https://safe-transaction-goerli.safe.global/",
    ProviderLink: "https://rpc.ankr.com/eth_goerli",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "Base mainnet",
    value: 8453,
    SafeTxService: "https://safe-transaction-base.safe.global/",
    ProviderLink: "https://mainnet.base.org/",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "BNB Smart Chain",
    value: 56,
    SafeTxService: "https://safe-transaction-bsc.safe.global/",
    ProviderLink: "https://bsc-dataseed.binance.org/",
    ScanLink: string,
    ApiKey: string,
  },
  {
    label: "Optimism",
    value: 10,
    SafeTxService: "https://safe-transaction-optimism.safe.global/",
    ProviderLink: "https://optimistic.ethereum.io",
    ScanLink: string,
    ApiKey: string,
  },
];
