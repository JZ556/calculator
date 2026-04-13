import { Text, StyleSheet, View, TouchableOpacity, Switch } from 'react-native';
import React from 'react';
import { Colors } from '@/utils/Colors';
import SettingsButton from '@/Components/SettingsButton';
import { Stack } from 'expo-router';

const Settings = () => {
  return (
    <>
    <Stack.Screen options = {{title:'Settings'}}/>
    <View style={styles.container}>
      <Text style={styles.title}>Theme Switch</Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text>Dark Mode</Text>
        <Switch />
      </TouchableOpacity>
      <Text style={styles.title}>Theme Settings</Text>
      <SettingsButton
        title="light"
        icon="lightbulb-on"
        onPress={() => {}}
        isActive={true}
      />
      <SettingsButton
        title="dark"
        icon="weather-night"
        onPress={() => {}}
        isActive={false}
      />
      <SettingsButton
        title="System"
        icon="theme-light-dark"
        onPress={() => {}}
        isActive={false}
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
