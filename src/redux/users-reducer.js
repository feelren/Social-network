import {usersApi} from "../api/usersApi";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_IN_PROGRESS = "TOGGLE_IS_IN_PROGRESS";

let initialState = {
	usersData: [],
	totalUsersCount: 0,
	usersPerPage: 4,
	currentPage: 1,
	isFetching: false,
	isInProgress: false,
};

let usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW: {
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.id && user.followed === false) {
						user.followed = true;
					}
					return user;
				}),
			};
		}

		case UNFOLLOW: {
			return {
				...state,
				usersData: state.usersData.map((user) => {
					if (user.id === action.id && user.followed === true) {
						user.followed = false;
					}
					return user;
				}),
			};
		}

		case SET_USERS: {
			return {
				...state,
				usersData: [...action.users],
			};
		}

		case SET_USERS_TOTAL_COUNT: {
			return {
				...state,
				totalUsersCount: action.count,
			};
		}

		case CHANGE_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.pageMoveTo,
			};
		}

		case TOGGLE_IS_FETCHING: {
			return {
				...state,
				isFetching: !state.isFetching,
			};
		}

		case TOGGLE_IS_IN_PROGRESS:
			return {
				...state,
				isInProgress: !state.isInProgress,
			};

		default:
			return state;
	}
};

export let setUsers = (users) => ({
	type: SET_USERS,
	users,
});

export let follow = (userID) => ({
	type: FOLLOW,
	id: userID,
});

export let unfollow = (userID) => ({
	type: UNFOLLOW,
	id: userID,
});

export let setUsersTotalCount = (count) => ({
	type: SET_USERS_TOTAL_COUNT,
	count: count,
});

export let changeCurrentPage = (pageMoveTo) => ({
	type: CHANGE_CURRENT_PAGE,
	pageMoveTo,
});

export let toggleIsFetching = () => ({
	type: TOGGLE_IS_FETCHING,
});

export let toggleIsInProgress = () => ({
	type: TOGGLE_IS_IN_PROGRESS,
});

// TC - Thunk Creator

export let getUsersTC = (currentPage, usersPerPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching());

		usersApi.getUsers(currentPage, usersPerPage).then((data) => {
			dispatch(toggleIsFetching());
			dispatch(setUsers(data.items));
			dispatch(setUsersTotalCount(data.totalCount));
		});
	};
};

export let changePageTC = (pageMoveTo, usersPerPage) => {
	return (dispatch) => {
		dispatch(toggleIsFetching());

		usersApi.getUsers(pageMoveTo, usersPerPage).then((data) => {
			dispatch(toggleIsFetching());
			dispatch(changeCurrentPage(pageMoveTo));
			dispatch(setUsers(data.items));
			dispatch(setUsersTotalCount(data.totalCount));
		});
	};
};

export let unfollowTC = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsInProgress(userId));

		usersApi.unfollow(userId)
			.then((data) => {
				if (data.resultCode === 0) {
					dispatch(unfollow(userId));
					dispatch(toggleIsInProgress(userId));
				}
			})
			.catch((e) => {
				console.log(e);
				dispatch(toggleIsInProgress(userId));
			});
	};
};

export let followTC = (userId) => {
	return (dispatch) => {
		dispatch(toggleIsInProgress(userId));

		usersApi.follow(userId)
			.then((data) => {
				if (data.resultCode === 0) {
					dispatch(follow(userId));
					dispatch(toggleIsInProgress(userId));
				}
			})
			.catch((e) => {
				console.log(e);
				dispatch(toggleIsInProgress(userId));
			});
	};
};

export default usersReducer;
