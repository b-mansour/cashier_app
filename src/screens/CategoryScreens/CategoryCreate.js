import React, {useEffect, useContext} from 'react';
import { View,Text,StyleSheet,TextInput} from 'react-native';
import Button from '../../components/Button/index';
// import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {cashierContext} from '../../../App';
import {shopContext} from '../../../App';



function CategoryEdit({route}) {

    const [name, setName] = React.useState();
    // const [description, setDescription] = React.useState();
    const [image, setImage] = React.useState();

    const {cashier} = useContext(cashierContext);
    const [ cashierNo, setCashierNo] = cashier;

     const {shop} = useContext(shopContext);
    const [ shopId, setShopId] = shop;

    const getData = () => {
      try {
          AsyncStorage.getItem('CashierData')
              .then(value => {
                  if (value != null) {
                      let  cashier = JSON.parse(value);
                      setCashierNo(cashier.cashierNo);
                      // setCashierPassword(cashier.cashierPassword);
                      setShopId(cashier.shopId);
                      
                  } else if(value == null){
                    //  navigation.navigate('Auth')
                    console.log('something went wrong')
                  }
              })
      } catch (error) {
          console.log(error);
    }
   }




    const onCategoryCreate = () => {


      console.log(shopId);
      console.log(cashierNo);


    var formData = {
                    "Name" : name, 
                    "Image" :  image, 
                    "ShopId" :   shopId, 
                    "CashierNo" : cashierNo
                  }
   
   
    console.log(formData)
    fetch('https://cashierapi.ibtikar-soft.sa/api/Store/NewSection', {
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
    //     ImagePicker.openCamera({
    //       width: 300,
    //       height: 400,
    //       cropping: true,
    //     }).then(image => {
    //       console.log(image);
    //       setImage(image.path)
    //     });
    //   }

     const ChoosePhoto = () => {
      const options = {
        includeBase64: true
      }
      launchImageLibrary(options, response => {
        setImage(response.assets[0].base64? response.assets[0].base64: null)
        console.log("_________________________________________________")
        // console.log(response.assets[0].base64)
        console.log("*****************************************************")
        

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

      //   console.log(image);
      // }
  

 useEffect(() => {
    getData();
    console.log(shopId);
    console.log(cashierNo);
  },[image]);



    return (
       
       
    <View style={styles.container}>


        

    <View style={styles.contentContainer}> 

    <View> 
        <TextInput
              value={name} 
              style={styles.input}
              onChangeText={val => { setName(val)}}
             /> 
        
        {/* <TextInput
              value={description}
              style={styles.input}
              onChangeText={val => { setDescription(val)}}
             /> */}

         </View>


         <Button onPress={TakePhoto} title='Take photo from camera'/> 
           <Button onPress={ChoosePhoto} title='Choose photo'/> 
           <Button onPress={onCategoryCreate} title='اضافة'/>  

    </View>

</View>
    )
}


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    
    contentContainer: {
        flex: 1 // pushes the footer to the end of the screen
    },
   
    footer: {
        // position:'absolute',
        // top:'90%',
        left:'80%',
        height: 50
    },

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

export default CategoryEdit;
