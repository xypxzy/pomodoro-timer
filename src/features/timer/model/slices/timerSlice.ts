import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
    minutes: number;
    seconds: number;
    isPlay: boolean;
}

const initialState: TimerState = {
    minutes: 25,
    seconds: 0,
    isPlay: false
}

export const TimerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setMinute: (state, action: PayloadAction<number>) => {
            state.minutes = action.payload;
        },
        setPause: (state) => {
            state.isPlay = false;
        },
        setResume: (state) => {
            state.isPlay = true;
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

export const { setMinute, decrementSeconds, decrementMinutes, setPause, setResume, resetSeconds } = TimerSlice.actions
export const timerReducers = TimerSlice.reducer