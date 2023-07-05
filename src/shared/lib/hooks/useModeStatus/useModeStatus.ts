import {useContext} from "react";
import {LOCAL_STORAGE_MODE_STATUS_KEY} from "../../../const/localStorage.ts";
import {ModeStatusContext} from "../../../lib/context/ModeStatusContext.ts";
import {ModeStatus} from "../../../const/modeStatus.ts";

interface UseModeStatusProps {
    toggleModeStatus: () => void,
    modeStatus: ModeStatus
}

export function useModeStatus(): UseModeStatusProps {
    const {modeStatus, setModeStatus} = useContext(ModeStatusContext);

    const toggleModeStatus = () => {
        let newModeStatus: ModeStatus;

        switch (modeStatus) {
            case ModeStatus.FOCUS:
                newModeStatus = ModeStatus.SHORT
                break;
            case ModeStatus.SHORT:
                newModeStatus = ModeStatus.LONG
                break;
            case ModeStatus.LONG:
                newModeStatus = ModeStatus.FOCUS
                break;
            default:
                newModeStatus = ModeStatus.FOCUS
        }
        setModeStatus?.(newModeStatus);
        localStorage.setItem(LOCAL_STORAGE_MODE_STATUS_KEY, newModeStatus)
    }

    return {
        modeStatus: modeStatus || ModeStatus.FOCUS,
        toggleModeStatus,
    }
}