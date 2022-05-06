import { Application } from "./index";

class Connect {
    private wallet: Application;

    constructor(wallet: Application) {
        this.wallet = wallet;
    }

    /**
     * @returns Result of connection
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
     * @returns selected wallet
     */
    public async getSelectedwallet(): Promise<string> {
        const wallet = await this.wallet.getWallet();

        return wallet;
    }

    /**
     * @returns selected chain id
     */
    public async getChainId(): Promise<string> {
        const chainId = await this.getChainId();

        return chainId;
    }

    /**
     * Sometimes app has functions that Connect dont support
     * You can get app from app() function
     * @returns App
     */
    public app(): Application {
        return this.wallet;
    }
}

export default Connect;
