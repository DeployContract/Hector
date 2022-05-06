import { useState } from "react";
import { Application, Connect } from "@qhecuba/hector";
import Metamask from "@qhecuba/hector-metamask";

declare var window: any;

export const wallets = {
    metamask: () => new Metamask(window),
};

interface ConnectionStatus {
    /**
     * If wallet connected successfuly
     */
    isConnected: boolean;

    /**
     * Error
     */
    error: any;

    /**
     * Wallet witch user selected
     */
    wallet: string | null;

    /**
     * Selected chainId
     */
    chainId: string | null;
}

type setter = () => void;
type useConnectReturns = [ConnectionStatus, setter, setter, setter];

function useConnect(wallet: Application): useConnectReturns {
    const [state, setState] = useState<ConnectionStatus>({
        isConnected: false,
        error: null,
        wallet: null,
        chainId: null,
    });

    const newStat = (stat: object) => setState({ ...state, ...stat });

    const connection = new Connect(wallet);

    /**
     * When component mounted
     * Check if wallet connected already
     */
    // useEffect(() => {
    //     getWallet();
    // });

    const connect: setter = () =>
        connection
            .connect()
            .then((connected) => newStat({ isConnected: connected }))
            .catch((err) => newStat({ error: err }));

    const getWallet: setter = () =>
        connection
            .getSelectedwallet()
            .then((address) => newStat({ wallet: address }))
            .catch((err) => newStat({ error: err }));

    const getChainId: setter = () =>
        connection
            .getChainId()
            .then((id) => newStat({ chainId: id }))
            .catch((err) => newStat({ error: err }));

    return [state, connect, getWallet, getChainId];
}

export default useConnect;
