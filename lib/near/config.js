import { keyStores } from "near-api-js";
const mainnetContract = "nephilim.near";
const testContract = "nephilim.testnet";
export default function config(conf) {
	switch (conf) {
		case "testnet":
		case "development":
			return {
				networkId: "testnet",
				keyStore: new keyStores.BrowserLocalStorageKeyStore(),
				nodeUrl: "https://rpc.testnet.near.org",
				walletUrl: "https://wallet.testnet.near.org",
				helperUrl: "https://helper.testnet.near.org",
				explorerUrl: "https://explorer.testnet.near.org",
				contractId: testContract,
			};
		case "mainnet":
		case "production":
			return {
				networkId: "mainnet",
				keyStore: new keyStores.BrowserLocalStorageKeyStore(),
				nodeUrl: "https://rpc.mainnet.near.org",
				walletUrl: "https://wallet.mainnet.near.org",
				helperUrl: "https://helper.mainnet.near.org",
				explorerUrl: "https://explorer.mainnet.near.org",
				contractId: mainnetContract,
			};
	}
}
