const CHANGE_MESSAGE_TEXT = "CHANGE-MESSAGE-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
      newText: "",
      chatsData: [
            {
                  id: 0,
                  message: "Салют!)",
            },
            {
                  id: 1,
                  message: "Даров. Как сам?",
            },
            {
                  id: 2,
                  message: "С ДР!",
            },
            {
                  id: 3,
                  message: "привет",
            },
            {
                  id: 4,
                  message: "здравствуйте, у вас кран потiк",
            },
            {
                  id: 5,
                  message: "нормал)))",
            },
      ],
      namesData: [
            {
                  id: 0,
                  name: "Патя",
                  src:
                        "https://sun1-25.userapi.com/impg/c857332/v857332883/ae205/PGxIRyCrm5I.jpg?size=200x0&quality=90&crop=0,110,1287,1924&sign=1819a2023b3c091b88bf14f780a41ca2&ava=1",
            },
            {
                  id: 1,
                  name: "Вася",
                  src:
                        "https://sun1-27.userapi.com/impf/c623423/v623423107/3468/jH-pMk_X2c8.jpg?size=200x0&quality=90&crop=366,0,1465,1465&sign=6d6f85d2d9accb70a1ec1e0c23e60358&ava=1",
            },
            {
                  id: 2,
                  name: "Мотя",
                  src:
                        "https://sun9-47.userapi.com/impf/n3TZaSTTR7fT_PRqYF_ibZiaC7UnWbVFMGUt1Q/6nJSpx1zmEM.jpg?size=200x0&quality=90&crop=26,26,483,754&sign=190dde022b01aa0df1d34e56e61558bb&ava=1",
            },
            {
                  id: 3,
                  name: "Витя",
                  src:
                        "https://sun9-35.userapi.com/impf/c841131/v841131942/26fd6/5tkwSACuwiY.jpg?size=200x0&quality=90&crop=225,0,1707,1707&sign=64b873115668fadc9597aadca706b7e9&ava=1",
            },
            {
                  id: 4,
                  name: "Мага",
                  src:
                        "https://sun1-85.userapi.com/impf/c850016/v850016219/1d71ee/6beM8Dn6-CU.jpg?size=200x0&quality=90&crop=377,611,948,948&sign=0ff9f20e53ad50c76108eecdb2b8d091&ava=1",
            },
            {
                  id: 5,
                  name: "Лиса",
                  src:
                        "https://sun9-45.userapi.com/impg/mbAXP7oFkteb-TWb2KxBMGpXzVkPJHf1kQgzfA/7fLxjHjpBEI.jpg?size=200x0&quality=90&crop=3,14,794,794&sign=26fb5196730f207235564a221e319b56&ava=1",
            },
      ],
};

let dialogsReducer = (state = initialState, action) => {
      switch (action.type) {
            case ADD_MESSAGE: {
                  switch (Boolean(state.newText)) {
                        case true: {
                              let newObj = {
                                    id: state.chatsData.length,
                                    message: state.newText,
                              };
                              return {...state, newText: "", chatsData: [...state.chatsData, newObj]};
                        }

                        default: {
                              alert("Поле пустое :(");
                              break;
                        }
                  }
                  return state;
            }

            case CHANGE_MESSAGE_TEXT: {
                  return {...state, newText: action.text};
            }

            default: {
                  return state;
            }
      }
};

export let changeMessageTextActionCreator = (text) => {
      return {
            type: CHANGE_MESSAGE_TEXT,
            text: text,
      };
};

export let addMessageActionCreator = () => {
      return {
            type: ADD_MESSAGE,
      };
};

export default dialogsReducer;
