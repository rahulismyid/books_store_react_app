import React from "react";
import {
	Typography,
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";
import {
	addToCart,
	reduceQuantity,
	removeFromCart,
} from "../../../store/actions/cart";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleUpdateCartQty = (book) => dispatch(addToCart(book, 1));

	const handleReduceCartQty = (book) => dispatch(reduceQuantity(book, 1));

	const handleRemoveFromCart = (book) => {
		dispatch(removeFromCart(book));
	};

	return (
		<Card className="cart-item">
			<CardMedia
				image={item.image}
				alt={item.title}
				className={classes.media}
			/>
			<CardContent className={classes.cardContent}>
				<Typography variant="h6">{item.title}</Typography>
				<Typography variant="h6" color="secondary">
					${item.price}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button
						type="button"
						size="small"
						onClick={() => handleReduceCartQty(item, item.qty - 1)}>
						-
					</Button>
					<Typography>&nbsp;{item.qty}&nbsp;</Typography>
					<Button
						type="button"
						size="small"
						onClick={() => handleUpdateCartQty(item, item.qty + 1)}>
						+
					</Button>
				</div>
				<Button
					className={classes.button}
					variant="contained"
					type="button"
					color="secondary"
					onClick={() => handleRemoveFromCart(item)}>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
