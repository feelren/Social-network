const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
      usersData: [
            // {
            //       id: 0,
            //       name: "Ася",
            //       surname: "Пушкина",
            //       status: "Вот это здравствуйте",
            //       followed: true,
            //       photoURL: "https://sun1-25.userapi.com/impg/c857332/v857332883/ae205/PGxIRyCrm5I.jpg?size=200x0&quality=90&crop=0,110,1287,1924&sign=1819a2023b3c091b88bf14f780a41ca2&ava=1",
            //       location: {
            //             country: "Россия",
            //             city: "Москва",
            //       },
            // },
            // {
            //       id: 1,
            //       name: "Вася",
            //       surname: "Кремнев",
            //       status: "Лалка",
            //       followed: true,
            //       photoURL: "https://sun1-27.userapi.com/impf/c623423/v623423107/3468/jH-pMk_X2c8.jpg?size=200x0&quality=90&crop=366,0,1465,1465&sign=6d6f85d2d9accb70a1ec1e0c23e60358&ava=1",
            //       location: {
            //             country: "Россия",
            //             city: "Омск",
            //       },
            // },
            // {
            //       id: 2,
            //       name: "Мотя",
            //       surname: "Рашкина",
            //       status: "Взял мастера спорта по шашкам",
            //       followed: false,
            //       photoURL: "https://sun9-47.userapi.com/impf/n3TZaSTTR7fT_PRqYF_ibZiaC7UnWbVFMGUt1Q/6nJSpx1zmEM.jpg?size=200x0&quality=90&crop=26,26,483,754&sign=190dde022b01aa0df1d34e56e61558bb&ava=1",
            //       location: {
            //             country: "Россия",
            //             city: "Тюмень",
            //       },
            // },
            // {
            //       id: 3,
            //       name: "Витя",
            //       surname: "Мошкин",
            //       status: "Заплатил таксисту и не поехал ))",
            //       followed: true,
            //       photoURL: "https://sun9-35.userapi.com/impf/c841131/v841131942/26fd6/5tkwSACuwiY.jpg?size=200x0&quality=90&crop=225,0,1707,1707&sign=64b873115668fadc9597aadca706b7e9&ava=1",
            //       location: {
            //             country: "Россия",
            //             city: "Таганрог",
            //       },
            // },
            // {
            //       id: 4,
            //       name: "Мага",
            //       surname: "Веснушкин",
            //       status: "Жи есть",
            //       followed: false,
            //       photoURL: "https://sun1-85.userapi.com/impf/c850016/v850016219/1d71ee/6beM8Dn6-CU.jpg?size=200x0&quality=90&crop=377,611,948,948&sign=0ff9f20e53ad50c76108eecdb2b8d091&ava=1",
            //       location: {
            //             country: "Россия",
            //             city: "Обнинск",
            //       },
            // },
            // {
            //       id: 5,
            //       name: "Рома",
            //       surname: "Чекушкин",
            //       status: "Даст иш фантастиш",
            //       followed: true,
            //       photoURL: "https://sun9-45.userapi.com/impg/mbAXP7oFkteb-TWb2KxBMGpXzVkPJHf1kQgzfA/7fLxjHjpBEI.jpg?size=200x0&quality=90&crop=3,14,794,794&sign=26fb5196730f207235564a221e319b56&ava=1",
            //       location: {
            //             country: "Россия",
            //             city: "Щербинка",
            //       },
            // },
      ],
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
                        usersData: [...state.usersData, ...action.users],
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

export default usersReducer;
