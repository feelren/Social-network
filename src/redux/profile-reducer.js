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
            case ADD_POST:
                  switch (Boolean(state.newText)) {
                        case true:
                              let newObj = {
                                    id: state.postsData.length,
                                    text: state.newText,
                                    likes: 0,
                              };
                              state.postsData.push(newObj);
                              state.newText = "";
                              break;

                        default:
                              alert("Поле пустое");
                              break;
                  }
                  return state;

            case CHANGE_POST_TEXT:
                  state.newText = action.text;
                  return state;

            default:
                  return state;
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
