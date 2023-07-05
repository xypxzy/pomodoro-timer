import React from 'react'
import ReactDOM from 'react-dom/client'
import {StoreProvider} from "@/app/providers/StoreProvider";
import {ThemeProvider} from "@/app/providers/ThemeProvider";
import {ModeProvider} from "@/app/providers/ModeProvider";
import App from "@/app/App.tsx";
import '@/app/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <StoreProvider>
            <ThemeProvider>
                <ModeProvider>
                    <App />
                </ModeProvider>
            </ThemeProvider>
        </StoreProvider>
    </React.StrictMode>,
)
