import {memo, ReactNode} from 'react';
import cn from "classnames";
import cls from './MenuItem.module.scss'
import {Shortcuts} from "@/shared/ui/Shortcuts/Shortcuts.tsx";

interface MenuItemProps {
    className?: string;
    children: ReactNode;
    shortcut?: string[];
    onClick?: () => void;
    justify?: boolean
}

export const MenuItem = memo(({className, children, shortcut, onClick, justify}: MenuItemProps) => {
    return (
        <div className={cn(cls.MenuItem, className)} onClick={onClick}>
            <span className={cn(
                cls.items, {
                    [cls.justify]: justify === true
                }
            )}>
                {children}
            </span>
            {
                shortcut && (
                    <span className={cls.shortcuts}>
                    {
                        shortcut.map((str, index) => (
                            <Shortcuts key={index}>{str}</Shortcuts>
                        ))
                    }
                    </span>
                )
            }

        </div>
    );
});