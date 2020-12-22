const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

let initialState = {
      newText: "",
      postsData: [
            {
                  id: 0,
                  text: "1",
                  likes: 2,
            },
            {
                  id: 1,
                  text: "2",
                  likes: 5,
            },
            {
                  id: 2,
                  text: "3",
                  likes: 0,
            },
            {
                  id: 3,
                  text: "4",
                  likes: 2,
            },
            {
                  id: 4,
                  text: "5",
                  likes: 1,
            },
            {
                  id: 5,
                  text: "6",
                  likes: 5,
            },
      ],
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
                              let stateCopy = {...state};
                              stateCopy.postsData = [...state.postsData];
                              stateCopy.postsData.push(newObj);
                              stateCopy.newText = "";
                              return stateCopy;
                        }

                        default: {
                              alert("Поле пустое");
                              break;
                        }
                  }
                  break;
            }

            case CHANGE_POST_TEXT: {
                  let stateCopy = {...state};
                  stateCopy.newText = action.text;
                  return stateCopy;
            }

            default: {
                  return state;
            }
      }
};

export let addPostActionCreator = () => {
      return {
            type: ADD_POST,
      };
};

export let changePostTextActionCreator = (text) => {
      return {
            type: CHANGE_POST_TEXT,
            text: text,
      };
};

export default profileReducer;
