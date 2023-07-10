import {ChangeEvent, HTMLAttributes, memo, useEffect, useState} from 'react';
import cn from "classnames";
import cls from './Input.module.scss'
import {Time} from "@/shared/const/modeStatus.ts";

export interface InputProps extends HTMLAttributes<HTMLInputElement>{
    className?: string;
    value: number;
    setCurrentTime: (time: Time) => void;
}

export const Input = memo((props: InputProps) => {
    const {className, value, setCurrentTime, ...otherProps} = props;

    const [number, setNumber] = useState<number | undefined>(value);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputNumber = parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
        setNumber(Number.isNaN(inputNumber) ? undefined : inputNumber);
    };

    useEffect(() => {
        if(number) {
            setCurrentTime({ minutes: number , seconds: 0})
        }
    }, [number]);

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