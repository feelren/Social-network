const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";
const SET_CURRENT_PROFILE = "SET_CURRENT_PROFILE";

let initialState = {
	newText: "",
	postsData: [
		{
			id: 0,
			text: "1423424242",
			likes: 2,
		},
		{
			id: 1,
			text: "212313",
			likes: 5,
		},
		{
			id: 2,
			text: "342424",
			likes: 0,
		},
		{
			id: 3,
			text: "4523524",
			likes: 2,
		},
		{
			id: 4,
			text: "55233254",
			likes: 1,
		},
		{
			id: 5,
			text: "6346q23",
			likes: 5,
		},
	],
	currentProfile: null,
};

let profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			switch (Boolean(state.newText)) {
				case true: {
					let newObj = {
						id: state.postsData.length,
						text: state.newText,
						likes: 0,
					};
					return {...state, newText: "", postsData: [...state.postsData, newObj]};
				}

				default: {
					alert("Поле пустое");
					break;
				}
			}
			return state;
		}

		case CHANGE_POST_TEXT: {
			return {...state, newText: action.text};
		}

		case SET_CURRENT_PROFILE: {
			return {
				...state,
				currentProfile: action.profile,
			};
		}

		default: {
			return state;
		}
	}
};

export let addPost = () => {
	return {
		type: ADD_POST,
	};
};

export let changePostText = (text) => {
	return {
		type: CHANGE_POST_TEXT,
		text: text,
	};
};

export let setCurrentProfile = (profile) => ({
	type: SET_CURRENT_PROFILE,
	profile,
});

export default profileReducer;
