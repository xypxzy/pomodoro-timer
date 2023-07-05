import {useContext} from "react";
import {LOCAL_STORAGE_MODE_STATUS_KEY, LOCAL_STORAGE_MODE_TIME_KEY} from "../../../const/localStorage.ts";
import {ModeStatus, ModeProps, Time} from "../../../const/modeStatus.ts";
import {ModeContext} from "@/shared/lib/context/ModeContext.ts";

interface UseModeStatusProps {
    mode: ModeProps,
    toggleMode: () => void
}

const initialValue: ModeProps = {
    status: ModeStatus.FOCUS,
    time: {
        minutes: 25,
        seconds: 0
    }
}

export function useMode(): UseModeStatusProps {
    const {mode, setMode} = useContext(ModeContext);

    const toggleMode = () => {
        let newModeStatus: ModeStatus;
        let newTime: Time;

        switch (mode?.status) {
            case ModeStatus.FOCUS:
                newModeStatus = ModeStatus.SHORT;
                newTime = {
                    minutes: 5,
                    seconds: 0
                }
                break;
            case ModeStatus.SHORT:
                newModeStatus = ModeStatus.LONG
                newTime = {
                    minutes: 10,
                    seconds: 0
                }
                break;
            case ModeStatus.LONG:
                newModeStatus = ModeStatus.FOCUS;
                newTime = {
                    minutes: 25,
                    seconds: 0
                }
                break;
            default:
                newModeStatus = ModeStatus.FOCUS;
                newTime = {
                    minutes: 25,
                    seconds: 0
                }
        }
        setMode?.({
            status: newModeStatus,
            time: newTime,
        });
        localStorage.setItem(LOCAL_STORAGE_MODE_STATUS_KEY, newModeStatus)
        localStorage.setItem(LOCAL_STORAGE_MODE_TIME_KEY, JSON.stringify(newTime))
    }

    return {
        mode: mode || initialValue,
        toggleMode,
    }
}