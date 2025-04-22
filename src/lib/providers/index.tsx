"use client"
import { store } from "@/redux/store";
import { Provider } from "react-redux";

const Providers = ({children}: {children: React.ReactNode}) => {
    console.log('%cproviders, 2', 'color: red; font-weight: bold;',
    "Logging Providers"
    );
    
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default Providers;