import {memo, useEffect} from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {Digits} from "@/shared/ui/Digits/Digits.tsx";
import {getIsPlay, getMinutes, getSeconds} from "../../model/selectors/timerSelectors.ts";
import {decrementSeconds, setPause, setResume} from "../../model/slices/timerSlice.ts";
import cls from './Timer.module.scss'
import {Button} from "@/shared/ui/Button/Button.tsx";
import PlayIcon from '@/shared/assets/ph_play-fill.svg'
import PauseIcon from '@/shared/assets/ph_pause-fill.svg'

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
                <Button onClick={handlePause}>
                    <PauseIcon />
                </Button>
            ) : (
                <Button onClick={handleResume}>
                    <PlayIcon />
                </Button>
            )}
        </>
    );
});