import {memo} from "react";
import {useTheme} from "../../../shared/lib/hooks/useTheme/useTheme.tsx";
import Switch from "@/shared/ui/Switch/Switch.tsx";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <Switch theme={theme} toggleBtn={toggleTheme} />
    )
})