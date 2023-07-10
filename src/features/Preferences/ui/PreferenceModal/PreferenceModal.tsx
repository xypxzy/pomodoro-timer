import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import cls from './PreferenceModal.module.scss'
import SwitchButton from "@/shared/ui/SwitchButton/SwitchButton.tsx";
import FocusLength from "@/features/Preferences/ui/FocusLength/FocusLength.tsx";
import LongBreakLength from "@/features/Preferences/ui/LongBreakLength/LongBreakLength.tsx";
import ShortBreakLength from "@/features/Preferences/ui/ShortBreakLength/ShortBreakLength.tsx";

const menuItems = [
    { label: "Dark mode", component: <ThemeSwitcher /> },
    { label: "Focus length", component: <FocusLength /> },
    // { label: "Pomodoros until long break", component: <Input /> },
    { label: "Short break length", component: <ShortBreakLength /> },
    { label: "Long break length", component: <LongBreakLength /> },
    { label: "Auto resume timer", component: <SwitchButton /> },
    { label: "Sound", component: <SwitchButton /> },
    { label: "Notifications", component: <SwitchButton /> },
];

interface PreferenceModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}

const PreferenceModal = (props: PreferenceModalProps) => {
    const {isOpen, onCloseModal} = props;
    return (
        <Modal maxWidth={'l'} isOpen={isOpen} onClose={onCloseModal}>
            <div className={cls.header}>
                <h1>Settings</h1>
            </div>
            <>
                {menuItems.map((item) => (
                    <MenuItem justify key={item.label}>
                        {item.label}
                        {item.component}
                    </MenuItem>
                ))}
            </>
        </Modal>
    );
}

export default PreferenceModal;

