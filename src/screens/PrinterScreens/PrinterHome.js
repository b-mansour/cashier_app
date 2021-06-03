import React from 'react';
import {Button, View, Text , FlatList, Pressable, StyleSheet} from 'react-native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
export default function PrinterHome() {
    return (
        <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>

            <AntDesign style={{fontSize:70, color:"gray"}} name="printer"></AntDesign>
            <Text> Sorry No Available Printers</Text>
        </View>
    )
}
