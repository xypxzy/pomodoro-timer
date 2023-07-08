import {memo, ReactNode} from 'react';
import cn from "classnames";
import cls from './Shortcuts.module.scss'

interface ShortcutsProps {
    className?: string;
    children: ReactNode;
}

export const Shortcuts = memo(({className, children}: ShortcutsProps) => {
    return (
        <div className={cn(cls.Shortcuts, className)}>
            {children}
        </div>
    );
});