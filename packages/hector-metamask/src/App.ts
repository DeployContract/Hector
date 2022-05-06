import { Application } from "@qhecuba/hector";

export class Metamask implements Application {
    /**
     * Wallet that selected by user
     */
    wallet: string;

    /**
     * TODO: <Write>
     */
    window: any;

    constructor(window: any) {
        this.window = window;
    }

    /**
     * Info: It also can return Promise but its good for now
     */
    public isMetamaskInstalled(): boolean {
        return Boolean(this.window.ethereum);
    }

    /*
     * Connect to the metamask and recive selected wallet address
     */
    public connect(): Promise<string> {
        // Now recive wallet address from user
        const wallet = this.window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accounts: Array<string>) => accounts[0])
            .catch((err: any) =>
                Promise.reject(
                    "Cant get wallet address ! Metamask Error: " + err
                )
            );

        this.wallet = wallet;

        return Promise.resolve(wallet);
    }

    /**
     * @returns {Promise<string>} this.wallet
     */
    public getWallet(): Promise<string> {
        return Promise.resolve(this.wallet);
    }

    /*
     * Returns selected chainId
     */
    public getChainId(): Promise<string> {
        const id = this.window.ethereum
            .request({ method: "eth_chainId" })
            .then((id: string) => id)
            .catch((err: any) => Promise.reject(err));

        return Promise.resolve(id);
    }
}
