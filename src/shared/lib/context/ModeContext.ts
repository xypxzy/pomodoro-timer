import {createContext} from "react";
import {ModeProps} from "../../const/modeStatus.ts";


export interface ModeContextProps {
    mode?: ModeProps,
    setMode?: (mode: ModeProps) => void;
}

export const ModeContext = createContext<ModeContextProps>({});