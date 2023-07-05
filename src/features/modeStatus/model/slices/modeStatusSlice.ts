import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {LOCAL_STORAGE_MODE_STATUS_KEY} from "@/shared/const/localStorage.ts";
import {ModeStatus} from "@/shared/const/modeStatus.ts";

interface modeStatusState {
    type: ModeStatus;
}

const initialState: modeStatusState = {
    type: localStorage.getItem(LOCAL_STORAGE_MODE_STATUS_KEY) as ModeStatus || 'focus',
}

export const ModeStatusSlice = createSlice({
    name: 'modeStatus',
    initialState,
    reducers: {
        setModeStatus: (state, action: PayloadAction<ModeStatus>) => {
            state.type = action.payload;
        }
    },
})

export const {setModeStatus} = ModeStatusSlice.actions
export const modeStatusReducers = ModeStatusSlice.reducer