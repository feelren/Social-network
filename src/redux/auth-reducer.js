const SET_AUTH_DATA = "SET_AUTH_DATA";
const TOGGLE_IS_LOGINED = "TOGGLE_IS_LOGINED";

let initialState = {
	email: null,
	id: null,
	login: null,
	isLogined: false,
};

let authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_AUTH_DATA: {
			return {
				...state,
				...action.data,
			};
		}

		case TOGGLE_IS_LOGINED: {
			return {
				...state,
				isLogined: !state.isLogined,
			};
		}

		default: {
			return state;
		}
	}
};

export let setAuthData = (email, id, login) => {
	let data = {
		email,
		id,
		login,
	};

	return {
		type: SET_AUTH_DATA,
		data,
	};
};

export let toggleIsLogined = () => ({
	type: TOGGLE_IS_LOGINED,
});

export default authReducer;
