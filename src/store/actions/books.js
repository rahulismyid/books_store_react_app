import booksData from "../../mock_data/books.json";
export const ADD_BOOKS = "ADD_BOOKS";

export const fetchBooks = () => async (dispatch) => {
	dispatch({
		type: ADD_BOOKS,
		payload: booksData,
	});
};
