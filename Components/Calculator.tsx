import { View, Text , StyleSheet,  } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors'
import {Button} from '@/Components/Button'

export default function Calculator() {
  return (
    <View style = {styles.container}>
      <View style = {styles.display}>
        <Text style = {{fontSize:70, fontWeight:'300'}}>test</Text>
      </View>
      <View style = {styles.keypad}>
        <Button title= 'C'/>
        <Button title = '⌫'/>
        <Button title = '%'/>
        <Button title = '*'/>
        <Button title= '7'/>
        <Button title = '8'/>
        <Button title = '9'/>
        <Button title = 'x'/>
        <Button title= '6'/>
        <Button title = '5'/>
        <Button title = '4'/>
        <Button title = '-'/>
        <Button title= '3'/>
        <Button title = '2'/>
        <Button title = '1'/>
        <Button title = '+'/>
        <Button title= '0'/>
        <Button title = '00'/>
        <Button title = '.'/>
        <Button title = '='/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
    },
    display:{
        flex:1,
        backgroundColor: Colors.grey,
        paddingVertical:20,
        paddingHorizontal:40,
        alignItems:"flex-end",
        justifyContent:"flex-end",

    },
    keypad:{
        flex:2,
        backgroundColor: Colors.light,
        flexDirection:"row",
        flexWrap:'wrap',
        justifyContent:'center',
        gap: 30,
        padding: 30,
    },
})