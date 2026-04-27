import { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';

export type ThemeContextType = {
  isSystemTheme: boolean;
  currentTheme: string;
  toggleTheme: (newTheme: string) => void;
  useSystemTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  isSystemTheme: false,
  currentTheme: 'light',
  toggleTheme: () => {},
  useSystemTheme: () => {}
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');
  const colorScheme = useColorScheme();
  const [systemTheme, setSystemTheme] = useState<boolean>(false);

  useEffect(() => {
    const getTheme = async() => {
        try{
            const savedTheme = await AsyncStorage.getItem('theme');

            if(savedTheme){
                setTheme(savedTheme);
            }
        }catch(error){
            console.log('error in loading theme', error);
        }

    }
    getTheme();
  },[]);

  useEffect(() => {
    if(colorScheme){
      setTheme(colorScheme);
      AsyncStorage.setItem('theme', colorScheme);
    }

  },[colorScheme]);

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
    setSystemTheme(false);
  };

  const useSystemTheme = () => {
    if(colorScheme){
      AsyncStorage.setItem('theme', colorScheme);
      setTheme(colorScheme);
      setSystemTheme(true);
    }
    alert(colorScheme);
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme, useSystemTheme, isSystemTheme:systemTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
