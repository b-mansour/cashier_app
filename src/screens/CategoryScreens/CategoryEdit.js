import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput ,Image} from 'react-native';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Button from '../../components/Button/index';
// import ImagePicker from 'react-native-image-crop-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




function CategoryEdit({route,navigation}) {
  
    const [id, setId] = React.useState(route.params.id);
    const [name, setName] = React.useState(route.params.name);
    const [image, setImage] = React.useState(route.params.image);
    //const [description, setDescription] = React.useState(route.params.description);



    const onCategoryEdit = () => {


      // const formData = new FormData();
      // const fileField = document.querySelector('input[type="file"]');
     var formData = {
                     "Id" : id, 
                     "Name" : name , 
                     "Image" : image
                    }
      // formData.append('name', name);
      // formData.append('image', image);
     
      
      fetch('https://cashierapi.ibtikar-soft.sa/api/Store/EditSection', {
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


      
      const onCategoryDelete = () => {
    
    
        // const formData = new FormData();
        // const fileField = document.querySelector('input[type="file"]');
       var formData = {
                       "Id" : id, 
                      }
        // formData.append('name', name);
        // formData.append('image', image);
       
        
        fetch('https://cashierapi.ibtikar-soft.sa/api/Store/DeleteSection', {
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

    //     <View >
       

    // <Pressable style={{flex:1, justifyContent:'flex-end'}} >
    //     <Text>helloere</Text>
    //     <Text>helloere</Text>
    // </Pressable>


    //     </View>
    <View style={styles.container}>


        

    <View style={styles.contentContainer}> 
        <TextInput
              value={name} 
              style={styles.input}
              onChangeText={val => { setName(val)}}
             /> 
        
        {/* <TextInput
              value={description}
              style={styles.input}
             /> */}
              <Image style={{alignSelf:'center',flex:1,width:200, height:200}}  source={{uri:image}}/>

              

    </View>
  
          <View> 
          <Button onPress={takePhotoFromCamera} title='Take photo from camera'/> 
           <Button onPress={ChoosePhoto} title='Choose photo'/> 
           <Button onPress={onCategoryEdit} title='تعديل'/> 
           </View> 

    <TouchableOpacity onPress={onCategoryDelete} style={styles.footer}>
    <AntDesign style={{fontSize:25, color:'#FFF'}} name="delete"></AntDesign>
    </TouchableOpacity>
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
        height: 40,
        width: 40,
        marginBottom:10,
        borderRadius:50,
        backgroundColor:'#9e0913',
        alignItems:'center',
        justifyContent:'center'
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
