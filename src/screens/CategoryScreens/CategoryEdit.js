import React from 'react';
import { View, Text , Pressable, StyleSheet,Button, TextInput } from 'react-native';

function CategoryEdit({route}) {

    const [name, setname] = React.useState(route.params.name);
    const [description, setDescription] = React.useState(route.params.description);


    return (
        <View>

        <TextInput
              value={name} 
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
             /> 
        
        <TextInput
              value={description}
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
             />
        </View>
    )
}

export default CategoryEdit;
