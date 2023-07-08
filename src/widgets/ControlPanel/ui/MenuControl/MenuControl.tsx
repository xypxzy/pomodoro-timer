import {useState} from "react";
import {Menu} from "@/features/Menu/ui/Menu/Menu.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
import ThreeDotsIcon from "@/shared/assets/ph_dots-three-outline-fill.svg";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";

export const MenuControl = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        setMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setMenuOpen(false);
    };

    return (
        <div>
            <Button size={'medium'} onClick={handleOpenMenu}><ThreeDotsIcon /></Button>
            <Modal isOpen={menuOpen} onClose={handleCloseMenu}>
                <Menu />
            </Modal>
        </div>
    );
};