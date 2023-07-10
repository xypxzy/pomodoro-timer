import {memo, useState} from 'react';
import cn from "classnames";
import cls from './SwitchButton.module.scss'

export interface SwitchButtonProps {
    className?: string;
    defaultOn?: boolean;
    onToggle?: (isOn: boolean) => void;
    theme?: string;
}

export const SwitchButton = memo((props: SwitchButtonProps) => {
    const {className, defaultOn = false, onToggle} = props;
    const [isOn, setIsOn] = useState(defaultOn);

    const handleToggle = () => {
        const newState = !isOn;
        setIsOn(newState);
        if (onToggle) {
            onToggle(newState);
        }
    };
    return (
        <div
            style={{
                backgroundColor: isOn ? 'var(--primary-color)' : '#b5b7b9',
            }}
            className={
                cn(
                    cls.SwitchButton,
                    className
                )}
            onClick={handleToggle}
        >
            <div
                className={cls.round}
                style={{
                    transform: `translateX(${isOn ? '20px' : '0'})`
                }}
            />
        </div>
    );
});
export default SwitchButton;