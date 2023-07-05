import React from 'react'
import ReactDOM from 'react-dom/client'
import {StoreProvider} from "@/app/providers/StoreProvider";
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import App from "@/app/App.tsx";
import {ModeStatusProvider} from "@/app/providers/ModeStatusProvider";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider>
            <ThemeProvider>
                <ModeStatusProvider>
                    <App />
                </ModeStatusProvider>
            </ThemeProvider>
        </StoreProvider>
    </React.StrictMode>,
)
