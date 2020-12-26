import {createStore, combineReducers} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reducers = combineReducers({
      dialogs: dialogsReducer,
      profile: profileReducer,
});

let store = createStore(reducers);

window.state = store.getState();

export default store;
