import {memo, useEffect} from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {Digits} from "@/shared/ui/Digits/Digits.tsx";
import {getIsPlay, getMinutes, getSeconds} from "../../model/selectors/timerSelectors.ts";
import {decrementSeconds, setPause, setResume} from "../../model/slices/timerSlice.ts";
import cls from './Timer.module.scss'

interface TimerProps {
    className?: string;
}

export const Timer = memo(({className}: TimerProps) => {
    const minutes = useSelector(getMinutes);
    const seconds = useSelector(getSeconds);
    const isPlay = useSelector(getIsPlay);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isPlay && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                dispatch(decrementSeconds())
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [dispatch, isPlay, seconds, minutes])

    const handlePause = () => {
        dispatch(setPause());
    };

    const handleResume = () => {
        dispatch(setResume());
    };

    return (
        <>
            <div
                className={cn(cls.timer, className)}
            >
                <Digits digits={minutes} isPlay={isPlay}/>
                <Digits digits={seconds} isPlay={isPlay}/>
            </div>
            {isPlay ? (
                <button onClick={handlePause}>Pause Timer</button>
            ) : (
                <button onClick={handleResume}>Resume Timer</button>
            )}
        </>
    );
});