"use client";

import {
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";
import * as React from "react";
import { WagmiConfig } from "wagmi";

import { chains, config } from "../wagmi";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider
        coolMode
        theme={midnightTheme({
          accentColor: "#fafafa",
          accentColorForeground: "black",
          borderRadius: "large",
          fontStack: "system",
          overlayBlur: "small",
        })}
        chains={chains}
      >
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
