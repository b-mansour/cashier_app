import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput } from 'react-native';

export default function ProductCreate() {


    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState()


    submit = () => {
        console.log(name);
        console.log(price);
    }

    return (
        <View>

        <TextInput
              value={name} 
              placeholder='اسم المنتج'
              onChangeText={ value => setName(value)}
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
             /> 
        
        <TextInput
              value={price}
              placeholder='سعر المنتج'
              onChangeText={ value => setPrice(value)}
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />

             <Pressable onPress={submit}>
                 <Text>create</Text>
             </Pressable>

             
     </View>
    )
}




