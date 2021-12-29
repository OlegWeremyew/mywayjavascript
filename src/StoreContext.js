import React from 'react';
import store from "./redux/reduxStore";
import App from "./App";

export const StoreContext = React.createContext(null)

export const Provider = (props) => {
    return (
        <div>
            <StoreContext.Provider value={props.store}>
                {props.children}
            </StoreContext.Provider>
        </div>
    )
}