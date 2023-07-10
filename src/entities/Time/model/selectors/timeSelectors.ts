import {RootState} from "@/app/providers/StoreProvider";

export const getFocusTime = (state: RootState) => state.time.focus;
export const getShortTime = (state: RootState) => state.time.short;
export const getLongTime = (state: RootState) => state.time.long;