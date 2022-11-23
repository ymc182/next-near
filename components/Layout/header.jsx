import { Container, Typography } from "@mui/material";
import { Div, StyledButton } from "../StyledComponents";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNearContext } from "../../context/nearContext";

export default function Header() {
	const { selector, modal, accounts, accountId } = useNearContext();
	const handleSignOut = async () => {
		const wallet = await selector.wallet();

		wallet.signOut().catch((err) => {
			console.log("Failed to sign out");
			console.error(err);
		});
	};
	const handleSwitchAccount = () => {
		const currentIndex = accounts.findIndex((x) => x.accountId === accountId);
		const nextIndex = currentIndex < accounts.length - 1 ? currentIndex + 1 : 0;
		const nextAccountId = accounts[nextIndex].accountId;
		selector.setActiveAccount(nextAccountId);
		alert("Switched account to " + nextAccountId);
	};
	return (
		<Div sx={{ height: "9vh", display: "flex", alignItems: "center" }}>
			<Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
				<Typography variant={"h3"}>LOGO</Typography>
				<Typography sx={{ flexGrow: "1", display: "flex", justifyContent: "space-around" }} component={"div"}>
					<Typography>Link A</Typography>
					<Typography>Link B</Typography>
					<Typography>Link C</Typography>
				</Typography>

				{accountId ? (
					<StyledButton startIcon={<LogoutIcon />} onClick={handleSignOut}>
						{accountId}
					</StyledButton>
				) : (
					<StyledButton startIcon={<AccountBalanceWalletIcon />} onClick={modal.show}>
						Sign in
					</StyledButton>
				)}
			</Container>
		</Div>
	);
}
