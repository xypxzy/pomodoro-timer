import {Input} from "@/shared/ui/Input/Input.tsx";
import {useSelector} from "react-redux";
import {getFocusTime, setFocus} from "@/entities";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {Time} from "@/shared/const/modeStatus.ts";
import {setTime} from "@/widgets/Timer/model/slices/timerSlice.ts";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";

function FocusLength() {
    const {mode} = useMode();
    const focusTime = useSelector(getFocusTime);
    const dispatch = useAppDispatch();

    const [currentTime, setCurrentTime] = useState<Time>(focusTime)

    useEffect(() => {
        dispatch(setFocus(currentTime.minutes));

        if(mode.status == 'focus') {
            dispatch(setTime(currentTime));
        }
    }, [dispatch, currentTime])



    return (
        <Input value={currentTime.minutes} setCurrentTime={setCurrentTime} />
    );
}

export default FocusLength;