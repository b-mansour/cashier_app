import React from 'react';
import {Image, View, Text, Pressable, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {colors} from '../../assets/Colors';


 

const ProductItem = ({item, cartItems, setCartItems}) => {

  
  const navigation = useNavigation();


  let onadd = () => {
    var cartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price ,
      barcode : item.qr,
      quantity: 1,
      
   }

    for(let i=0 ; i < cartItems.length; i++){

      if(cartItems[i].id === cartItem.id){
        cartItems[i].quantity = cartItems[i].quantity + 1;

        return
      }
  }

//   for(let i=0 ; i < cartItems.length; i++){

//     if(cartItems[i].id === cartItem.id && !cartItems[i].hasOwnProperty('quantity')){
//       // cartItem[i].quantity = 2;
//       cartItem["quantity"] = 2;
//       // cartItems[i].quantity = cartItems[i].quantity + 1;
//       return
//     }
//     else if (cartItems[i].id === cartItem.id && cartItems[i].hasOwnProperty('quantity')) {

//          cartItems[i].quantity = cartItems[i].quantity + 1
        
//     }
// }


    // setCartItems([...cartItems,route.params.item])
    setCartItems(currentItems => [...currentItems,cartItem]);
    console.log(cartItems);
  }
                                              
  return (

    <Pressable  onPress={onadd}  style={styles.root}>
      {/* <TouchableOpacity
      onPress={onadd}
      style={{
        width: 30,
        height: 30, 
        margin: 5,
        borderRadius: 25,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#cbd1cc'
    }}>
      <Ionicons style={{fontSize:20}} name="cart"></Ionicons>
         </TouchableOpacity> */}
         <Text style={{alignSelf:'center', margin:10}}>{item.name}</Text> 
        <View>
        <Image style={styles.image} source={{uri:item.image}}/>
        </View>
        
        <Text style={styles.price}>SR:{item.price}</Text>
      </Pressable>
  );
};



export default ProductItem;
