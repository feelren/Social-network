import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state, { subscriber } from "./redux/state";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { addName, addPost, changePostText } from "./redux/state.js";

let renderApp = (props) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={props} addName={addName} addPost={addPost} changePostText={changePostText} />
        </BrowserRouter>,
        document.querySelector("#root")
    );
};

renderApp(state);

subscriber(renderApp);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
