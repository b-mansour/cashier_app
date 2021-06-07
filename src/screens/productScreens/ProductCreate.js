import React from 'react';
import {View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {categoryContext} from '../../../App';
import Button from '../../components/Button/index';
import ImagePicker from 'react-native-image-crop-picker';
 

export default function ProductCreate() {


    const [name, setName] = React.useState();
    const [price, setPrice] = React.useState();
    const [cost, setCost] = React.useState();
    const [image, setImage] = React.useState();
    const [barcode, setBarcode] = React.useState();


    newProduct = {
      name : name,
      price : price,
      cost : cost, 
      image : image,
      barcode : barcode
    }

    const takePhotoFromCamera = () => {
      ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
      }).then(image => {
        console.log(image);
        setImage(image.path)
      });
    }

    const ChoosePhoto = () => {
      ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
      }).then(image => {
        console.log(image);
        setImage(image.path)
      });
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
          <Picker.Item key={option.id} label={option.name} value={option.name} />
        ))}
      </Picker>

          <TextInput
              value={cost}
              placeholder='سعر التكلفة'
              onChangeText={ value => setCost(value)}
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />

        <TextInput
              value={barcode}
              placeholder='رقم الباركود'
              onChangeText={ value =>  setBarcode(value)}
              style={{ borderBottomWidth:2, borderBottomColor:'#12b520', fontSize:20}}
              keyboardType='numeric'
             />  

            
           <Button   onPress={takePhotoFromCamera} title='Take photo from camera'/> 
           <Button   onPress={ChoosePhoto} title='Choose photo'/> 
           <Button   onPress={()=> {}} title='اضافة'/>  


           

             
     </View>
    )
}




