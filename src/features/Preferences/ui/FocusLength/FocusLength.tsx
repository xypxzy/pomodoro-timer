import {Input} from "@/shared/ui/Input/Input.tsx";
import {useSelector} from "react-redux";
import {getMinutes} from "@/widgets/Timer/model/selectors/timerSelectors.ts";

function FocusLength() {
    const focusLength = useSelector(getMinutes);

    return (
        <Input />
    );
}

export default FocusLength;