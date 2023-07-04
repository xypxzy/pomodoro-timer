import { configureStore } from '@reduxjs/toolkit'
import {chipStatusReducers} from "./components/features/chipStatus/chipStatusSlice.ts";

export const store = configureStore({
    reducer: {
        chipStatus: chipStatusReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch