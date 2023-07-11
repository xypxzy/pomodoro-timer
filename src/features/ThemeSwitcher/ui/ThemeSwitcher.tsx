import {memo} from "react";
import {useTheme} from "../../../shared/lib/hooks/useTheme/useTheme.tsx";
import SwitchButton from "@/shared/ui/SwitchButton/SwitchButton.tsx";

export interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo(({}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme();
    return (
        <SwitchButton onToggle={toggleTheme} theme={theme} defaultOn={theme == 'DARK'}/>
    )
})