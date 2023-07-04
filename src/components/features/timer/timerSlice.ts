import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TimerState {
    minute: number;
    second: number;
}

const initialState: TimerState = {
    minute: 25,
    second: 0
}

export const TimerSlice = createSlice({
    name: 'chipStatus',
    initialState,
    reducers: {
        setChipStatus: (state, action: PayloadAction<TimerState>) => {
            state.type = action.payload;
        }
    },
})

export const {setChipStatus} = TimerSlice.actions
export const chipStatusReducers = TimerSlice.reducer