import {Input} from "@/shared/ui/Input/Input.tsx";
import {useSelector} from "react-redux";
import {getLongTime, setLong} from "@/entities";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {memo, useEffect, useState} from "react";
import {Time} from "@/shared/const/modeStatus.ts";
import {setTime} from "@/widgets/Timer/model/slices/timerSlice.ts";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";

const LongBreakLength = memo(() => {
    const {mode} = useMode();
    const longTime = useSelector(getLongTime);
    const dispatch = useAppDispatch();

    const [currentTime, setCurrentTime] = useState<Time>(longTime)

    useEffect(() => {
        dispatch(setLong(currentTime.minutes));
        if(mode.status == 'long') {
            dispatch(setTime(currentTime));
        }
    }, [dispatch, currentTime])


    return (
        <Input value={currentTime.minutes} setCurrentTime={setCurrentTime} />
    );
});

export default LongBreakLength;