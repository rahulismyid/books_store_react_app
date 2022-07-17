import { ADD_BOOKS } from "../actions/books";

const initialState = {
	data_list: [],
};

export const booksReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_BOOKS:
			return {
				...state,
				data_list: action.payload,
			};
		default:
			return state;
	}
};
