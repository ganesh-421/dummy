import "./bootstrap";
import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("app")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
