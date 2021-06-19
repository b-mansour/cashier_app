import React from 'react';
import {View, Text , FlatList, Pressable, StyleSheet, ScrollVie , TextInput,TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {categoryContext} from '../../../App';
import Button from '../../components/Button/index';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import {colors} from '../../assets/Colors'
 

export default function ProductEdit({route}) {


    const [name, setName] = React.useState(route.params.name);
    const [price, setPrice] = React.useState(route.params.price);
    const [cost, setCost] = React.useState(route.params.cost);
    const [image, setImage] = React.useState(route.params.image);
    const [barcode, setBarcode] = React.useState(route.params.barcode);


    var EditProduct = {
      name : name,
      category: category,
      price : price,
      cost : cost, 
      image : image,
      barcode : barcode
    }


    const onProductEdit = () => {

    // const formData = new FormData();
    // const fileField = document.querySelector('input[type="file"]');
    
    // formData.append('name', name);
    // formData.append('price', price);
    // formData.append('cost', cost);
    // formData.append('image', image);
    // formData.append('barcode', barcode);
    
    fetch('https://example.com/profile/avatar', {
      method: 'PUT',
      // body: formData
         body: EditProduct
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
    })
    .catch(error => {
      console.error('Error:', error);
    });
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
              style={styles.input}
             /> 

        
        <TextInput
              value={price.toString()}
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
              value={cost.toString()}
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
              borderRadius:10, marginRight:10, borderColor:colors.primary}}
              // style={styles.input}
              keyboardType='numeric'
              
             />  

<MaterialCommunityIcons style={{fontSize:25}} name="barcode-scan"></MaterialCommunityIcons>


        </View>   

            
           <Button  onPress={takePhotoFromCamera} title='تصوير من الكاميرا'/> 
           <Button  onPress={ChoosePhoto} title='اختيار صورة'/> 
           <Button  onPress={()=> {}} title='تعديل المنتج'/>  


           <TouchableOpacity style={styles.footer} >
             <AntDesign style={{fontSize:25, color:'#FFF'}} name="delete"></AntDesign>
           </TouchableOpacity>

             
     </View>
    )
}



const styles =   StyleSheet.create({
  input: {
    marginTop:20,
    width:'90%',
    borderWidth:1,
    borderRadius:10,
    alignSelf:'center',
    borderColor:colors.primary,
    fontSize:20,
    color:'#000'
},
footer: {
  // position:'absolute',
  // top:'90%',
  left:'80%',
  height: 40,
  width: 40,
  marginBottom:10,
  borderRadius:50,
  backgroundColor:'#9e0913',
  alignItems:'center',
  justifyContent:'center'
},
})





