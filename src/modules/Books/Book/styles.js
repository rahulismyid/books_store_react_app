import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	root: {
		maxWidth: "100%",
		background: "linear-gradient(45deg, #D9D9D9 30%, #E6E6E6 90%)",
		boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
	},
	cardContent: {
		display: "flex",
		justifyContent: "space-between",
	},
	cardActions: {
		display: "flex",
		justifyContent: "flex-end",
	},
}));
