import React from 'react';
import { View,TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Button from '../../components/Button/index';
import {Picker} from '@react-native-picker/picker';
import  AntDesign  from 'react-native-vector-icons/AntDesign';

 function DiscountEdit({route}) {

    const discountTypes = ['amount','percentage'];

    const [discountName, setDiscountName] = React.useState(route.params.name);
    const [ DiscountValue, setDiscountValue] = React.useState(route.params.value);

    const [selectedOption, setSelectedOption] = React.useState(
      discountTypes ? discountTypes[0] : null,
      );


    

    return (
      <View>

        <TextInput
            value={discountName} 
            placeholder='اسم الخصم'
            style={styles.input}
            onChangeText={ value =>  setDiscountName(value)}
             /> 

      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {discountTypes.map( (option,index) => (
           <Picker.Item key={index}   label={option} value={option} />
        ))}
      </Picker>


         <TextInput
              value={DiscountValue.toString()}
            //   placeholder='قيمة الخصم'
            style={styles.input}
              keyboardType='numeric'
              onChangeText={ value =>  setDiscountValue(value)}
             />

       

           <Button onPress={()=> {}} title='تعديل'/>


           <TouchableOpacity style={styles.footer} >
             <AntDesign style={{fontSize:25, color:'#FFF'}} name="delete"></AntDesign>
           </TouchableOpacity>
          
     </View>
    )
}


export default DiscountEdit;

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
},
footer: {
  // position:'absolute',
  // top:'90%',
  left:'80%',
  top: '80%',
  height: 40,
  width: 40,
  marginBottom:10,
  borderRadius:50,
  backgroundColor:'#9e0913',
  alignItems:'center',
  justifyContent:'center'
}

});

