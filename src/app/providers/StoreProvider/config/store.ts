import { configureStore } from '@reduxjs/toolkit'
import { timerReducers } from "@/widgets/timer/model/slices/timerSlice.ts";
import { modeStatusReducers } from "@/features/modeStatus/model/slices/modeStatusSlice.ts";

export const store = configureStore({
    reducer: {
        modeStatus: modeStatusReducers,
        timer: timerReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch