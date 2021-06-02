import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput } from 'react-native';

 function DiscountCreate({route}) {


    const [discountName, setDiscountName] = React.useState(route.params.name);
    const [ DiscountValue, setDiscountValue] = React.useState(route.params.value);

    return (
        <View>

        <TextInput
              value={discountName} 
            //   placeholder='اسم الخصم'
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
             /> 
        
        <TextInput
              value={DiscountValue.toString()}
            //   placeholder='قيمة الخصم'
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />
     </View>
    )
}


export default DiscountCreate;
