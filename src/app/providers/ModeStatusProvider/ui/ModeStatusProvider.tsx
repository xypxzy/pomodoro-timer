import {ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_MODE_STATUS_KEY} from "@/shared/const/localStorage.ts";
import {ModeStatus} from "@/shared/const/modeStatus.ts";
import {ModeStatusContext} from "@/shared/lib/context/ModeStatusContext.ts";

const defaultModeStatus = localStorage.getItem(LOCAL_STORAGE_MODE_STATUS_KEY) as ModeStatus || ModeStatus.FOCUS;

interface ModeStatusProviderProps {
    initialModeStatus?: ModeStatus;
    children: ReactNode;
}

export const ModeStatusProvider = ({children}: ModeStatusProviderProps) => {
    const [modeStatus, setModeStatus] = useState<ModeStatus>(defaultModeStatus);

    const defaultProps  = useMemo(() => ({
        modeStatus: modeStatus,
        setModeStatus: setModeStatus,
    }), [modeStatus])

    return (
        <ModeStatusContext.Provider value={defaultProps} >
            {children}
        </ModeStatusContext.Provider>
    )
}