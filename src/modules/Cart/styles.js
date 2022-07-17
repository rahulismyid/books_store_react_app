import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	gridContainer: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(5),
		["@media (max-width:425px)"]: {
			width: "100%",
			padding: theme.spacing(0),
			margin: 0,
		},
	},
	toolbar: theme.mixins.toolbar,
	title: {
		marginTop: "3%",
	},
	emptyButton: {
		// minWidth: "150px",
		[theme.breakpoints.down("xs")]: {
			marginBottom: "5px",
		},
		[theme.breakpoints.up("xs")]: {
			marginRight: "20px",
		},
	},
	checkoutButton: {
		// "minWidth": "150px",
		"background": "#1C2331",
		"color": "white",
		"height": "40px",
		"&:hover": {
			cursor: "not-allowed",
			backgroundColor: "#2a344a",
			boxShadow: "none",
			color: "white",
		},
		["@media (max-width:425px)"]: {
			padding: "0 10px",
			margin: 0,
			width: "42%",
		},
	},
	link: {
		textDecoration: "none",
	},
	cardDetails: {
		width: "100%",
		display: "flex",
		marginBottom: "5%",
		justifyContent: "space-around",
		flexDirection: "column",
		alignItems: "center",
	},
	checkoutButtonGroup: {
		["@media (max-width:425px)"]: {
			display: "flex",
			width: "100%",
			padding: theme.spacing(0),
			margin: 0,
		},
	},
}));
