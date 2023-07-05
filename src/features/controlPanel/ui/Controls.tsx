import {memo, useEffect} from 'react';
import cn from "classnames";
import cls from './Controls.module.scss'
import {setPause, setResume, setTime} from "../../timer/model/slices/timerSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import PauseIcon from "@/shared/assets/ph_pause-fill.svg";
import PlayIcon from "@/shared/assets/ph_play-fill.svg";
import ThreeDotsIcon from "@/shared/assets/ph_dots-three-outline-fill.svg";
import NextIcon from "@/shared/assets/ph_fast-forward-fill.svg";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import {Menu} from "@/features/Menu/ui/Menu/Menu.tsx";

interface ControlsProps {
    className?: string;
    isPlay?: boolean;
}

export const Controls = memo(({className, isPlay}: ControlsProps) => {
    const {toggleMode, mode} = useMode();
    const dispatch = useAppDispatch();

    const handlePause = () => {
        dispatch(setPause());
    };
    const handleResume = () => {
        dispatch(setResume());
    };
    useEffect(() => {
        dispatch(setTime(mode.time))
    }, [mode.time])

    const handleChangeStatus = () => {
        toggleMode();
    }

    return (
        <div className={cn(cls.Controls, className)}>
            <Modal btnText={<ThreeDotsIcon/>} >
                <Menu />
            </Modal>
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