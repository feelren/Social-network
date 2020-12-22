import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

function App() {
      return (
            <div className="wrapper">
                  <Header />
                  <Sidebar />
                  <div className="wrapper-content">
                        <Route path="/profile" render={() => <Profile />} />
                        <Route path="/dialogs" render={() => <Dialogs />} />
                  </div>
            </div>
      );
}

export default App;
