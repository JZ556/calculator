import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Colors } from '@/utils/Colors';

type SettingButtonProps = {
    title : string;
    icon : React.ComponentProps<typeof MaterialCommunityIcons>['name'];
    onPress : () => void;
    isActive : boolean;
}

export default function SettingsButton({title, icon, onPress, isActive}: SettingButtonProps) {
  return (
    <TouchableOpacity style={styles.settingButton} onPress={onPress}>
      <View style={styles.titleWrapper}>
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={Colors.black}
        />
        <Text style = {styles.title}>{title}</Text>
      </View>
      <MaterialCommunityIcons 
        name= {isActive ? 'check-circle' : 'checkbox-blank-circle-outline'} 
        size={20}
        color={isActive ? Colors.btnRight : Colors.black} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settingButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  titleWrapper: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  title : {
    fontSize: 14,
    fontWeight : '500',
  }
});
