import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { NearWrapper } from "../context/nearContext";
import "../styles/globals.css";
import { grey } from "@mui/material/colors";
const theme = createTheme({
	palette: {
		type: "light",
		primary: {
			main: "#121212",
			light: "#ffffff",
			dark: "#7b7b7b",
		},
		secondary: {
			main: "#fbf9f8",
		},
		background: {
			paper: "#181818",
		},
		warning: {
			main: "#ff3d00",
		},
		text: {
			primary: grey[50],
			secondary: grey[300],
			disabled: grey[500],
			hint: grey[300],
		},
	},
	components: {
		MuiIcon: {
			defaultProps: {
				color: grey[50],
			},
		},
		MuiDiv: {
			styleOverrides: {
				root: {
					backgroundColor: grey[900],
				},
			},
		},
	},
	typography: {
		fontFamily: "Teko, sans-serif",
	},
});
function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<NearWrapper>
				<Component {...pageProps} />
			</NearWrapper>
			<CssBaseline />
		</ThemeProvider>
	);
}

export default MyApp;
