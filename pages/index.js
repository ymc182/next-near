import { Container, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import Header from "../components/Layout/header";
import Hero from "../components/Layout/hero";

export default function Home() {
	return (
		<div>
			<Header />
			<Hero />
			<Container
				sx={{
					color: grey[900],
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					height: "50vh",
				}}
			>
				<Typography variant={"h2"} sx={{}}>
					Build Now
				</Typography>
				<Typography variant={"code"} sx={{ color: grey[900] }}>
					npx create-react-app my-app --template next-near
				</Typography>
			</Container>
		</div>
	);
}
