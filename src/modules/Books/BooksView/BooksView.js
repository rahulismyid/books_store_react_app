import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Grid, Button, Typography } from "@material-ui/core";
import { addToCart } from "../../../store/actions/cart";
import AddToCartButton from "../../../components/AddToCartButton/AddToCartButton";
import Star from "../../../components/Stars/Star";
import mockData from "../../../mock_data/books.json";
import "./styles.css";

const createMarkup = (text) => {
	return { __html: text };
};

const BooksView = () => {
	const dispatch = useDispatch();
	const [book, setBook] = useState({});

	useEffect(() => {
		const id = window.location.pathname.split("/");
		fetchBook(id[2]);
	}, []);

	const fetchBook = async (id) => {
		const res = mockData.find((item) => item.isbn === id);
		setBook(res);
	};

	const onAddToCart = async (bookData, quantity) => {
		dispatch(addToCart(bookData, quantity));
	};

	return (
		<Container className="book-view">
			<Grid container>
				<Grid item xs={12} md={6} className="image-wrapper">
					<img src={book.image} alt={book.title} />
				</Grid>
				<Grid item xs={12} md={5} className="text">
					<Typography variant="h2">
						<b>{book.title}</b>
					</Typography>
					<Typography
						style={{ cursor: "pointer" }}
						title={book.author}
						variant="caption">
						<div>
							Author: <strong>{book.author}</strong>
						</div>
					</Typography>
					<hr />
					<Typography
						variant="subtitle1"
						dangerouslySetInnerHTML={createMarkup(book.description)}
					/>
					<br />

					<Typography variant="h3" color="secondary">
						<strong>
							<b>Price: ${book.price}</b>
						</strong>
					</Typography>

					<Star length={book.review} comments={book.comments} noMargin={true} />
					<br />
					<Grid container spacing={6}>
						<Grid item xs={6}>
							<AddToCartButton data={book} onAddToCart={onAddToCart} />
						</Grid>
						<Grid item xs={6}>
							<Button
								size="small"
								variant="contained"
								className="custom-button"
								component={Link}
								to="/">
								<b>Continue Shopping</b>
							</Button>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default BooksView;
