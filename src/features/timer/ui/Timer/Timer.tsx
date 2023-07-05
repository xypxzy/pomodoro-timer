import {memo, useEffect} from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {getIsPlay, getMinutes, getSeconds} from "../../model/selectors/timerSelectors.ts";
import {decrementSeconds} from "../../model/slices/timerSlice.ts";
import cls from './Timer.module.scss'
import {Digits} from "@/shared/ui/Digits/Digits.tsx";
import {Controls} from "@/features/controlPanel/ui/Controls.tsx";
import {Mode} from "@/features/modeStatus";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";

interface TimerProps {
    className?: string;
}

export const Timer = memo(({className}: TimerProps) => {
    const {mode} = useMode();

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

    return (
        <div
            className={cn(cls.timer, className)}
        >
            <Mode type={mode.status} />
            <div className={cls.digits}>
                <Digits digits={minutes} isPlay={isPlay}/>
                <Digits digits={seconds} isPlay={isPlay}/>
            </div>
            <Controls isPlay={isPlay}/>
        </div>

    );
});