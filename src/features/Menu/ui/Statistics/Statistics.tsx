import {MenuItem} from "@/features/Menu/ui/MenuItem/MenuItem.tsx";
import ChartIcon from "@/shared/assets/ph_chart-bar-fill.svg";

interface StatisticsProps {
    openModal?: () => void;
    closeModal?: () => void;
    isOpen?: boolean;
}

export function Statistics(props: StatisticsProps) {
    const {  openModal, closeModal, isOpen } = props;
    return (
        <MenuItem shortcut={['Ctrl', 'S']}>
            <ChartIcon />
            Statistics
        </MenuItem>
    );
}
