import cn from 'classnames';
import BrainIcons from '@/shared/assets/ph_brain-fill.svg'
import CoffeeIcons from '@/shared/assets/ph_coffee.svg'
import cls from './Mode.module.scss'
import {ModeStatus} from "@/shared/const/modeStatus.ts";

interface ModeProps {
    className?: string,
    type: ModeStatus
}

export function Mode(props: ModeProps) {
    const {className, type} = props;

    return (
        <div
            className={cn(cls.chips, className)}
        >
            {
                type == ModeStatus.FOCUS ? (
                    <>
                        <BrainIcons />
                        <p>Focus</p>
                    </>
                ) : (
                    <>
                        <CoffeeIcons />
                        <p>{type == ModeStatus.SHORT ? 'Short' : 'Long'} Break</p>
                    </>
                )
            }
        </div>
    );
}
