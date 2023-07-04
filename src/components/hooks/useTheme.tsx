import {Theme, ThemeContext} from "../theme/utilities/ThemeContext.ts";
import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY} from "../theme/utilities/ThemeProvider.tsx";

interface UseThemeProps {
    toggleTheme: () => void,
    theme: Theme
}

export function useTheme(): UseThemeProps {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break;
            case Theme.LIGHT:
                newTheme = Theme.DARK
                break;
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {
        theme: theme || Theme.LIGHT ,
        toggleTheme,
    }
}