import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type chipStatusType = 'focus' | 'short' | 'long';
interface chipStatusState {
    type: chipStatusType;
}

const initialState: chipStatusState = {
    type: 'focus'
}

export const ChipStatusSlice = createSlice({
    name: 'chipStatus',
    initialState,
    reducers: {
        setChipStatus: (state, action: PayloadAction<chipStatusType>) => {
            state.type = action.payload;
        }
    },
})

export const {setChipStatus} = ChipStatusSlice.actions
export const chipStatusReducers = ChipStatusSlice.reducer