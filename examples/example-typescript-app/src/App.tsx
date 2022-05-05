import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useConnect } from "@qhecuba/hector-react-hooks";

declare var window: any;

function App() {
    const [] = useConnect();
    return (
        <div className="App">
            <h1>{1}</h1>
            <button onClick={alert}>Connect</button>
        </div>
    );
}

export default App;
