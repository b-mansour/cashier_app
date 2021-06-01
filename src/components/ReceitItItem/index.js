import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const ReceiptItem = ({item}) => {

  
  const navigation = useNavigation();


  return (

    <View style={styles.root}>
      
    <Text>Receipt</Text>
        <View style={{alignItems:'center'}}>
        <Text>{item.name}</Text> 
        <Text style={{fontWeight:'bold'}}>SR:{item.price}</Text>
    </View>
        
        
    </View>
  );
};



export default ReceiptItem;
