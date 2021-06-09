import React from 'react';
import {View, Text, Pressable} from 'react-native';
 
import styles from './styles';


 

const ReceiptItem = ({item, navigation}) => {

  
 


  return (

    <Pressable 
       onPress={() => navigation.navigate('ReceiptDetails')}
     style={styles.root}>
      
    <  Text>Receipt</Text>
        <View style={{alignItems:'center'}}>
        <Text>{item.name}</Text> 
        <Text style={{fontWeight:'bold'}}>SR:{item.price}</Text>
      </View>
        
        
    </Pressable>
  );
};



export default ReceiptItem;
