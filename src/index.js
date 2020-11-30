import "./index.css";
import * as serviceWorker from "./serviceWorker";
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/redux";

let renderApp = (props) => {
      ReactDOM.render(
            <BrowserRouter>
                  <App state={props.getState()} dispatch={props.dispatch.bind(store)} />
            </BrowserRouter>,
            document.querySelector("#root")
      );
};

renderApp(store);

store.subscribe(() => {
      renderApp(store);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
