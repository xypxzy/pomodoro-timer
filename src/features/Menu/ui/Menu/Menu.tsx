import {memo} from 'react';
import cn from "classnames";
import cls from './Menu.module.scss'
import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import KeyReturnIcon from '@/shared/assets/ph_key-return-fill.svg'
import ChartIcon from '@/shared/assets/ph_chart-bar-fill.svg'
import SettingIcon from '@/shared/assets/ph_gear-six-fill.svg'

interface MenuProps {
    className?: string;
}

export const Menu = memo(({className}: MenuProps) => {
    return (
        <div className={cn(cls.Menu, className)}>
            <MenuItem>
                <ChartIcon />
                Statistics
            </MenuItem>
            <MenuItem>
                <SettingIcon/>
                Preference
            </MenuItem>
            <MenuItem>
                <KeyReturnIcon/>
                Shortcuts
            </MenuItem>
        </div>
    );
});