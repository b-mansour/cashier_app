import React from 'react';
import {View, Text, Pressable,Image, ScrollView, _ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
 


 

const CartItem = ({item, cartItems}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  

  return (

<Pressable 
 onPress={() => navigation.navigate('CartItemDetails',item)}
 style={styles.root}>     
  <View style={{alignItems:'center' , flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:20}}> {item.name} X </Text> 
      <Text  style={{fontSize:20}}>{item.quantity}</Text>
    </View>
    <View>
        <Image style={styles.image} source={{uri: item.image}}/>
        </View>
  <Text  style={{fontSize:20}}>{item.price * item.quantity}</Text>
 </View>
</Pressable> 
        
        
  
  );
};



export default CartItem;
