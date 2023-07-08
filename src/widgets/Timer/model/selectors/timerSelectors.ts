import {RootState} from "@/app/providers/StoreProvider";

export const getMinutes = (state: RootState) => state.timer.minutes;
export const getSeconds = (state: RootState) => state.timer.seconds;
export const getIsPlay = (state: RootState) => state.timer.isPlay;
