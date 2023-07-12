import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {Time} from "@/shared/const/modeStatus.ts";

interface TimeState {
    focus: Time,
    short: Time,
    long: Time,
}

const initialState: TimeState = {
    focus: {
        minutes: 25,
        seconds: 0
    },
    short: {
        minutes: 5,
        seconds: 0
    },
    long: {
        minutes: 10,
        seconds: 0
    },
}

export const TimeSlice = createSlice({
    name: 'time',
    initialState,
    reducers: {
        setFocus: (state, action: PayloadAction<number>) => {
            state.focus.minutes = action.payload
        },
        setShort: (state, action: PayloadAction<number>) => {
            state.short.minutes = action.payload
        },
        setLong: (state, action: PayloadAction<number>) => {
            state.long.minutes = action.payload
        }
    },
})

export const {setFocus, setLong, setShort} = TimeSlice.actions
export const timeReducers = TimeSlice.reducer