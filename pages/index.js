import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	CardHeader,
	CardMedia,
	Container,
	Stack,
	Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Header from "../components/Layout/header";
import Hero from "../components/Layout/hero";

export default function Home({ products }) {
	console.log(products);
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
					minHeight: "50vh",
				}}
			>
				<Typography variant={"h2"} sx={{}}>
					Build Now
				</Typography>
				<Typography variant={"code"} sx={{ color: grey[900] }}>
					npx create-next-app my-app -e https://github.com/ymc182/next-near
				</Typography>

				<Stack
					spacing={2}
					direction="row"
					justifyContent="center"
					alignItems="center"
					sx={{
						height: "30vh",
						width: "50vw",
						overflow: "auto",
						background: "#090909",
						padding: "10px",
						borderRadius: "10px",
					}}
				>
					{products.map((product) => {
						return (
							<Card item key={product.title} sx={{ minWidth: "20vmin", height: "20vmin", textAlign: "center" }}>
								<CardMedia component="img" height="50vmin" image={product.thumbnail} alt="Paella dish" />
								<CardHeader subheader={product.title} />

								<CardContent>
									<Typography variant={"h6"}></Typography>
								</CardContent>
								<CardActionArea>${product.price}</CardActionArea>
							</Card>
						);
					})}
				</Stack>
			</Container>
		</div>
	);
}
// This gets called on every request
export async function getServerSideProps() {
	// Fetch data from external API
	const res = await fetch(`https://dummyjson.com/products`);
	const data = await res.json();
	const products = data.products;
	// Pass data to the page via props
	return { props: { products } };
}
