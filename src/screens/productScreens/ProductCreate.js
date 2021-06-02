import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput } from 'react-native';

export default function ProductCreate() {


    const [name, setname] = React.useState('');
    const [price, setPrice] = React.useState()

    return (
        <View>

        <TextInput
              value={name} 
              placeholder='اسم المنتج'
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
             /> 
        
        <TextInput
              value={price}
              placeholder='سعر المنتج'
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />

             
     </View>
    )
}




