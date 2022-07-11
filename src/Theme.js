import { useContext, useState } from "react";
import ThemeContext from "./context/themeContext";

const ThemeButton = () => {
    const {appTheme, setAppTheme} = useContext(ThemeContext);
    const [themeType, setThemeType] = useState('Light');

    return (
        <button 
        className="btn btn-primary"
        onClick={e => {
            let themeName = appTheme === 'Light' ? 'Dark' : 'Light';
            setAppTheme(themeName);
            setThemeType(themeName);
        }}
        >
        {themeType}
        </button>
    )
}

export default ThemeButton;