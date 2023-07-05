import {LOCAL_STORAGE_MODE_STATUS_KEY} from "@/shared/const/localStorage.ts";
import {modeStatusType} from "@/features/modeStatus/model/types/modeStatus.ts";
import {useSelector} from "react-redux";
import {getModeStatus, setModeStatus} from "@/features/modeStatus";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";


interface UseThemeProps {
    toggleStatus: () => void,
    status: modeStatusType
}

export function useModeStatus(): UseThemeProps {
    const status = useSelector(getModeStatus)
    const dispatch = useAppDispatch()

    const toggleStatus = () => {
        let newStatus: modeStatusType;

        switch (status) {
            case 'focus' :
                newStatus = 'short'
                break;
            case 'short' :
                newStatus = 'long'
                break;
            case 'long' :
                newStatus = 'focus'
                break;
            default:
                newStatus = 'focus'
        }
        dispatch(setModeStatus(newStatus));
        localStorage.setItem(LOCAL_STORAGE_MODE_STATUS_KEY, newStatus)
    }

    return {
        status: status || 'focus',
        toggleStatus
    }
}