import {memo, ReactNode} from 'react';
import cn from "classnames";
import cls from './MenuItem.module.scss'

interface MenuItemProps {
    className?: string;
    children: ReactNode;
    shortcut?: string;
}

export const MenuItem = memo(({className,  children} : MenuItemProps) => {
    return (
        <div className={cn(cls.MenuItem, className)}>
            {children}
        </div>
    );
});