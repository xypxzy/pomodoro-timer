import cn from 'classnames';
import BrainIcons from '../../../assets/ph_brain-fill.svg'
import CoffeeIcons from '../../../assets/ph_coffee.svg'
import cls from './Chips.module.scss'

type stateType = 'focus' | 'short' | 'long';
interface IChipsProps {
    className?: string,
    type: stateType
}

function Chips(props: IChipsProps) {
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

export default Chips;