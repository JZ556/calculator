import { createContext, useState, ReactNode, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useColorScheme } from 'react-native';

export type ThemeContextType = {
  currentTheme: string;
  toggleTheme: (newTheme: string) => void;
  useSystemTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  currentTheme: 'light',
  toggleTheme: () => {},
  useSystemTheme: () => {}
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<string>('light');
  const colorScheme = useColorScheme();

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

  const toggleTheme = (newTheme: string) => {
    setTheme(newTheme);
    AsyncStorage.setItem('theme', newTheme);
  };

  const useSystemTheme = () => {
    alert(colorScheme);
  }

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, toggleTheme, useSystemTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
