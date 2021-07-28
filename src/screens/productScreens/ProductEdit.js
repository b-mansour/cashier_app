import React, {useEffect} from 'react';
import {View, Text , FlatList, Pressable, StyleSheet, ScrollView , TextInput,TouchableOpacity } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import {categoryContext} from '../../../App';
import {categoryContext} from '../../router/ItemsRoutes/ProductStack';
import Button from '../../components/Button/index';
import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import {colors} from '../../assets/Colors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { showMessage, hideMessage } from "react-native-flash-message";
 
import imageToBase64 from 'image-to-base64/browser';
 

export default function ProductEdit({route, navigation}) {


    const [name, setName] = React.useState(route.params.name);
    const [id, setId] = React.useState(route.params.id);
    const [price, setPrice] = React.useState(route.params.price);
    const [cost, setCost] = React.useState(route.params.cost);
    // const [image, setImage] = React.useState(route.params.image);
    const [image, setImage] = React.useState('');
    const [barcode, setBarcode] = React.useState(route.params.barcode);


  
const onProductEdit = () => {
  

   // const formData = new FormData();

// const fileField = document.querySelector('input[type="file"]');

const formData = {
                   "Id" : id, 
                   "Name" : name, 
                   "Cost" : cost, 
                   "Price" : price, 
                   "Qr" : barcode, 
                   "SectionId" : selectedOption, 
                   "Image" : image
                  }
                
                  console.log(formData)

               
// formData.append('name', name);
// formData.append('price', price);
// formData.append('cost', cost);
// formData.append('image', image);
// formData.append('barcode', barcode);

fetch('https://cashierapi.ibtikar-soft.sa/api/Store/EditProduct', {
method: 'POST',
headers: { 
'Accept': 'application/json',
'Content-Type':'application/json'
},
body : JSON.stringify(formData)
// body: formData
})
.then(response => response.json())
.then(result => {
console.log('Success:', result);

// showMessage({
//   message: "My message title",
//   description: "My message description",
//   type: "default",
//   backgroundColor: "purple",  
//   color: "#606060", 
// });
navigation.goBack();

})
.catch(error => {
console.error('Error:', error);
});
    }


    const onProductDelete = () => {
    
      // const formData = new FormData();
      // const fileField = document.querySelector('input[type="file"]');
     var formData = {
                     "Id" : id 
                    }
      // formData.append('name', name);
      // formData.append('image', image);
     
    
      fetch('https://cashierapi.ibtikar-soft.sa/api/Store/DeleteProduct', {
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
        navigation.goBack();
         
      })
      .catch(error => {
        console.error('Error:', error);
      });
      }

   const TakePhoto = () => {
        const options = {}
        launchCamera(options, response => {
          console.log(response)
        })
      
      }
      

    // const takePhotoFromCamera = () => {
    //   ImagePicker.openCamera({
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //   }).then(image => {
    //     console.log(image);
    //     setImage(image.path)
    //   });
    // }


    const ChoosePhoto = () => {
      const options = {
        includeBase64: true
      }
      launchImageLibrary(options, response => {
        if(response.didCancel){
          console.log('cancelled')
        } else {
         setImage(response.assets[0].base64)
         console.log("_________________________________________________")
         console.log(response);
         console.log("*****************************************************")
     }
  
        // console.log(image)
      })
   }
  

    // const ChoosePhoto = () => {
    //   ImagePicker.openPicker({
    //     width: 300,
    //     height: 400,
    //     cropping: true
    //   }).then(image => {
    //     console.log(image);
    //     setImage(image.path)
    //   });
    // }




    // const {category} = React.useContext(categoryContext);
    // const [ categories, setCategories] = category;

    const [selectedOption, setSelectedOption] = React.useState(
        categories ? categories[0] : null,
      );


    // function convertImageTobase64(){
    //   imageToBase64(route.params.image) 
    // .then(
    //     (response) => {
    //         setImage(response);
    //         console.log(response); 
    //     }
    // )
    // .catch(
    //     (error) => {
    //         console.log(error); 
    //     }
    // )
    //   }

    // function convertImageTobase64(){
    //     ImgToBase64.getBase64String(route.params.image)
    //       .then(base64String =>  console.log(base64String))
    //       .catch(err => console.log(err));
    //   }

    const [categories, setCategories ] = React.useState([]);
      useEffect(() => {
              // convertImageTobase64();
              // imageToBase64(route.params.image) // Path to the image
              // .then(
              //     (response) => {
              //         setImage(response);
              //         console.log(response); // "cGF0aC90by9maWxlLmpwZw=="
              //     }
              // )
              // .catch(
              //     (error) => {
              //         console.log(error); // Logs an error if there was one
              //     }
              // )
               console.log(selectedOption)
              let isMounted = true;               
              fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetSections/1')
              .then((response) => response.json())
              .then((json) => { if(isMounted) setCategories(json.response)})
              .catch((error) => console.error('Error:' + error))
              return () => { isMounted = false }; 
            },[categories,image,selectedOption]);                               
    
      // useEffect(()=>{
      //   console.log(selectedOption.id);
      //   console.log(route.params);
      //   console.log(image);
      //   console.log(categories);
      // },[])


    return (
        <ScrollView>



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
          <Picker.Item key={option.id} label={option.name} value={option.id} />
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
           <Button  onPress={TakePhoto} title='تصوير من الكاميرا'/> 
           <Button  onPress={ChoosePhoto} title='اختيار صورة'/> 
           <Button  onPress={onProductEdit} title='تعديل المنتج'/>  
           <TouchableOpacity onPress={onProductDelete} style={styles.footer}>
             <AntDesign style={{fontSize:25, color:'#FFF'}} name="delete"></AntDesign>
           </TouchableOpacity>     
     </ScrollView>
    )
}



const styles = StyleSheet.create({
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
