import cn from "classnames";
import './styles/index.scss';
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.tsx";
import {Timer} from "@/widgets/timer/ui/Timer/Timer.tsx";
import {useSelector} from "react-redux";
import {RootState} from "@/app/providers/StoreProvider";


function App() {
    const {theme} = useTheme();
    const status = useSelector((state: RootState) => state.modeStatus.type);

    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${status}`, 'app')}
            >
                <Timer />
                <ThemeSwitcher />
            </div>
        </div>
  )
}

export default App
