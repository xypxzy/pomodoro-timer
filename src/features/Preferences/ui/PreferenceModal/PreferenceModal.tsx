import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";
import cls from './PreferenceModal.module.scss'
import {Input} from "@/shared/ui/Input/Input.tsx";
import SwitchButton from "@/shared/ui/SwitchButton/SwitchButton.tsx";

const menuItems = [
    { label: "Dark mode", component: <ThemeSwitcher /> },
    { label: "Focus length", component: <Input /> },
    { label: "Pomodoros until long break", component: <Input /> },
    { label: "Short break length", component: <Input /> },
    { label: "Long break length", component: <Input /> },
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

