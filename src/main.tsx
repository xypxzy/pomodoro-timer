import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './components/styles/index.scss'
import ThemeProvider from "./components/theme/utilities/ThemeProvider.tsx";
import {Provider} from "react-redux";
import {store} from "./store.ts";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
)
