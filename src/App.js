import React, {useEffect} from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import {useDispatch} from "react-redux";
import {authorizeMeThunk} from "./redux/auth-reducer";

function App() {
	let dispatch = useDispatch();

	useEffect(() => {
		dispatch(authorizeMeThunk());
	}, [dispatch]);

	return (
		<div className="wrapper">
			<Header />
			<Sidebar />
			<div className="wrapper-content">
				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/users" render={() => <Users />} />
				<Route path="/dialogs" render={() => <Dialogs />} />
				<Route path="/login" render={() => <Login />} />
			</div>
		</div>
	);
}

export default App;
