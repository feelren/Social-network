import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Route, BrowserRouter } from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Sidebar state={props.state.dialogs.namesData} />
                <div className="wrapper-content">
                    <Route path="/profile" render={() => <Profile state={props.state.profile} />} />
                    <Route path="/dialogs" render={() => <Dialogs state={props.state.dialogs} addName={props.addName} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
