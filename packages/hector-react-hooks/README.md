# hector-react-hooks

Hector React hooks

# Install

Npm:

`npm install @qhecuba/hector-react-hooks`

Yarn:

`yarn add @qhecuba/hector-react-hooks`

# Usage

```typescript
const [status, connect, getWallet] = useConnect(wallets.metamask());
```

# Example

```typescript
import React from "react";
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
```
