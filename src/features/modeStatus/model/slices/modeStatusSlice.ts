import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type modeStatusType = 'focus' | 'short' | 'long';
interface modeStatusState {
    type: modeStatusType;
}

const initialState: modeStatusState = {
    type: 'focus'
}

export const ModeStatusSlice = createSlice({
    name: 'modeStatus',
    initialState,
    reducers: {
        setModeStatus: (state, action: PayloadAction<modeStatusType>) => {
            state.type = action.payload;
        }
    },
})

export const {setModeStatus} = ModeStatusSlice.actions
export const modeStatusReducers = ModeStatusSlice.reducer