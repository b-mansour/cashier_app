import React, {useEffect} from 'react';
import { View,Text,StyleSheet,TextInput} from 'react-native';
import Button from '../../components/Button/index';
// import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';



function CategoryEdit({route}) {

    const [name, setName] = React.useState();
    // const [description, setDescription] = React.useState();
    const [image, setImage] = React.useState();




    const onCategoryCreate = () => {


    // const formData = new FormData();
    // const fileField = document.querySelector('input[type="file"]');
  //  var formData = {"Name" : name, 
  //                  "Image" : image, 
  //                  "ShopId" : "1", 
  //                  "CashierNo" : "107375"
  //   }

    var formData = {
                    "Name" : name, 
                    "Image" :  image, 
                    "ShopId" : "1", 
                    "CashierNo" : "107375"
                  }
    // formData.append('name', name);
    // formData.append('image', image);
   
    
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
    console.log(image);
    
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
