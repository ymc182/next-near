import { Div } from "../StyledComponents";
import ewtdLight from "../../assets/ewtd-light.png";
import { Typography } from "@mui/material";
import style from "../../styles/Hero.module.css";
export default function Hero() {
	return (
		<Div
			sx={{
				display: "flex",
				justifyContent: "space-around",
				minHeight: "30vh",
				alignItems: "center",
				paddingBottom: "5vh",
			}}
		>
			<Typography variant="h3">Near x Next.js</Typography>
			<div
				style={{
					background: `url(${ewtdLight.src})`,
					height: "30vmin",
					width: "30vmin",
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
				}}
				className={style.rotate}
			></div>
		</Div>
	);
}
