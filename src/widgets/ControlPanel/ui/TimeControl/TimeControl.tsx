import {setPause, setResume} from "@/widgets/Timer/model/slices/timerSlice.ts";
import {Button} from "@/shared/ui/Button/Button.tsx";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import PauseIcon from "@/shared/assets/ph_pause-fill.svg";
import PlayIcon from "@/shared/assets/ph_play-fill.svg";
interface TimeProps {
    isPlay?: boolean
}
export const TimeControl = ({isPlay}: TimeProps) => {
    const dispatch = useAppDispatch();
    const handlePause = () => {
        dispatch(setPause());
    };
    const handleResume = () => {
        dispatch(setResume());
    };

    return (
        <>
            {isPlay ? (
                <Button onClick={handlePause}>
                    <PauseIcon />
                </Button>
            ) : (
                <Button onClick={handleResume}>
                    <PlayIcon />
                </Button>
            )}
        </>
    );
};