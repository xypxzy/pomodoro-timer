import {memo, ReactNode} from 'react';
import cn from "classnames";
import cls from './MenuItem.module.scss'
import {Shortcuts} from "@/shared/ui/Shortcuts/Shortcuts.tsx";

interface MenuItemProps {
    className?: string;
    children: ReactNode;
    shortcut?: string[];
    onClick?: () => void
}

export const MenuItem = memo(({className, children, shortcut, onClick}: MenuItemProps) => {
    return (
        <div className={cn(cls.MenuItem, className)} onClick={onClick}>
            <span className={cls.items}>{children}</span>
            <span className={cls.shortcuts}>
                {
                    shortcut?.map((str, index) => (
                        <Shortcuts key={index}>{str}</Shortcuts>
                    ))
                }
            </span>

        </div>
    );
});