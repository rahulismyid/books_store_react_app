export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const REDUCE_QUANTITY = "REDUCE_QUANTITY";
export const EMPTY_CART = "EMPTY_CART";

export const addToCart = (bookData, qty) => async (dispatch, getState) => {
	// const { data } = await axios.get(`/api/products/${isbn}`);
	dispatch({
		type: CART_ADD_ITEM,
		payload: {
			isbn: bookData.isbn,
			title: bookData.title,
			image: bookData.image,
			price: bookData.price,
			qty,
		},
	});

	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartData));
};

export const removeFromCart = (book) => async (dispatch, getState) => {
	dispatch({
		type: CART_REMOVE_ITEM,
		payload: book,
	});
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartData));
};

export const reduceQuantity = (book, qty) => async (dispatch, getState) => {
	dispatch({
		type: REDUCE_QUANTITY,
		payload: {
			book,
			qty,
		},
	});
	localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartData));
};

export const emptyCart = () => {
	localStorage.setItem("cartItems", []);
	return {
		type: EMPTY_CART,
	};
};
