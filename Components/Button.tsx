import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/utils/Colors';

export const Button = ({
  title,
  type,
}: {
  title: string;
  type: 'top' | 'right' | 'number';
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            type == 'top'
              ? Colors.btnDark
              : type == 'right'
                ? Colors.btnRight
                : Colors.btnLight,
        },
      ]}
      onPress={() => {}}>
      <Text style={{ fontSize: 34, color: Colors.white }}>{title}</Text>
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
