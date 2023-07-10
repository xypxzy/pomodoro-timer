import {memo} from 'react';
import cn from "classnames";
import cls from './Menu.module.scss'
import {Statistics} from "@/features/Menu/ui/Statistics/Statistics.tsx";
import {ShortcutsMenu} from "@/features/Menu/ui/Shortcuts/ShortcutsMenu.tsx";
import {Preference} from "@/features/Preferences/ui/Preference.tsx";

interface MenuProps {
    className?: string;
}

export const Menu = memo(({className}: MenuProps) => {

    return (
        <div className={cn(cls.Menu, className)}>
            <Statistics />
            <Preference />
            <ShortcutsMenu />
        </div>
    );
});