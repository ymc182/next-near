import { Container, Typography } from "@mui/material";
import { Div, StyledButton } from "../StyledComponents";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNearContext } from "../../context/nearContext";
import { login, logout } from "../../lib/near/utils";
export default function Header() {
	const { walletId } = useNearContext();
	return (
		<Div sx={{ height: "9vh", display: "flex", alignItems: "center" }}>
			<Container maxWidth="xl" sx={{ display: "flex", alignItems: "center" }}>
				<Typography variant={"h3"}>LOGO</Typography>
				<Typography sx={{ flexGrow: "1", display: "flex", justifyContent: "space-around" }} component={"div"}>
					<Typography>Link A</Typography>
					<Typography>Link B</Typography>
					<Typography>Link C</Typography>
				</Typography>

				{walletId ? (
					<StyledButton startIcon={<LogoutIcon />} onClick={logout}>
						{window.accountId}
					</StyledButton>
				) : (
					<StyledButton startIcon={<AccountBalanceWalletIcon />} onClick={login}>
						Sign in
					</StyledButton>
				)}
			</Container>
		</Div>
	);
}
