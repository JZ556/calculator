import { Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

export default function Button() {
  return (
    <TouchableOpacity style = {styles.button} onPress={() => {}}>
        <Text style= {{fontSize:34}}>test</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
        height: 70,
        width: 70,
        borderRadius:10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }

});