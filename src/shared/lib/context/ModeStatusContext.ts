import {createContext} from "react";
import {ModeStatus} from "../../const/modeStatus.ts";

export interface ModeStatusContext {
    modeStatus?: ModeStatus,
    setModeStatus?: (modeStatus: ModeStatus) => void;
}

export const ModeStatusContext = createContext<ModeStatusContext>({});