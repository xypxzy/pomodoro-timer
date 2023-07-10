import {useContext} from "react";
import {LOCAL_STORAGE_MODE_STATUS_KEY, LOCAL_STORAGE_MODE_TIME_KEY} from "../../../const/localStorage.ts";
import {ModeStatus, ModeProps, Time} from "../../../const/modeStatus.ts";
import {ModeContext} from "@/shared/lib/context/ModeContext.ts";
import {getFocusTime, getLongTime, getShortTime} from "@/entities";
import {useSelector} from "react-redux";

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

    const focus = useSelector(getFocusTime);
    const short = useSelector(getShortTime);
    const long = useSelector(getLongTime);

    const toggleMode = () => {
        let newModeStatus: ModeStatus;
        let newTime: Time;

        switch (mode?.status) {
            case ModeStatus.FOCUS:
                newModeStatus = ModeStatus.SHORT;
                newTime = {
                    minutes: short.minutes,
                    seconds: short.seconds
                }
                break;
            case ModeStatus.SHORT:
                newModeStatus = ModeStatus.LONG
                newTime = {
                    minutes: long.minutes,
                    seconds: long.seconds
                }
                break;
            case ModeStatus.LONG:
                newModeStatus = ModeStatus.FOCUS;
                newTime = {
                    minutes: focus.minutes,
                    seconds: focus.seconds
                }
                break;
            default:
                newModeStatus = ModeStatus.FOCUS;
                newTime = {
                    minutes: focus.minutes,
                    seconds: focus.seconds
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