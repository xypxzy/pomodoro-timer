import { configureStore } from '@reduxjs/toolkit'
import {chipStatusReducers} from "./components/features/chipStatus/chipStatusSlice.ts";
import {timerReducers} from "./components/features/timer/timerSlice.ts";

export const store = configureStore({
    reducer: {
        chipStatus: chipStatusReducers,
        timer: timerReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch