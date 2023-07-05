import cn from "classnames";
import {Timer} from "@/features/timer/ui/Timer/Timer.tsx";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.tsx";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";


function App() {
    const {theme} = useTheme();
    const {mode} = useMode();

    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${mode.status}`, 'app')}
            >
                <Timer />
            </div>
        </div>
  )
}

export default App
