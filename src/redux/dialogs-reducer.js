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
      usersData: [],
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
