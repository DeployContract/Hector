import React from "react";
import { Connect, Application } from "hector";

/**
 * @param {Application} app Select Wallet application
 */
function useConnect(app?: Application) {
    const [count, addCount] = React.useState<number>(0);

    const changeStatus = () => addCount(count + 1);

    return [count, changeStatus];
}

export default useConnect;
