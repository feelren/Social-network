import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import Users from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";

function App() {
	return (
		<div className="wrapper">
			<HeaderContainer />
			<Sidebar />
			<div className="wrapper-content">
				<Route path="/profile/:userId?" render={() => <ProfileContainer />} />
				<Route path="/users" render={() => <Users />} />
				<Route path="/dialogs" render={() => <Dialogs />} />
			</div>
		</div>
	);
}

export default App;
