import {memo} from "react";
import {useTheme} from "../../../hooks/useTheme.tsx";
import Switch from "../../atoms/Switch/Switch.tsx";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Switch theme={theme} toggleBtn={toggleTheme} />
    )
})