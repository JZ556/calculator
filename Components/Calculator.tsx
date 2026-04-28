import { View, Text , StyleSheet, useWindowDimensions  } from 'react-native'
import React, { useState, useContext } from 'react'
import { Colors } from '@/utils/Colors'
import {Button} from '@/Components/Button'
import MathEngine from '@/utils/MathEngine'
import { ThemeContext } from '@/context/ThemeContext'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Calculator() {
    const [firstValue, setFirstValue] = useState('');
    const [displayValue, setDisplayValue] = useState('0');
    const [operator, setOperator] = useState('');
    const {currentTheme} = useContext(ThemeContext)
    const { width } = useWindowDimensions();
    const keypadPadding = 16;
    const keypadGap = 12;
    const dynamicButtonSize = Math.floor((width - keypadPadding * 2 - keypadGap * 3) / 4);
    const buttonSize = Math.max(52, Math.min(70, dynamicButtonSize));

    const handleNumberInput = (num: string) => {
        if(displayValue === '0'){
            setDisplayValue(num);
        }else{
            setDisplayValue(displayValue + num);
        }

    };

    const handleOperator = (operator: string) => {
        setOperator(operator);
        setFirstValue(displayValue);
        setDisplayValue('0');
    };

    const handleCalculation = () => {
        const num1: number = parseFloat(firstValue);
        const num2: number = parseFloat(displayValue);

        const result = MathEngine(num1,num2,operator);
        
        setDisplayValue(result);
        setOperator('');    
        setFirstValue('');
    };

    const handleClear = () => {
        setDisplayValue('0');
        setOperator('');
        setFirstValue('');
    };

    const handleDelete = () => {
        if(displayValue.length === 1){
            setDisplayValue('0');
        }else{
            setDisplayValue(displayValue.slice(0,-1));
        }
    };

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={[
        styles.container,
        { backgroundColor: currentTheme === 'dark' ? Colors.dark : Colors.light },
      ]}>
      <View style = {[styles.display,{backgroundColor: currentTheme === 'dark' ? Colors.dark : Colors.grey }]}>
        <Text style = {{fontSize:30, fontWeight: '300', color: currentTheme === 'dark' ? Colors.white : Colors.black}}>{firstValue + operator}</Text>
        <Text style = {{fontSize:70, fontWeight:'300',color: currentTheme === 'dark' ? Colors.white : Colors.black}}>{displayValue}</Text>
      </View>
      <View
        style={[
          styles.keypad,
          {
            backgroundColor: currentTheme === 'dark' ? Colors.dark : Colors.light,
            gap: keypadGap,
            padding: keypadPadding,
          },
        ]}>
        <Button title= 'C' type='top' size={buttonSize} onPress={() => handleClear()}/>
        <Button title = '⌫' type='top' size={buttonSize} onPress={() => handleDelete()}/>
        <Button title = '%' type='top' size={buttonSize} onPress={() => handleOperator('%')}/>
        <Button title = '÷' type='right' size={buttonSize} onPress={() => handleOperator('÷')}/>
        <Button title= '7' type='number' size={buttonSize} onPress={() => handleNumberInput('7')}/>
        <Button title = '8' type='number' size={buttonSize} onPress={() => handleNumberInput('8')}/>
        <Button title = '9' type='number' size={buttonSize} onPress={() => handleNumberInput('9')}/>
        <Button title = 'x' type='right' size={buttonSize} onPress={() => handleOperator('x')}/>
        <Button title= '6' type='number' size={buttonSize} onPress={() => handleNumberInput('6')}/>
        <Button title = '5' type='number' size={buttonSize} onPress={() => handleNumberInput('5')}/>
        <Button title = '4' type='number' size={buttonSize} onPress={() => handleNumberInput('4')}/>
        <Button title = '-' type='right' size={buttonSize} onPress={() => handleOperator('-')}/>
        <Button title= '3' type='number' size={buttonSize} onPress={() => handleNumberInput('3')}/>
        <Button title = '2' type='number' size={buttonSize} onPress={() => handleNumberInput('2')}/>
        <Button title = '1' type='number' size={buttonSize} onPress={() => handleNumberInput('1')}/>
        <Button title = '+' type='right' size={buttonSize} onPress={() => handleOperator('+')}/>
        <Button title= '0' type='number' size={buttonSize} onPress={() => handleNumberInput('0')}/>
        <Button title = '00' type='number' size={buttonSize} onPress={() => handleNumberInput('00')}/>
        <Button title = '.' type='number' size={buttonSize} onPress={() => handleNumberInput('.')}/>
        <Button title = '=' type='right' size={buttonSize} onPress={() => handleCalculation()}/>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1 ,
    },
    display:{
        flex:1,
        //backgroundColor: Colors.grey,
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
    },
})