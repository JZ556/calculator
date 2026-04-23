import { Stack } from 'expo-router';
import Calculator from '@/Components/Calculator';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { Colors } from '@/utils/Colors';
import { Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
    <StatusBar style = {currentTheme === 'dark' ? 'light':'dark'}/>
      <Stack.Screen
        options={{
          title: 'Calculator',
          headerStyle: {
            backgroundColor:
              currentTheme === 'dark' ? Colors.dark : Colors.light,
          },
          headerTitleStyle: {
            color: currentTheme === 'dark' ? Colors.white : Colors.black,
          },
          headerRight: () => (
            <Switch
              value={currentTheme === 'dark'}
              onValueChange={() =>
                toggleTheme(currentTheme === 'light' ? 'dark' : 'light')
              }
            />
          ),
        }}
      />
      <Calculator />
    </>
  );
}
