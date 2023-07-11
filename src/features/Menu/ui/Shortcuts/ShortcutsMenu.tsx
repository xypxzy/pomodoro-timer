import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import KeyReturnIcon from "@/shared/assets/ph_key-return-fill.svg";

// interface ShortcutsProps {
//     openModal?: () => void;
//     closeModal?: () => void;
//     isOpen?: boolean;
// }

export function ShortcutsMenu(/*props: ShortcutsProps*/) {
    // const {  openModal, closeModal, isOpen } = props;
    return (
        <MenuItem shortcut={['Ctrl', 'K']}>
            <KeyReturnIcon/>
            Shortcuts
        </MenuItem>
    );
}
