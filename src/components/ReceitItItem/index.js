import React from 'react';
import {View, Text, Pressable} from 'react-native';
 
import styles from './styles';


 

const ReceiptItem = ({item, navigation}) => {

  
 


  return (

    <Pressable 
       onPress={() => navigation.navigate('ReceiptDetails', item)}
     style={styles.root}>
      
    <  Text>فاتورة</Text>
        <View style={{alignItems:'center'}}>
        <Text>   اجمالس السعر : {item.totalPrice}</Text> 
         <Text> الضريبة :  {item.vat}</Text> 
        <Text style={{fontWeight:'bold'}}>رقم الفاتورة: {item.billNo}</Text>
        <Text style={{fontWeight:'bold'}}>تاريخ اصدار الفاتورة:{item.createdDate}</Text>
      </View>
        
        
    </Pressable>
  );
};



export default ReceiptItem;
