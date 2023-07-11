import {memo, useEffect, useState} from "react";
import SwitchButton from "@/shared/ui/SwitchButton/SwitchButton.tsx";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {useSelector} from "react-redux";
import {getSound} from "@/widgets/Timer/model/selectors/timerSelectors.ts";
import {setSound} from "@/widgets/Timer/model/slices/timerSlice.ts";

export interface SoundSwitcherProps {
    className?: string
}

export const SoundSwitcher = memo(({}: SoundSwitcherProps) => {
    const sound = useSelector(getSound);
    const dispatch = useAppDispatch();
    const [isSound, setIsSound] = useState(sound)

    const toggleSound = () => {
        setIsSound(!setIsSound)
    }

    useEffect(() => {
        dispatch(setSound(isSound))
    }, [isSound, dispatch])

    return (
        <SwitchButton onToggle={toggleSound} defaultOn={isSound} />
    )
})