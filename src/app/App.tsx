import cn from "classnames";
import {Timer} from "@/widgets/Timer/ui/Timer/Timer.tsx";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.tsx";
import {useMode} from "@/shared/lib/hooks/useMode/useMode.ts";
import {Mode} from "@/features/modeStatus";
import {Controls} from "@/widgets/ControlPanel";


function App() {
    const {theme} = useTheme();
    const {mode} = useMode();

    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${mode.status}`, 'app')}
            >
                <Mode type={mode.status} />
                <Timer />
                <Controls/>
            </div>
        </div>
  )
}

export default App
