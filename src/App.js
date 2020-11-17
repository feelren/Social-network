import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route } from "react-router-dom";

function App(props) {
    return (
        <div className="wrapper">
            <Header />
            <Sidebar state={props.state.dialogs.namesData} />
            <div className="wrapper-content">
                <Route path="/profile" render={() => <Profile state={props.state.profile.postsData} dispatch={props.dispatch} />} />
                <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogs} dispatch={props.dispatch} />} />
            </div>
        </div>
    );
}

export default App;