import {ReactNode} from 'react';
import {Provider} from "react-redux";
import {store} from "../config/store.ts";

interface Props {
    children : ReactNode,
}

export const StoreProvider  = ({children}: Props) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};