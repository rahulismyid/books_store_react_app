import { removeItemFromList } from "../../utils/common";
import {
	CART_ADD_ITEM,
	CART_REMOVE_ITEM,
	EMPTY_CART,
	REDUCE_QUANTITY,
} from "../actions/cart";

const cartItemsFromStorage = !localStorage.getItem("cartItems")
	? []
	: JSON.parse(localStorage.getItem("cartItems"));

const initialState = {
	cartData: cartItemsFromStorage,
};

const addOrRemoveItem = ({
	list,
	comparerObj,
	payload,
	qtyToAddOrRemove,
	operator,
	maxQuantity = 10,
}) => {
	if (operator === "-") {
		return list.map((x) =>
			x.isbn === comparerObj.isbn
				? { ...payload, qty: x.qty - qtyToAddOrRemove }
				: x
		);
	}
	return list.map((x) =>
		x.isbn === comparerObj.isbn
			? {
					...payload,
					qty:
						x.qty + qtyToAddOrRemove >= maxQuantity + 1
							? x.qty
							: x.qty + qtyToAddOrRemove,
			  }
			: x
	);
};

export const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case CART_ADD_ITEM:
			const item = action.payload;
			const existingItem = state.cartData.find((x) => x.isbn === item.isbn);
			const addByQty = action.payload.qty || 1;
			if (existingItem) {
				return {
					...state,
					cartData: addOrRemoveItem({
						list: state.cartData,
						comparerObj: existingItem || {},
						payload: item,
						qtyToAddOrRemove: addByQty,
						operator: "+",
					}),
				};
			} else {
				return {
					...state,
					cartData: [...state.cartData, item],
				};
			}
		case CART_REMOVE_ITEM:
			return {
				...state,
				cartData: removeItemFromList(state.cartData, action.payload, "isbn"),
			};
		case REDUCE_QUANTITY:
			const payloadBook = action.payload.book;
			const existingBook = state.cartData.find(
				(x) => x.isbn === payloadBook.isbn
			);
			const reduceByQty = action.payload.qty || 1;

			if (existingBook.qty > 1) {
				return {
					...state,
					cartData: addOrRemoveItem({
						list: state.cartData,
						comparerObj: existingBook,
						payload: payloadBook || {},
						qtyToAddOrRemove: reduceByQty,
						operator: "-",
					}),
				};
			} else {
				return {
					...state,
					cartData: removeItemFromList(state.cartData, payloadBook, "isbn"),
				};
			}

		case EMPTY_CART:
			return {
				cartData: [],
			};
		default:
			return state;
	}
};
