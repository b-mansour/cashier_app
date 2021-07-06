import React, {useEffect} from 'react';
import {View,Pressable, StyleSheet, ScrollView , TextInput } from 'react-native';
import {Picker} from '@react-native-picker/picker';
// import {categoryContext} from '../../../App';
import {categoryContext} from '../../router/ItemsRoutes/ProductStack';
import Button from '../../components/Button/index';
// import ImagePicker from 'react-native-image-crop-picker';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import { barcodeContext } from '../../../App';
import {cashierContext} from '../../../App';
import {shopContext} from '../../../App';
import {colors} from '../../assets/Colors';
// import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
 

 
 
// export const barcodeContext = React.createContext();

export default function ProductCreate({navigation}) {


    const [name, setName] = React.useState();
    const [price, setPrice] = React.useState();
    const [cost, setCost] = React.useState();
    const [image, setImage] = React.useState();
    const {Barcode} = React.useContext(barcodeContext)
    const [barcode, setBarcode] = Barcode;

     const {cashier} = React.useContext(cashierContext);
      const [ cashierNo, setCashierNo] = cashier;

       const {shop} = React.useContext(shopContext);
      const [ shopId, setShopId] = shop;
      // const [cashierPassword, setCashierPassword] = React.useState('');

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
                       navigation.navigate('Auth')
                    }
                })
        } catch (error) {
            console.log(error);
      }
     }


 


const onProductCreate = () => {

  // const formData = new FormData();

// const fileField = document.querySelector('input[type="file"]');

const formData = { 
                   "Name" : name, 
                   "SectionId" : selectedOption, 
                   "Cost" : cost, 
                   "Price" : price, 
                   "Image" : image, 
                   "Qr" :  barcode,
                   "CashierNo" : cashierNo,
                   "ShopId" :  1
                  }
console.log(shopId)
      // formData.append('name', name);
     // formData.append('price', price);
    // formData.append('cost', cost);
   // formData.append('image', image);
  // formData.append('barcode', barcode);

fetch('https://cashierapi.ibtikar-soft.sa/api/Store/NewProduct', {
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
  console.log(formData);
  
  // navigation.goBack();
})
.catch(error => {
  console.error('Error:', error);
});
}


const TakePhoto = () => {
   const options = {
        includeBase64: true
      }
  launchCamera(options, response => {
     setImage(response.assets[0].base64)
        console.log("_________________________________________________")
        console.log(response.assets[0].base64)
        console.log("*****************************************************")
        console.log(image)
  })

}


    // const takePhotoFromCamera = () => {
    //   ImagePicker.openCamera({
    //     width: 300,
    //     height: 400,
    //     cropping:false,
    //   }).then(image => {
    //     console.log(image.cropRect.path);
    //     setImage(image.path)
    
    //   });
    // }
   
     
    const ChoosePhoto = () => {
      const options = {
        includeBase64: true
      }
      launchImageLibrary(options, response => {
        if(response){
           setImage(response.assets[0].base64)
           console.log("_________________________________________________")
           console.log(response);
           console.log("*****************************************************")
        


        }

        else{ 
          console.log('sjjd')
        }
        
       
        // console.log(image)
      })
   }



   useEffect(() => {
    getData();
  },[image,selectedOption,shopId]);


    


    // const ChoosePhoto = () => {
    //   ImagePicker.openPicker({
      
    //     cropperToolbarTitle:'نعديل الصورة', 
    //     width: 300,
    //     height: 400,
    //     cropping: true,
    //   }).then(image => {
    //     // console.log(image.path);
    //     setImage(image.path)
    //   //   console.log(image)
    //   });
    //   console.log(image)
    // }

     const {category} = React.useContext(categoryContext);
    const [ categories, setCategories] = category;

    const [selectedOption, setSelectedOption] = React.useState(
        categories ? categories[0] : null,
      );
      useEffect(()=> {
        console.log(selectedOption)
      },[selectedOption])

    return (
      
      // <barcodeContext.Provider value={{barcodee:[barcode, setBarcode]}}>
      <ScrollView>


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
          <Picker.Item   key={option.id} label={option.name} value={option.id} />
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
              borderRadius:10, marginRight:10, borderColor:colors.primary}}
              // style={styles.input}
              keyboardType='numeric'
              
             />  
      <Pressable onPress={() => navigation.navigate('BarcodeScanner', )}> 
     <MaterialCommunityIcons style={{fontSize:25}} name="barcode-scan"></MaterialCommunityIcons>
    </Pressable>

    </View>   
           <Button onPress={TakePhoto} title='تصوير من الكاميرا'/> 
           <Button onPress={ChoosePhoto} title='اختيار صورة'/> 
           <Button onPress={onProductCreate} title='اضافةالمنتج'/> 
      
           
       </View>
       </ScrollView>

      //</barcodeContext.Provider>
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
    color:'black'
}
});



