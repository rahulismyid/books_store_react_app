import React from "react";
import { AddShoppingCart } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(() => ({
	buttonClass: {
		"background": "#1C2331",
		"color": "white",
		"width": "100%",
		"height": "40px",

		"&:hover": {
			backgroundColor: "#2a344a",
			boxShadow: "none",
		},
	},
}));

const AddToCartButton = ({ onAddToCart, data, qty = 1 }) => {
	const classes = useStyles();
	return (
		<Button
			size="small"
			variant="contained"
			className={classes.buttonClass}
			endIcon={<AddShoppingCart />}
			onClick={() => onAddToCart && onAddToCart(data, qty)}>
			<b>ADD TO CART</b>
		</Button>
	);
};

export default AddToCartButton;
