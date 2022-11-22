import { connect, WalletConnection, Contract } from "near-api-js";
import config from "./config";

export async function initContract() {
	if (typeof window !== "undefined") {
		const nearConfig = config(process.env.NODE_ENV || "development");
		window.nearConnection = await connect(nearConfig);
		window.walletConnection = new WalletConnection(window.nearConnection);
		window.accountId = await window.walletConnection.getAccountId();

		window.contract = new Contract(window.walletConnection.account(), nearConfig.contractId, {
			viewMethods: ["getGreeting"],
			changeMethods: ["setGreeting"],
		});
	}
}

export function login() {
	if (typeof window !== "undefined") {
		window.walletConnection.requestSignIn(config(process.env.NODE_ENV || "development").contractId, "Near Next");
	}
}

export function logout() {
	if (typeof window !== "undefined") {
		window.walletConnection.signOut();
		window.location.reload();
	}
}
