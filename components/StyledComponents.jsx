import { Button, styled } from "@mui/material";
import { grey } from "@mui/material/colors";
export const StyledButton = styled(Button)(({ style, theme, startIcon, endIcon }) => ({
	// Custom CSS
	...style,
	background: grey[900],
	color: grey[100],
	//hover
	"&:hover": {
		background: grey[100],
		color: grey[900],
	},
	//startIcon
	"& .MuiButton-startIcon": {
		marginRight: startIcon ? theme.spacing(1) : 0,
	},
	//endIcon
	"& .MuiButton-endIcon": {
		marginLeft: endIcon ? theme.spacing(1) : 0,
	},
}));
export const Div = styled("div", {
	name: "MuiDiv",
	overridesResolver: (props, styles) => {
		return [styles.root];
	},
})();
