import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Time} from "@/shared/const/modeStatus.ts";

interface TimerState extends Time{
    isPlay: boolean;
    sessionCount: number;
}

const initialState: TimerState = {
    minutes: 25,
    seconds: 0,
    isPlay: false,
    sessionCount: 4,
}

export const TimerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setTime: (state, action: PayloadAction<Time>) => {
            state.seconds = action.payload.seconds;
            state.minutes = action.payload.minutes;
        },
        setPause: (state) => {
            state.isPlay = false;
        },
        setResume: (state) => {
            state.isPlay = true;
        },
        setSessionCount: (state, action: PayloadAction<number>) => {
            state.sessionCount = action.payload;
        },
        decrementMinutes(state ) {
            if(state.isPlay && state.minutes > 0) {
                state.minutes -= 1;
            }
        },
        decrementSeconds(state) {
            if(state.isPlay) {
                if(state.seconds > 0) {
                    state.seconds -= 1;
                } else if (state.minutes > 0) {
                    state.minutes -= 1;
                    state.seconds = 59;
                }
            }
        },
        resetSeconds(state, action: PayloadAction<TimerState>) {
            state.minutes = action.payload.minutes;
            state.seconds = action.payload.seconds;
            state.isPlay = false;
        },
    },
})

export const {  decrementSeconds, setPause, setResume, setSessionCount, setTime } = TimerSlice.actions
export const timerReducers = TimerSlice.reducer