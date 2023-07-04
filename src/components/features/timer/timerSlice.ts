import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
    minutes: number;
    seconds: number;
}

const initialState: TimerState = {
    minutes: 25,
    seconds: 0
}

export const TimerSlice = createSlice({
    name: 'timer',
    initialState,
    reducers: {
        setMinute: (state, action: PayloadAction<number>) => {
            state.minutes = action.payload;
        },
        decrementSeconds(state) {
            state.seconds -= 1;
        },
        resetSeconds(state, action: PayloadAction<number>) {
            state.seconds = action.payload;
        },
    },
})

export const { setMinute, decrementSeconds, resetSeconds} = TimerSlice.actions
export const timerReducers = TimerSlice.reducer