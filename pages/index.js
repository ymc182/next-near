import { login, logout } from "../lib/near/utils";
import { useNearContext } from "../context/nearContext";
export default function Home() {
	const { loadedNear, walletId, contract } = useNearContext();

	return (
		<div>
			<h1>NEAR is loaded</h1>

			{walletId ? (
				<button onClick={logout}>{window.accountId} Sign out</button>
			) : (
				<button onClick={login}>Sign in</button>
			)}
		</div>
	);
}
