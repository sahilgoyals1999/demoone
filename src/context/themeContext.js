import React from "react";

const ThemeContext = React.createContext({
    appTheme: 'Light',
    setAppTheme: () => {
       
    }
});

export default ThemeContext;