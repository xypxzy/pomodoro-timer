import {HTMLAttributes, memo, ReactNode} from 'react';
import cn from "classnames";
import cls from './Button.module.scss'

export type ButtonSize = 'small' | 'medium' | 'big';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement>{
    className?: string;
    onClick?: () => void;
    size?: ButtonSize;
    children: ReactNode
}

export const Button = memo((props: ButtonProps) => {
    const {className, size = 'big', children, onClick, ...otherProps} = props;
    return (
        <button
            className={cn(cls.Button, className, {
                [cls.big]: size === 'big',
                [cls.medium]: size === 'medium',
                [cls.small]: size === 'small',
            })}
            onClick={onClick}
            {...otherProps}
        >
            {children}
        </button>
    );
});