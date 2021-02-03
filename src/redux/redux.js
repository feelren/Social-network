import {createStore, combineReducers, applyMiddleware} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";

let reducers = combineReducers({
	dialogs: dialogsReducer,
	profile: profileReducer,
	users: usersReducer,
	auth: authReducer,
});

let store = createStore(reducers, applyMiddleware(thunk));

window.state = store.getState();

export default store;
