import {ChangeEvent, HTMLAttributes, memo, useState} from 'react';
import cn from "classnames";
import cls from './Input.module.scss'

export interface InputProps extends HTMLAttributes<HTMLInputElement>{
    className?: string;
}

export const Input = memo(({className, ...otherProps}: InputProps) => {
    const [number, setNumber] = useState<number | undefined>(undefined);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputNumber = parseInt(event.target.value);
        setNumber(Number.isNaN(inputNumber) ? undefined : inputNumber);
    };
    return (
        <input
            type="number"
            value={number !== undefined ? number.toString() : ''}
            onChange={handleChange}
            className={cn(cls.input, className)}
            {...otherProps}
        />
    );
});