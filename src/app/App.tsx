import cn from "classnames";
import './styles/index.scss';
import {Timer} from "@/widgets/timer/ui/Timer/Timer.tsx";
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.tsx";
import {useModeStatus} from "@/shared/lib/hooks/useModeStatus/useModeStatus.ts";


function App() {
    const {theme} = useTheme();
    const {modeStatus} = useModeStatus();

    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${modeStatus}`, 'app')}
            >
                <Timer />
                <ThemeSwitcher />
            </div>
        </div>
  )
}

export default App
