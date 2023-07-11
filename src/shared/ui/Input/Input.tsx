import {ChangeEvent, HTMLAttributes, memo, useEffect, useState} from 'react';
import cn from "classnames";
import cls from './Input.module.scss'
import {Time} from "@/shared/const/modeStatus.ts";

export interface InputProps extends HTMLAttributes<HTMLInputElement>{
    className?: string;
    value?: number;
    setCurrentTime?: (time: Time) => void;
    setCount?: (count: number) => void;
}

export const Input = memo((props: InputProps) => {
    const {className, value, setCurrentTime, setCount, ...otherProps} = props;

    const [number, setNumber] = useState<number | undefined>(value);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const inputNumber = parseInt(event.target.value) > 0 ? parseInt(event.target.value) : 0;
        setNumber(Number.isNaN(inputNumber) ? undefined : inputNumber);
    };

    useEffect(() => {
        if(number && setCurrentTime) {
            setCurrentTime({ minutes: number , seconds: 0})
        }
        if(number && setCount) {
            setCount(number)
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