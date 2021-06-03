import React from 'react';
import {View, Text, Pressable, ScrollView, _ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import Items from '../../screens/ItemsScreen/Items';


 

const CartItem = ({item, cartItems}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  

  return (

<ScrollView style={styles.root}>  
       
<View style={{alignItems:'center' , flexDirection:'row', justifyContent:'space-between'}}>
    <View style={{flexDirection:'row'}}>
      <Text>{item.name} X </Text> 
      <Text>{item.quantity}</Text>
    </View>
<Text>{item.price * item.quantity}</Text>
 </View>
</ScrollView> 
        
        
  
  );
};



export default CartItem;
