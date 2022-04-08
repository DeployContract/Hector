export interface Application {
    /// Wallet address
    wallet: string;

    /// Connect to the wallet
    connect(): Promise<any>;

    /// Returns selected wallets
    getWallet(): Promise<string>;
}
