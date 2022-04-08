import { Application } from "./index";

class Connect {
    private wallet: Application;

    constructor(wallet: Application) {
        this.wallet = wallet;
    }

    /**
     * Try connect to wallet
     * @returns Returns Result of connection
     */
    public async connect(): Promise<boolean> {
        try {
            await this.wallet.connect();
        } catch (error) {
            Promise.reject(error);
        }

        return true;
    }

    /**
     * Returns selected wallet
     */
    public async getSelectedwallet(): Promise<string> {
        const wallet = await this.wallet.getWallet();

        return wallet;
    }
}

export default Connect;
