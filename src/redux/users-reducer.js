const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT";
const CHANGE_CURRENT_PAGE = "CHANGE_CURRENT_PAGE";

let initialState = {
      usersData: [],
      totalUsersCount: 0,
      usersPerPage: 2,
      currentPage: 1,
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

            default:
                  return state;
      }
};

export let setUsersAC = (users) => {
      return {
            type: SET_USERS,
            users,
      };
};

export let followAC = (userID) => {
      return {
            type: FOLLOW,
            id: userID,
      };
};

export let unfollowAC = (userID) => {
      return {
            type: UNFOLLOW,
            id: userID,
      };
};

export let setUsersTotalCountAC = (count) => {
      return {
            type: SET_USERS_TOTAL_COUNT,
            count: count,
      };
};

export let changeCurrentPageAC = (pageMoveTo) => {
      return {
            type: CHANGE_CURRENT_PAGE,
            pageMoveTo,
      };
};

export default usersReducer;
