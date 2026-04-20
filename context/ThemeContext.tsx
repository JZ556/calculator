import {createContext} from 'react';

export type ThemeContextType = {
    currentTheme : string;
    toggleTheme : (newTheme:string) => void;
}

export const ThemeContext = createContext<ThemeContextType|undefined>({
    currentTheme : 'light',
    toggleTheme : () => {}
});

const ThemeProvider = ({children} : {children:ReactNode}) => {
    const [theme, setTheme] = useState<string>('light');
    return(
        <ThemeContext.Provider value = {{currentTheme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
