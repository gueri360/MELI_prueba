import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter, Router} from "react-router-dom";
import { createBrowserHistory } from "history";

import "./index.scss";

const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>,
);
