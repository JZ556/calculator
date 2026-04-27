import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native';
import React, { useContext } from 'react';
import { Colors } from '@/utils/Colors';
import SettingsButton from '@/Components/SettingsButton';
import { Stack } from 'expo-router';
import { ThemeContext } from '@/context/ThemeContext';

const Settings = () => {
  const { currentTheme, toggleTheme, useSystemTheme, isSystemTheme } = useContext(ThemeContext);
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Settings',
          headerStyle: {
            backgroundColor:
              currentTheme === 'dark' ? Colors.dark : Colors.light,
          },
          headerTitleStyle: {
            color: currentTheme === 'dark' ? Colors.white : Colors.black,
          },
        }}
      />
      <View style={[styles.container,{backgroundColor:currentTheme ==='dark'? Colors.dark : Colors.grey}]}>
        <Text style={[styles.title,{color: currentTheme ==='dark'? Colors.white:Colors.black}]}>Theme Switch</Text>
        <TouchableOpacity style={[styles.button,{backgroundColor: currentTheme === 'dark'? Colors.btnDark:Colors.white}]} onPress={() => {}}>
          <Text style = {{color: currentTheme === 'dark'? Colors.white:Colors.black}}>Dark Mode</Text>
          <Switch
            value={currentTheme === 'dark'}
            onValueChange={() =>
              toggleTheme(currentTheme === 'light' ? 'dark' : 'light')
            }
          />
        </TouchableOpacity>
        <Text style={[styles.title,{color: currentTheme ==='dark'? Colors.white:Colors.black}]}>Theme Settings</Text>
        <SettingsButton
          title="light"
          icon="lightbulb-on"
          onPress={() => {toggleTheme('light')}}
          isActive={!isSystemTheme && currentTheme === 'light'}
        />
        <SettingsButton
          title="dark"
          icon="weather-night"
          onPress={() => {toggleTheme('dark')}}
          isActive={!isSystemTheme && currentTheme ==='dark'}
        />
        <SettingsButton
          title="System"
          icon="theme-light-dark"
          onPress={useSystemTheme}
          isActive={isSystemTheme}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.grey,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default Settings;
