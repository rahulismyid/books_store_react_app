import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing(5),
		["@media (max-width:425px)"]: {
			width: "100%",
			padding: theme.spacing(0),
			margin: 0,
		},
	},
	root: {
		flexGrow: 1,
	},
	searchContainer: {
		justifyContent: "center",
		alignItems: "end",
		display: "flex",
		margin: "20px 40px 0px 40px",
		["@media (max-width:425px)"]: {
			width: "100%",
			padding: theme.spacing(0),
			margin: 0,
		},
	},
	searchBar: {
		height: "50%",
		width: "50%",
		paddingLeft: "10px",
		["@media (max-width:425px)"]: {
			width: "60%",
			padding: theme.spacing(0),
			margin: 0,
		},
	},
}));
