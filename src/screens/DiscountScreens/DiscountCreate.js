import React from 'react';
import {View, TextInput } from 'react-native';
import Button from '../../components/Button/index';

 function DiscountCreate() {


    const [discountName, setDiscountName] = React.useState('');
    const [ DiscountValue, setDiscountValue] = React.useState()

    return (
        <View>

        <TextInput
              value={discountName} 
              placeholder='اسم الخصم'
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
             /> 
        
        <TextInput
              value={DiscountValue}
              placeholder='قيمة الخصم'
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />

<Button   onPress={()=> {}} title='اضافة'/>
     </View>
    )
}


export default DiscountCreate;
