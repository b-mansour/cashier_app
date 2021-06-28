import React from 'react';
import {View, Text, Pressable , Alert}  from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
 


 

const DiscountItem = ({item}) => {


  const [id , setId] = React.useState(item.id)
  const onDiscountDelete = () => {


     
   
   var formData = {
                   "Id" : id 
                  }
   
    
    fetch('https://cashierapi.ibtikar-soft.sa/api/Store/DeleteDiscount', {
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


  
  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
  Alert.alert(
    "حذف الخصم",
    "حذف "+ item.name,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: onDiscountDelete }
    ]
  );

   

  return (

    <Pressable onPress={() => navigation.navigate('DiscountEdit', item )} style={styles.root}>
      
        <View style={{ alignItems:'center', flexDirection:'row', justifyContent:'space-around'}}>
        <Text  style={{fontSize:15}}>{item.name}</Text> 
        <Text  style={{fontWeight:'bold',fontSize:15}}>{item.discount1}</Text> 
        <Pressable onPress={createTwoButtonAlert}>
        <MaterialCommunityIcons style={{fontSize:25, color:'red'}} name="delete"></MaterialCommunityIcons>
        </Pressable>
        
      
    </View>
        
        
    </Pressable>
  );
};



export default DiscountItem;
