import {memo, useState} from 'react';
import cn from "classnames";
import cls from './Menu.module.scss'
import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import KeyReturnIcon from '@/shared/assets/ph_key-return-fill.svg'
import ChartIcon from '@/shared/assets/ph_chart-bar-fill.svg'
import SettingIcon from '@/shared/assets/ph_gear-six-fill.svg'
import {Button} from "@/shared/ui/Button/Button.tsx";
import ThreeDotsIcon from "@/shared/assets/ph_dots-three-outline-fill.svg";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";

interface MenuProps {
    className?: string;
}

export const Menu = memo(({className}: MenuProps) => {
    const [modalOpen, setModalOpen] = useState(false);   //Реализация сеттинга

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div className={cn(cls.Menu, className)}>
            <MenuItem shortcut={['Ctrl', 'S']}>
                <ChartIcon />
                Statistics
            </MenuItem>
            <MenuItem shortcut={['Ctrl', 'P']} onClick={handleOpenModal}>
                <SettingIcon/>
                Preference
                <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                    asdsadadad
                </Modal>
            </MenuItem>
            <MenuItem shortcut={['Ctrl', 'K']}>
                <KeyReturnIcon/>
                Shortcuts
            </MenuItem>
        </div>
    );
});