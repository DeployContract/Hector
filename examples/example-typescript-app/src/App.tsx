import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useConnect, wallets } from "@qhecuba/hector-react-hooks";
import { useEffect } from "react";

function App() {
    const [status, connect, getWallet] = useConnect(wallets.metamask());

    useEffect(() => {
        connect();
        getWallet();
    }, []);

    return (
        <div className="App">
            <h1>{status.isConnected ? "Connected" : "Not connected"}</h1>
            <p>Wallet: {status.wallet}</p>
            <button onClick={connect}>Connect</button>
        </div>
    );
}

export default App;
