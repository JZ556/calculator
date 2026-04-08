import { View, Text , StyleSheet,  } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/utils/Colors'
import {Button} from '@/Components/Button'

export default function Calculator() {
    const [firstValue, setFirstValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');

    const handleNumberInput = (num: string) => {
        if(displayValue == '0'){
            setDisplayValue(num);
        }else{
            setDisplayValue(displayValue + num);
        }

    };



  return (
    <View style = {styles.container}>
      <View style = {styles.display}>
        <Text style = {{fontSize:70, fontWeight:'300'}}>{displayValue}</Text>
      </View>
      <View style = {styles.keypad}>
        <Button title= 'C' type='top'/>
        <Button title = '⌫' type='top'/>
        <Button title = '%' type='top'/>
        <Button title = '*' type='right'/>
        <Button title= '7' type='number' onPress={() => handleNumberInput('7')}/>
        <Button title = '8' type='number'onPress={() => handleNumberInput('8')}/>
        <Button title = '9' type='number' onPress={() => handleNumberInput('9')}/>
        <Button title = 'x' type='right'/>
        <Button title= '6' type='number' onPress={() => handleNumberInput('6')}/>
        <Button title = '5' type='number' onPress={() => handleNumberInput('5')}/>
        <Button title = '4' type='number' onPress={() => handleNumberInput('4')}/>
        <Button title = '-' type='right'/>
        <Button title= '3' type='number' onPress={() => handleNumberInput('3')}/>
        <Button title = '2' type='number'onPress={() => handleNumberInput('2')}/>
        <Button title = '1' type='number' onPress={() => handleNumberInput('1')}/>
        <Button title = '+' type='right'/>
        <Button title= '0' type='number' onPress={() => handleNumberInput('0')}/>
        <Button title = '00' type='number' onPress={() => handleNumberInput('00')}/>
        <Button title = '.' type='number' onPress={() => handleNumberInput('.')}/>
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