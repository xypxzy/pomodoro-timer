import {memo} from 'react';
import cn from "classnames";
import {MenuControl} from "../MenuControl/MenuControl.tsx";
import {TimeControl} from "../TimeControl/TimeControl.tsx";
import {NextModeControl} from "../NextModeControl/NextModeControl.tsx";
import cls from './Controls.module.scss'

interface ControlsProps {
    className?: string;
}

export const Controls = memo(({className}: ControlsProps) => {
    return (
        <div className={cn(cls.Controls, className)}>
            <MenuControl />
            <TimeControl />
            <NextModeControl />
        </div>
    );
});