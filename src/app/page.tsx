"use client";
import { useRef } from "react";
import { Account } from "./components/wagmiCode/Account";
import { Balance } from "./components/wagmiCode/Balance";
import { BlockNumber } from "./components/wagmiCode/BlockNumber";
import { ConnectButton } from "./components/wagmiCode/ConnectButton";
import { Connected } from "./components/wagmiCode/Connected";
import { NetworkSwitcher } from "./components/wagmiCode/NetworkSwitcher";
import { ReadContract } from "./components/wagmiCode/ReadContract";
import { ReadContracts } from "./components/wagmiCode/ReadContracts";
import { ReadContractsInfinite } from "./components/wagmiCode/ReadContractsInfinite";
import { SendTransaction } from "./components/wagmiCode/SendTransaction";
import { SendTransactionPrepared } from "./components/wagmiCode/SendTransactionPrepared";
import { SignMessage } from "./components/wagmiCode/SignMessage";
import { SignTypedData } from "./components/wagmiCode/SignTypedData";
import { Token } from "./components/wagmiCode/Token";
import { WatchContractEvents } from "./components/wagmiCode/WatchContractEvents";
import { WatchPendingTransactions } from "./components/wagmiCode/WatchPendingTransactions";
import { WriteContract } from "./components/wagmiCode/WriteContract";
import { WriteContractPrepared } from "./components/wagmiCode/WriteContractPrepared";
import ButtonUsage from "./Home/page";
import Link from "next/link";
import Testing from "../testing/apitesting";
import GraphTesting from "../testing/graphqlTwitter";
import LandingPage from "./pages/LandingPage/page";
import Navbar from "./pages/Navbar";
import Tx from "./TransactionDetail/[tx]";
import SearchPage from "./pages/SearchPage/page";

function Page() {
  const inputref = useRef<HTMLInputElement | null>(null);
  const txurl = "./pages/TransactionDetail/[tx]";
  return (
    <>
      <Link
        href="/TransactionDetail/[tx]"
        as="/TransactionDetail/your-transaction-id"
      >
        hello
      </Link>

      <Connected>
        <Testing />
        <LandingPage />
      </Connected>

      {/* <h1>wagmi + RainbowKit + Next.js</h1>

      <ConnectButton />
      <ButtonUsage />
      <Connected>
        <hr />
        <h2>Network</h2>
        <NetworkSwitcher />
        <br />
        <hr />
        <h2>Account</h2>
        <Account />
        <br />
        <hr />
        <h2>Balance</h2>
        <Balance />
        <br />
        <hr />
        <h2>Block Number</h2>
        <BlockNumber />
        <br />
        <hr />
        <h2>Read Contract</h2>
        <ReadContract />
        <br />
        <hr />
        <h2>Read Contracts</h2>
        <ReadContracts />
        <br />
        <hr />
        <h2>Read Contracts Infinite</h2>
        <ReadContractsInfinite />
        <br />
        <hr />
        <h2>Send Transaction</h2>
        <SendTransaction />
        <br />
        <hr />
        <h2>Send Transaction (Prepared)</h2>
        <SendTransactionPrepared />
        <br />
        <hr />
        <h2>Sign Message</h2>
        <SignMessage />
        <br />
        <hr />
        <h2>Sign Typed Data</h2>
        <SignTypedData />
        <br />
        <hr />
        <h2>Token</h2>
        <Token />
        <br />
        <hr />
        <h2>Watch Contract Events</h2>
        <WatchContractEvents />
        <br />
        <hr />
        <h2>Watch Pending Transactions</h2>
        <WatchPendingTransactions />
        <br />
        <hr />
        <h2>Write Contract</h2>
        <WriteContract />
        <br />
        <hr />
        <h2>Write Contract (Prepared)</h2>
        <WriteContractPrepared />
      </Connected> */}
    </>
  );
}

export default Page;
