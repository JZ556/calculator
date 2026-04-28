import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '@/utils/Colors';
import { ThemeContext } from '@/context/ThemeContext';

export const Button = ({
  title,
  type,
  onPress,
  size,
}: {
  title: string;
  type: 'top' | 'right' | 'number';
  onPress: () => void;
  size: number;
}) => {
  const { currentTheme } = useContext(ThemeContext);
  const textSize = Math.max(24, Math.min(34, size * 0.45));

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: size,
          height: size,
          borderRadius: size * 0.15,
        },
        {
          backgroundColor:
            currentTheme === 'dark'
              ? type === 'top'
                ? Colors.btnLight
                : type === 'right'
                  ? Colors.btnRight
                  : Colors.btnDark
              : type === 'top'
                ? Colors.btnDark
                : type === 'right'
                  ? Colors.btnRight
                  : Colors.btnLight,
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontSize: textSize,
          color:
            currentTheme === 'dark'
              ? type === 'top'
                ? Colors.black
                : Colors.white
              : type === 'number'
                ? Colors.black
                : Colors.white,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
  },
});
