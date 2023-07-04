import {Switch as HSwitch} from '@headlessui/react'
import cn from "classnames";
import {Theme} from "../../../theme/utilities/ThemeContext.ts";
import cls from './Swtich.module.scss'
import {useState} from "react";

interface SwitchProps {
    theme?: Theme,
    toggleBtn?: () => void;
}

function Switch({theme, toggleBtn } : SwitchProps) {
    const [enabled, setEnabled] = useState<boolean>(false);
    const onHandleSetTheme = () => {
        toggleBtn?.()
        setEnabled(!enabled)
    }

    return (
        <HSwitch
            checked={enabled}
            onChange={onHandleSetTheme}
            className={cn(`${theme === 'DARK' ? 'bg-[var(--btn-bg)]' : 'bg-[var(--primary-color)]'} `, cls.switcher)}
        >
            <span className="sr-only">Use setting</span>
            <span
                aria-hidden="true"
                className={cn(`${theme === 'DARK' ? 'translate-x-5' : 'translate-x-0'}`, cls.round)}
            />
        </HSwitch>
    );
}

export default Switch;