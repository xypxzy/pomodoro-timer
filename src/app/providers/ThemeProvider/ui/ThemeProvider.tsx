import {ReactNode, useMemo, useState} from "react";
import { ThemeContext } from "@/shared/lib/context/ThemeContext.ts";
import { Theme } from "@/shared/const/theme.ts";
import { LOCAL_STORAGE_THEME_KEY } from "@/shared/const/localStorage.ts";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defaultProps  = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps} >
            {children}
        </ThemeContext.Provider>
    )
}


