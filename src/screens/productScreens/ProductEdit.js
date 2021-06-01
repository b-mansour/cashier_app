import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet, ScrollView,TextInput} from 'react-native';

export default function ProductEdit({route}) {

    const [name, setname] = React.useState(route.params.name);
    const [price, setPrice] = React.useState(route.params.price)
    return (
        <View>

<TextInput
      value={name} 
      style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
     /> 

<TextInput
      value={price.toString()}
      style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
      keyboardType='numeric'
     />
        </View>
    )
}
