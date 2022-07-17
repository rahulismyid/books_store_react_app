import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	CardActions,
	Typography,
	CardActionArea,
} from "@material-ui/core";
import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";
import ImageComponent from "../../../components/ImageComponent/ImageComponent";
import Star from "../../../components/Stars/Star";
import { addToCart } from "../../../store/actions/cart";
import useStyles from "./styles";

const Book = ({ book }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleText = (text = "", size = 13) => {
		return text && text.length > size ? text.slice(0, size - 1) + "…" : text;
	};
	const onAddToCart = async (bookData, quantity) => {
		dispatch(addToCart(bookData, quantity));
	};

	return (
		<>
			{book && (
				<Card className={classes.root}>
					<Link to={`book-view/${book.isbn}`}>
						<CardActionArea>
							<ImageComponent url={book.image} />
						</CardActionArea>
					</Link>
					<CardContent>
						<div className={classes.cardContent}>
							<Typography
								style={{ cursor: "pointer" }}
								title={book.title}
								variant="h6">
								<strong> {handleText(book.title)}</strong>
							</Typography>

							<Typography variant="h6" color="textPrimary">
								<div>
									$<b>{book.price}</b>
								</div>
							</Typography>
						</div>
						<Typography
							style={{ cursor: "pointer" }}
							title={book.author}
							variant="caption">
							<div>
								Author: <strong>{book.author}</strong>
							</div>
						</Typography>
						<Star length={book.review} comments={book.comments} />
					</CardContent>
					<CardActions disableSpacing className={classes.cardActions}>
						<AddToCartButton data={book} onAddToCart={onAddToCart} />
					</CardActions>
				</Card>
			)}
		</>
	);
};

export default Book;
