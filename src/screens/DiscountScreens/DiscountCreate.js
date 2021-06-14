import React from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import { discountContext } from '../../../App';
import Button from '../../components/Button/index';
import {Picker} from '@react-native-picker/picker';


 function DiscountCreate() {

  const discountTypes = ['amount','percentage'];


    const [discountName, setDiscountName] = React.useState('');
    const [ DiscountValue, setDiscountValue] = React.useState()

    // const {discount} = React.useContext(discountContext);
    // const [ discounts, setDiscounts] = discount;

    const [selectedOption, setSelectedOption] = React.useState(
      discountTypes ? discountTypes[0] : null,
      );
      

    return (
        <View>
    {console.log(selectedOption)}
        <TextInput
              value={discountName} 
              placeholder='اسم الخصم'
              style={styles.input}
             /> 

     <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {discountTypes.map( (option,index) => (
           <Picker.Item key={index}   label={option} value={option} />
        ))}
      </Picker>
        
        <TextInput
              value={DiscountValue}
              placeholder='قيمة الخصم'
              style={styles.input}
              keyboardType='numeric'
             />

        <Button   onPress={()=> {}} title='اضافة'/>
     </View>
    )
}


export default DiscountCreate;


const styles = StyleSheet.create({
  input: {
    marginTop:20,
    width:'90%',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    borderColor:'#12b520',
    fontSize:20,
    color:'black',
}
});

