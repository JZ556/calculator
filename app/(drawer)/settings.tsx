import { Text, StyleSheet, View, TouchableOpacity, Switch} from "react-native";
import React from "react";
import { Colors } from "@/utils/Colors";
const Settings = () => {
    
    return(
        <View style= {styles.container}>
            <Text style = {styles.title}>Theme Switch</Text>
            <TouchableOpacity style= {styles.button}onPress={() => {}}>
                <Text>Dark Mode</Text>
                <Switch/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        backgroundColor: Colors.grey,
    },
    title : {
        fontSize: 18,
        fontWeight: '600',
        marginVertical : 10,
    },
    button:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor: Colors.white,
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,

    }
})

export default Settings;