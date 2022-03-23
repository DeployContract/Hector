import { core } from "../index";

declare const window: any;

// Use create() method for create a object
// Good for UX and security.
export class Metamask implements core.Application {

    wallet: string;

    // creates a metamask object with check
    // If installed or not
    public static create(): Promise<Metamask> {
        if (!window.ethereum) return Promise.reject("Metamask is not installed");

        return Promise.resolve(new Metamask());
    }

    /*
     * Connect to the metamask and recive selected wallet address
     */
    public connect(): Promise<string> {
        // Now recive wallet address from user
        const wallet = window.ethereum.request({ method: 'eth_requestAccounts' })
            .then((accounts: Array<string>) => accounts[0])
            .catch((err: any) => Promise.reject("Cant get wallet address ! Metamask Error: " + err));

        this.wallet = wallet;

        return Promise.resolve(wallet);
    }

    /*
     * Returns this.wallet
     */
    public getWallet(): Promise<string> {
        return Promise.resolve(this.wallet);
    }

    /*
     * Returns selected chainId
     */
    public chainId(): Promise<number> {
        const id = window.ethereum.request({ method: 'eth_chainId' })
            .then((id: number) => id)
            .catch((err: any) => Promise.reject(err));

        return Promise.resolve(id);
    }
}
