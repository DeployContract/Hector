import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Connect } from "@qhecuba/hector";
import Metamask from "@qhecuba/hector-metamask";

declare var window: any;

function App() {
    // const connection = new Connect(new Metamask(window));
    // connection.connect().then((isConnectd) => console.log(isConnectd));

    return (
        <div className="App">
            <h1>{1}</h1>
            <button onClick={alert}>Connect</button>
        </div>
    );
}

export default App;
