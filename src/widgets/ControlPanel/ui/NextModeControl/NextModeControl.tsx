import {useEffect} from "react";
import {setTime} from "@/widgets/Timer/model/slices/timerSlice.ts";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import NextIcon from "@/shared/assets/ph_fast-forward-fill.svg";
import {setModeStatus} from "@/features/modeStatus";

export const NextModeControl = () => {
    const {toggleMode, mode} = useMode();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(setTime(mode.time))
        dispatch(setModeStatus(mode.status)) // Можно выпилить в принципе
    }, [mode.time])

    const handleChangeStatus = () => {
        toggleMode();
    }

    return (
        <Button size={'medium'} onClick={handleChangeStatus}>
            <NextIcon />
        </Button>
    );
};