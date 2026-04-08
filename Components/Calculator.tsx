import { View, Text , StyleSheet,  } from 'react-native'
import React from 'react'
import { Colors } from '@/utils/Colors'
import Button from './Button'

export default function Calculator() {
  return (
    <View style = {styles.container}>
      <View style = {styles.display}>
        <Text style = {{fontSize:70, fontWeight:'300'}}>test</Text>
      </View>
      <View style = {styles.keypad}>
        <Button></Button>
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