import React from 'react';
import {View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {categoryContext} from '../../../App';
import Button from '../../components/Button/index';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
 
 
export const barcodeContext = React.createContext();

export default function ProductCreate({navigation}) {


    const [name, setName] = React.useState();
    const [price, setPrice] = React.useState();
    const [cost, setCost] = React.useState();
    const [image, setImage] = React.useState();
    const [barcode, setBarcode] = React.useState();

    


    var newProduct = {
      name : name,
      category: category,
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

      <barcodeContext.Provider value={{Barcode:[barcode, setBarcode]}}>
        <View>
        <TextInput
              value={name} 
              placeholder='اسم المنتج'
              onChangeText={ value => setName(value)}
              style={styles.input}
             /> 

        
        <TextInput
              value={price}
              placeholder='سعر المنتج'
              onChangeText={ value => setPrice(value)}
              style={styles.input}
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
              style={styles.input}
              keyboardType='numeric'
             />

<View style={{flexDirection:'row', justifyContent: 'center',
    alignItems: 'center', marginTop:20}}> 
        <TextInput
              value={barcode}
              placeholder='رقم الباركود'
              onChangeText={ value =>  setBarcode(value)}
              style={{width:'80%', borderWidth:1,
              borderRadius:10, marginRight:10, borderColor:'#12b520'}}
              // style={styles.input}
              keyboardType='numeric'
              
             />  
      <Pressable onPress={() => navigation.navigate('BarcodeScanner')}> 
     <MaterialCommunityIcons style={{fontSize:25}} name="barcode-scan"></MaterialCommunityIcons>
    </Pressable>

    </View>   
           <Button onPress={takePhotoFromCamera} title='Take photo from camera'/> 
           <Button onPress={ChoosePhoto} title='Choose photo'/> 
           <Button onPress={()=> {}} title='اضافة'/>  
           
       </View>

       </barcodeContext.Provider>
    )
}



const styles =   StyleSheet.create({
  input: {
    marginTop:20,
    width:'90%',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    borderColor:'#12b520',
    fontSize:20,
    color:'#000'

}
});



