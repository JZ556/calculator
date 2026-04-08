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
        <Button title= 'C' type='top'/>
        <Button title = '⌫' type='top'/>
        <Button title = '%' type='top'/>
        <Button title = '*' type='right'/>
        <Button title= '7' type='number'/>
        <Button title = '8' type='number'/>
        <Button title = '9' type='number'/>
        <Button title = 'x' type='right'/>
        <Button title= '6' type='number'/>
        <Button title = '5' type='number'/>
        <Button title = '4' type='number'/>
        <Button title = '-' type='right'/>
        <Button title= '3' type='number'/>
        <Button title = '2' type='number'/>
        <Button title = '1' type='number'/>
        <Button title = '+' type='right'/>
        <Button title= '0' type='number'/>
        <Button title = '00' type='number'/>
        <Button title = '.' type='number'/>
        <Button title = '=' type='right'/>
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