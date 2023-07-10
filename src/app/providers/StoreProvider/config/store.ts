import { configureStore } from '@reduxjs/toolkit'
import { timerReducers } from "@/widgets/Timer/model/slices/timerSlice.ts";
import { modeStatusReducers } from "@/features/modeStatus/model/slices/modeStatusSlice.ts";
import {timeReducers} from "@/entities/Time/model/slices/TimeSlices.ts";

export const store = configureStore({
    reducer: {
        time: timeReducers,
        modeStatus: modeStatusReducers,
        timer: timerReducers,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch