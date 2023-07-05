import {ReactNode, useMemo, useState} from "react";
import {LOCAL_STORAGE_MODE_STATUS_KEY, LOCAL_STORAGE_MODE_TIME_KEY} from "@/shared/const/localStorage.ts";
import {ModeStatus, ModeProps} from "@/shared/const/modeStatus.ts";
import {ModeContext} from "@/shared/lib/context/ModeContext.ts";

const time = JSON.parse(localStorage.getItem(LOCAL_STORAGE_MODE_TIME_KEY) as string) || {
    minutes: 25,
    seconds: 0
}

const defaultMode: ModeProps = {
    status: localStorage.getItem(LOCAL_STORAGE_MODE_STATUS_KEY) as ModeStatus || ModeStatus.FOCUS,
    time: {
        minutes: time.minutes,
        seconds: time.seconds
    }
};

interface ModeProviderProps {
    initialMode?: ModeProps;
    children: ReactNode;
}

export const ModeProvider = ({children}: ModeProviderProps) => {
    const [mode, setMode] = useState<ModeProps>(defaultMode);

    const defaultProps  = useMemo(() => ({
        mode: mode,
        setMode: setMode,
    }), [mode])

    return (
        <ModeContext.Provider value={defaultProps} >
            {children}
        </ModeContext.Provider>
    )
}