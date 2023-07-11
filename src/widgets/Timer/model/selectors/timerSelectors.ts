import {RootState} from "@/app/providers/StoreProvider";

export const getMinutes = (state: RootState) => state.timer.minutes;
export const getSeconds = (state: RootState) => state.timer.seconds;
export const getIsPlay = (state: RootState) => state.timer.isPlay;
export const getSessionCount = (state: RootState) => state.timer.sessionCount;
export const getSound = (state: RootState) => state.timer.sound;
