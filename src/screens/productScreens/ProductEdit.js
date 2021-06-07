import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet, ScrollView,TextInput} from 'react-native';

export default function ProductEdit({route}) {

    const [name, setname] = React.useState(route.params.name);
    const [price, setPrice] = React.useState(route.params.price);
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
           <Button   onPress={()=> {}}  title='تعديل'/>
      </View>
    )
}
