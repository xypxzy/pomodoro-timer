import {createContext} from "react";

export enum Theme {
    DARK = 'DARK',
    LIGHT = 'LIGHT',
}

export interface ThemeContextProps {
    theme?: Theme,
    setTheme?: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({});