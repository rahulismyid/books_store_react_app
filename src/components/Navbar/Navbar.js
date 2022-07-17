import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	AppBar,
	Toolbar,
	IconButton,
	Badge,
	Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Navbar = () => {
	const classes = useStyles();
	const location = useLocation();
	const totalItems = useSelector((state) => state.cart.cartData.length);

	const showCartIcon = () => {
		return ["/cart"].some((i) => location.pathname !== i);
	};

	return (
		<div>
			<AppBar position="fixed" className={classes.appBar} color="inherit">
				<Toolbar>
					<Typography
						component={Link}
						to="/"
						variant="h5"
						className={classes.title}
						color="inherit">
						<strong>BooK-Store</strong>
					</Typography>

					<div className={classes.grow} />
					{showCartIcon() && (
						<div className={classes.button}>
							<IconButton
								component={Link}
								to="/cart"
								aria-label="Show cart items"
								color="inherit">
								<Badge
									overlap="rectangular"
									badgeContent={totalItems}
									color="secondary">
									<ShoppingCart />
								</Badge>
							</IconButton>
						</div>
					)}
				</Toolbar>
			</AppBar>
			<Outlet />
		</div>
	);
};

export default Navbar;
