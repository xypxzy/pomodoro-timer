import SettingIcon from "@/shared/assets/ph_gear-six-fill.svg";
import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import {lazy, Suspense, useState} from "react";

const PreferenceModal = lazy(() => import('./PreferenceModal.tsx'));
export function Preference() {
    const [settingOpen, setSettingOpen] = useState(false);   //Реализация сеттинга

    const handleOpenModal = () => {
        setSettingOpen(true);
    };

    const handleCloseModal = () => {
        setSettingOpen(false);
    };

    return (
        <MenuItem shortcut={['Ctrl', 'P']} onClick={handleOpenModal}>
            <SettingIcon/>
            Preference
            <Suspense fallback={<h1>Loading ...</h1>}>
                <PreferenceModal isOpen={settingOpen} onCloseModal={handleCloseModal} />
            </Suspense>
        </MenuItem>
    );
}
