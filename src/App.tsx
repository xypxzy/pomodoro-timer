import Chips from "./components/ui/atoms/Chips/Chips.tsx";
import {useTheme} from "./components/hooks/useTheme.tsx";
import cn from "classnames";
import {ThemeSwitcher} from "./components/ui/molecules/ThemeSwitcher/ThemeSwitcher.tsx";
import {useAppSelector} from "./components/hooks/useAppSelector.ts";
import {RootState} from "./store.ts";

function App() {
    const {theme} = useTheme();
    const status = useAppSelector((state: RootState) => state.chipStatus.type);

    return (
        <div className={cn(`${theme.toLowerCase()}`)}>
            <div
                className={cn(`${status}`, 'app')}
            >
                App
                <Chips type={'short'} />
                <ThemeSwitcher />
            </div>
        </div>
  )
}

export default App
