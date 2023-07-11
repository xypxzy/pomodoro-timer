import {memo, useEffect} from 'react';
import cn from "classnames";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {getIsPlay, getMinutes, getSeconds, getSound} from "../../model/selectors/timerSelectors.ts";
import {decrementSeconds} from "../../model/slices/timerSlice.ts";
import cls from './Timer.module.scss'
import {Digits} from "@/shared/ui/Digits/Digits.tsx";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";
import {Mode} from "@/features/modeStatus";
import {Controls} from "@/widgets/ControlPanel";
import timerSound from '@/shared/assets/mixkit-score-casino-counter-1998.wav';
// @ts-ignore
import useSound from "use-sound";

interface TimerProps {
    className?: string;
}

export const Timer = memo(({className}: TimerProps) => {
    const {mode} = useMode();
    const [play] = useSound(timerSound);

    const minutes = useSelector(getMinutes);
    const seconds = useSelector(getSeconds);
    const isPlay = useSelector(getIsPlay);
    const sound = useSelector(getSound);

    const dispatch = useAppDispatch();

    const finish: boolean = (seconds === 0 && minutes === 0);

    useEffect(() => {
        let interval: ReturnType<typeof setInterval>;

        if (isPlay && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                dispatch(decrementSeconds())
            }, 1000)
        }
        if(finish && sound) {
            play();
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
            <Controls/>

        </div>

    );
});