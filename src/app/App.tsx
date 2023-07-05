import {useSelector} from "react-redux";
import cn from "classnames";
import {RootState} from "./providers/StoreProvider/config/store.ts";
import './styles/index.scss';
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.tsx";
import {Mode} from "@/features/modeStatus/ui/Mode/Mode.tsx";
import {Timer} from "@/features/timer/ui/Timer/Timer.tsx";


function App() {
    const {theme} = useTheme();
    const status = useSelector((state: RootState) => state.modeStatus.type);


    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${status}`, 'app')}
            >
                <Mode type={status} />
                <Timer />
                <ThemeSwitcher />
            </div>
        </div>
  )
}

export default App
