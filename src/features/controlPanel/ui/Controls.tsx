import {memo} from 'react';
import cn from "classnames";
import cls from './Controls.module.scss'
import {setPause, setResume} from "@/widgets/timer/model/slices/timerSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import PauseIcon from "@/shared/assets/ph_pause-fill.svg";
import PlayIcon from "@/shared/assets/ph_play-fill.svg";
import SettingIcon from "@/shared/assets/ph_dots-three-outline-fill.svg";
import NextIcon from "@/shared/assets/ph_fast-forward-fill.svg";
import {useModeStatus} from "@/shared/lib/hooks/useModeStatus/useModeStatus.ts";

interface ControlsProps {
    className?: string;
    isPlay?: boolean;
}

export const Controls = memo(({className, isPlay}: ControlsProps) => {
    const {toggleStatus} = useModeStatus();
    const dispatch = useAppDispatch();
    const handlePause = () => {
        dispatch(setPause());
    };
    const handleResume = () => {
        dispatch(setResume());
    };
    const handleChangeStatus = () => {
        toggleStatus();
    }

    return (
        <div className={cn(cls.Controls, className)}>
            <Button size={'medium'}>
                <SettingIcon />
            </Button>
            {isPlay ? (
                <Button onClick={handlePause}>
                    <PauseIcon />
                </Button>
            ) : (
                <Button onClick={handleResume}>
                    <PlayIcon />
                </Button>
            )}
            <Button size={'medium'} onClick={handleChangeStatus}>
                <NextIcon />
            </Button>
        </div>
    );
});