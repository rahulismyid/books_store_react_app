import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../store/actions/cart";

const Cart = ({ onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
	const classes = useStyles();
	const cart = useSelector((state) => state.cart.cartData);
	const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);
	const dispatch = useDispatch();

	const handleEmptyCart = () => dispatch(emptyCart());

	const renderEmptyCart = () => (
		<Typography variant="subtitle1">
			You have no items in your shopping cart,
			<Link className={classes.link} to="/">
				Start adding some!
			</Link>
		</Typography>
	);

	const renderCart = () => (
		<>
			<Grid container spacing={4} className={classes.gridContainer}>
				{cart.map((book) => (
					<Grid item xs={12} sm={4} md={3} key={book.isbn}>
						<CartItem
							item={book}
							onUpdateCartQty={onUpdateCartQty}
							onRemoveFromCart={onRemoveFromCart}
						/>
					</Grid>
				))}
			</Grid>
			<div className={classes.cardDetails}>
				<div>
					<Typography variant="h5">
						Subtotal: <b>${totalPrice}</b>
					</Typography>
				</div>
				<div className={classes.checkoutButtonGroup}>
					<Button
						className={classes.emptyButton}
						size="large"
						type="button"
						variant="contained"
						color="secondary"
						onClick={handleEmptyCart}>
						Empty cart
					</Button>
					<Button
						disabled
						className={classes.checkoutButton}
						size="large"
						type="button"
						variant="contained">
						Checkout
					</Button>
					<Grid
						container
						spacing={1}
						direction="row"
						justify="center"
						alignItems="center"
						alignContent="center"
						wrap="nowrap">
						<Typography
							style={{ marginTop: 10 }}
							variant="subtitle2"
							color="textSecondary">
							<p>
								<strong>Note:</strong> Checkout button is disabled
							</p>
						</Typography>
					</Grid>
				</div>
			</div>
		</>
	);

	return (
		<Container>
			<div className={classes.toolbar} />
			<Typography className={classes.title} variant="h5" gutterBottom>
				<b>Your Shopping Cart</b>
			</Typography>
			<hr />
			{!cart.length ? renderEmptyCart() : renderCart()}
		</Container>
	);
};

export default Cart;
