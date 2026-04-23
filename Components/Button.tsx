import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '@/utils/Colors';
import { ThemeContext } from '@/context/ThemeContext';

export const Button = ({
  title,
  type,
  onPress,
}: {
  title: string;
  type: 'top' | 'right' | 'number';
  onPress: () => void;
}) => {
  const { currentTheme } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            currentTheme === 'dark'
              ? (type === 'top'
                ? Colors.btnLight
                : type === 'right'
                  ? Colors.btnRight
                  : Colors.btnDark)
              : (type === 'top'
                ? Colors.btnDark
                : type === 'right'
                  ? Colors.btnRight
                  : Colors.btnLight)
        },
      ]}
      onPress={onPress}>
      <Text
        style={{
          fontSize: 34,
          color: type === 'number' ? Colors.black : Colors.white,
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 70,
    width: 70,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
  },
});
