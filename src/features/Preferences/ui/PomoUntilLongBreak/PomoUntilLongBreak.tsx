import {Input} from "@/shared/ui/Input/Input.tsx";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useEffect, useState} from "react";
import {setSessionCount} from "@/widgets/Timer/model/slices/timerSlice.ts";
import {getSessionCount} from "@/widgets/Timer/model/selectors/timerSelectors.ts";

function PomoUntilLongBreak() {
    const sessionCount = useSelector(getSessionCount);
    const dispatch = useAppDispatch();

    const [session, setSession] = useState<number>(sessionCount)

    useEffect(() => {
        dispatch(setSessionCount(session))
    }, [dispatch, session])

    return (
        <Input value={sessionCount} setCount={setSession} />
    );
}

export default PomoUntilLongBreak;