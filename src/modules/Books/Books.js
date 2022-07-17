import React, { useEffect, useState } from "react";
import { Grid, InputAdornment, Input, Button } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import booksData from "../../mock_data/books.json";
import useStyles from "./styles";
import { dropdownList } from "../../utils/constants";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Carousal = React.lazy(() => import("../../components/Carousel/Carousel"));
const Dropdown = React.lazy(() =>
	import("../../components/SelectDropdown/Dropdown")
);
const Book = React.lazy(() => import("./Book/Book.js"));

const Books = () => {
	const classes = useStyles();
	const [searchTerm, setSearchTerm] = useState("");
	const [books, setBooks] = useState([]);
	const [sortBy, setSortBy] = useState("");

	useEffect(() => {
		setBooks(booksData);
	}, []);

	const sortBooksBy = (list) => {
		let key = "";
		switch (true) {
			case sortBy === "price_asc" || sortBy === "review_asc":
				key = sortBy === "price_asc" ? "price" : "review";
				return list.sort((a, b) => a[key] - b[key]);
			case sortBy === "price_dsc" || sortBy === "review_dsc":
				key = sortBy === "price_dsc" ? "price" : "review";
				return list.sort((a, b) => b[key] - a[key]);
			default:
				return list;
		}
	};

	const handleSearch = (str = "", limit = 0) => {
		if (str.length >= limit) {
			setSearchTerm(str);
		}
	};

	return (
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<Carousal />
			<div className={classes.searchContainer}>
				<Input
					className={classes.searchBar}
					type="text"
					placeholder="Search Title, Author"
					onChange={(event) => {
						handleSearch(event.target.value);
					}}
					startAdornment={
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					}
				/>
				<Dropdown dropdownList={dropdownList} onChange={setSortBy} />
			</div>

			<Grid
				className={classes.content}
				container
				justifyContent="center"
				spacing={5}>
				{sortBooksBy(
					books.filter((book) => {
						if (
							searchTerm === "" ||
							book.title
								.toLowerCase()
								.includes(searchTerm.toLocaleLowerCase()) ||
							book.author.toLowerCase().includes(searchTerm.toLocaleLowerCase())
						) {
							return book;
						}
					})
				).map((book) => (
					<Grid item key={book.isbn} xs={12} sm={6} md={4} lg={3} id="pro">
						<Book book={book} />
					</Grid>
				))}
			</Grid>
		</main>
	);
};

export default Books;
