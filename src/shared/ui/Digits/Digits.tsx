import {memo} from 'react';
import cn from "classnames";
import cls from './Digits.module.scss'
interface DigitsProps {
    className?: string;
    digits: number;
    isPlay: boolean;
}

export const Digits = memo((props: DigitsProps) => {
    const {className, digits, isPlay} = props;

    return (
        <h1
            className={cn(cls.digits, className)}
            style={isPlay ? {fontWeight: 700} : {fontWeight: 400}}
        >
            {digits.toString().length < 2 ? `0${digits}` : digits}
        </h1>
    );
});