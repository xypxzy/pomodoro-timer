import {RootState} from "@/app/providers/StoreProvider";

export const getModeStatus = (state: RootState) => state.modeStatus.type;