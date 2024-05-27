"use client";

import { cookieStorage, createStorage, http } from "wagmi";
import { blastSepolia, bscTestnet, sepolia } from "wagmi/chains";

import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = "40403191031d776bde5c7f3790eb4686";

const supportedChains: Chain[] = [sepolia, bscTestnet, blastSepolia];

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce(
    (obj, chain) => ({ ...obj, [chain.id]: http() }),
    {}
  ),
});
