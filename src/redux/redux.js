import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
      dialogs: dialogsReducer,
      profile: profileReducer,
      users: usersReducer,
});

let store = createStore(reducers);

window.state = store.getState();

export default store;
