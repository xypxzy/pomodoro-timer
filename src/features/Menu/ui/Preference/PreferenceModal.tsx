import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";

interface PreferenceModalProps {
    isOpen: boolean;
    onCloseModal: () => void;
}
const PreferenceModal = (props: PreferenceModalProps) => {
    const { isOpen, onCloseModal } = props;
    return (
        <Modal maxWidth={'l'} isOpen={isOpen} onClose={onCloseModal}>
            <h1>Settings</h1>
            <MenuItem >
                Dark mode
                <ThemeSwitcher />
            </MenuItem>
        </Modal>
    );
}

export default PreferenceModal;