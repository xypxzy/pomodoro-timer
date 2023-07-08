import {useState} from "react";
import {Menu} from "@/features/Menu/ui/Menu/Menu.tsx";
import {Button} from "@/shared/ui/Button/Button.tsx";
import ThreeDotsIcon from "@/shared/assets/ph_dots-three-outline-fill.svg";
import {Modal} from "@/shared/ui/Modal/Modal.tsx";

export const MenuControl = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Button size={'medium'} onClick={handleOpenModal}><ThreeDotsIcon /></Button>
            <Modal isOpen={modalOpen} onClose={handleCloseModal}>
                <Menu />
            </Modal>
        </div>
    );
};