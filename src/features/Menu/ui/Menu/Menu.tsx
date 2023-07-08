import {memo} from 'react';
import cn from "classnames";
import cls from './Menu.module.scss'
import {Preference} from "@/features/Menu/ui/Preference/Preference.tsx";
import {Statistics} from "@/features/Menu/ui/Statistics/Statistics.tsx";
import {ShortcutsMenu} from "@/features/Menu/ui/Shortcuts/ShortcutsMenu.tsx";

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