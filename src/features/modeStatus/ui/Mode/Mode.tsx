import cn from 'classnames';
import BrainIcons from '@/shared/assets/ph_brain-fill.svg'
import CoffeeIcons from '@/shared/assets/ph_coffee.svg'
import cls from './Mode.module.scss'
import {modeStatusType} from "@/features/modeStatus/model/types/modeStatus.ts";

interface ModeProps {
    className?: string,
    type: modeStatusType
}

export function Mode(props: ModeProps) {
    const {className, type} = props;


    return (
        <div
            className={cn(cls.chips, className)}
        >
            {
                type == 'focus' ? (
                    <>
                        <BrainIcons />
                        <p>Focus</p>
                    </>
                ) : (
                    <>
                        <CoffeeIcons />
                        <p>{type == 'short' ? 'Short' : 'Long'} Break</p>
                    </>
                )
            }
        </div>
    );
}
