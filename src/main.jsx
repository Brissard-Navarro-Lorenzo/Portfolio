import React from "react";
import ReactDOM from "react-dom/client";
import Routeur from "./Components/Routeur";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <Routeur />
    </React.StrictMode>
);
