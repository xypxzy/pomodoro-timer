import {Input} from "@/shared/ui/Input/Input.tsx";
import {useSelector} from "react-redux";
import {getShortTime, setShort} from "@/entities";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {Time} from "@/shared/const/modeStatus.ts";
import {setTime} from "@/widgets/Timer/model/slices/timerSlice.ts";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";

function ShortBreakLength() {
    const {mode} = useMode();
    const shortTime = useSelector(getShortTime);
    const dispatch = useAppDispatch();

    const [currentTime, setCurrentTime] = useState<Time>(shortTime)

    useEffect(() => {
        dispatch(setShort(currentTime.minutes));
        if(mode.status == 'short') {
            dispatch(setTime(currentTime));
        }
    }, [dispatch, currentTime])


    return (
        <Input value={currentTime.minutes} setCurrentTime={setCurrentTime} />
    );
}

export default ShortBreakLength;