import { Stack } from 'expo-router';
import Calculator from '@/Components/Calculator';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';
import { Colors } from '@/utils/Colors';

export default function Index() {
  const { currentTheme } = useContext(ThemeContext);
  return (
    <>
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
        }}
      />
      <Calculator />
    </>
  );
}
