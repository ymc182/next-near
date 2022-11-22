import { NearWrapper } from "../context/nearContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<NearWrapper>
			<Component {...pageProps} />
		</NearWrapper>
	);
}

export default MyApp;
