import React,{useEffect} from 'react';
import {View, TextInput, StyleSheet } from 'react-native';
import { discountContext } from '../../../App';
import Button from '../../components/Button/index';
import {Picker} from '@react-native-picker/picker';
import {cashierContext} from '../../../App';


 function DiscountCreate({navigation}) {



  const discountTypes = [
                         {
                            id: 1,
                            type:'خصم'
                          },
                          {
                           id: 2,
                           type:'خصم بالنسبة'
                         }
                                 
                        ];
                        
    const [discountName, setDiscountName] = React.useState();
    const [ DiscountValue, setDiscountValue] = React.useState();
    const {cashier} = React.useContext(cashierContext);
      const [ cashierNo, setCashierNo] = cashier;

    // const {discount} = React.useContext(discountContext);
    // const [ discounts, setDiscounts] = discount;

    const [selectedOption, setSelectedOption] = React.useState(
      discountTypes ? discountTypes[0] : null,
      );


      
      const onDiscountCreate = () => {

       var formData = { 
                        "Name" : discountName, 
                        "TypeId" : selectedOption,
                        "discount1" : DiscountValue, 
                        "CashierNo" : cashierNo, 
                        "ShopId" : "1"
                      }
                      
                      console.log(formData)
    
        fetch('https://cashierapi.ibtikar-soft.sa/api/Store/NewDiscount', {
          method: 'POST',
          headers: { 
            'Accept': 'application/json',
            'Content-Type':'application/json'
           },
       
          // body: formData
          body : JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
          // navigation.goBack();
           
        })
        .catch(error => {
          console.error('Error:', error);
        });
        }
    
    useEffect(() => {
      console.log(selectedOption);
    },[selectedOption])
      

    return (
        <View>
    {console.log(selectedOption)}
        <TextInput
              value={discountName} 
              onChangeText={ value => setDiscountName(value)}
              placeholder='اسم الخصم'
              style={styles.input}
             /> 

     <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {discountTypes.map( (option,index) => (
           <Picker.Item key={index}   label={option.type} value={option.id} />
        ))}
      </Picker>
        
        <TextInput
              value={DiscountValue}
              placeholder='قيمة الخصم'
              onChangeText={ value => setDiscountValue(value)}
              style={styles.input}
              keyboardType='numeric'
             />

        <Button   onPress={onDiscountCreate} title='اضافة'/>
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

