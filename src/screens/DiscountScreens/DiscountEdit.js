import React from 'react';
import { View,TextInput } from 'react-native';
import Button from '../../components/Button/index';

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

          <Button onPress={()=> {}} title='تعديل'/>
     </View>
    )
}


export default DiscountCreate;
