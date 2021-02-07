import {authApi} from "./../api/authApi";

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

// TC - Thunk Creator

// Сделать так, чтобы запрос на авторизацию слался периодически для проверки авторизации !!!!!!!!!!!!!!!!!!!
//Разделить на logIn и logOut 															 !!!!!!!!!!!!!!!!!!!
export let authorizeMeThunk = () => (dispatch) => {
	authApi
		.authMe()
		.then((data) => {
			if (data.resultCode === 0) {
				let {email, id, login} = data.data;
				dispatch(setAuthData(email, id, login));
				dispatch(toggleIsLogined());
			}
		})
		.catch((e) => console.log(e));
};

export default authReducer;
