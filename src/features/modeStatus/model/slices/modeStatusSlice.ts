import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'
import {LOCAL_STORAGE_MODE_STATUS_KEY} from "@/shared/const/localStorage.ts";
import {modeStatusType} from "../../../../shared/const/modeStatus.ts";

interface modeStatusState {
    type: modeStatusType;
}

const initialState: modeStatusState = {
    type: localStorage.getItem(LOCAL_STORAGE_MODE_STATUS_KEY) as modeStatusType || 'focus',
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