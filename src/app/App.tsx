import {useSelector} from "react-redux";
import cn from "classnames";
import {RootState} from "./providers/StoreProvider/config/store.ts";
import './styles/index.scss';
import {ThemeSwitcher} from "@/features/ThemeSwitcher";
import {useTheme} from "@/shared/lib/hooks/useTheme/useTheme.tsx";
import {Mode} from "@/features/modeStatus/ui/Mode/Mode.tsx";


function App() {
    const {theme} = useTheme();
    const status = useSelector((state: RootState) => state.modeStatus.type);

    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${status}`, 'app')}
            >
                <Mode type={'short'} />
                <ThemeSwitcher />
            </div>
        </div>
  )
}

export default App
