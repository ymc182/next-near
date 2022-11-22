import { createContext, useContext, useEffect, useState } from "react";
import { initContract } from "../lib/near/utils";

const NearContext = createContext();

export function NearWrapper({ children }) {
	const [loadedNear, setLoadedNear] = useState(false);
	const [walletId, setWalletId] = useState(null);
	const [contract, setContract] = useState(null);
	useEffect(() => {
		initContract().then(() => {
			setLoadedNear(true);
			if (typeof window !== "undefined") {
				setContract(window.contract);
				if (window.walletConnection.isSignedIn()) {
					setWalletId(window.walletConnection.getAccountId());
				}
			}
		});
	}, []);

	const sharedState = {
		loadedNear,
		walletId,
		contract,
	};

	return <NearContext.Provider value={sharedState}>{loadedNear && children}</NearContext.Provider>;
}

export function useNearContext() {
	return useContext(NearContext);
}
