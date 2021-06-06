import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {categoryContext} from '../../../App';

export default function ProductCreate() {


    const [name, setName] = React.useState('');
    const [price, setPrice] = React.useState();
    const [cost, setCost] = React.useState();
    const [barcode, setBarcode] = React.useState();


    var submit = () => {
        console.log(name);
        console.log(price);
    }


    const {category} = React.useContext(categoryContext);
    const [ categories, setCategories] = category;

    const [selectedOption, setSelectedOption] = React.useState(
        categories ? categories[0] : null,
      );


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

   <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => setSelectedOption(itemValue)}>
        {categories.map( option => (
          <Picker.Item label={option.name} value={option.name} />
        ))}
      </Picker>

          <TextInput
              value={cost}
              placeholder='سعر التكلفة'
              onChangeText={ value => setPrice(value)}
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />

        <TextInput
              value={barcode}
              placeholder='رقم الباركود'
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




