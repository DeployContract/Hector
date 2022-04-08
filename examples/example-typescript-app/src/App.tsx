import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Connect, log } from "hector";
import Metamask from "hector-metamask";

declare var window: any;

function App() {
    const connectToMetamask = () =>
        new Connect(new Metamask(window))
            .connect()
            .then((result) => log(null, result));

    return (
        <div className="App">
            <button onClick={connectToMetamask}>Connect</button>
        </div>
    );
}

export default App;
