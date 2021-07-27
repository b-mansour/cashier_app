import React from 'react';
import {Image, View, Text, Pressable, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {colors} from '../../assets/Colors';


 

const ProductItem = ({item, cartItems, setCartItems}) => {

  
  const navigation = useNavigation();


  let onadd = () => {
  //   var cartItem = {
  //     id: item.id,
  //     name: item.name,
  //     image: item.image,
  //     price: item.price ,
  //     barcode : item.qr,
  //     quantity: 1,
      
  //  }

  console.log(item);


   var cartItem = { 
                     ProductID : item.id, 
                     UnitPrice : item.price, 
                     image: item.image,
                     barcode: item.qr,
                     Quantity :1, 
                     DiscountID :item.discountId, 
                     FinalPrice :item.price
                    }

  //   for(let i=0 ; i < cartItems.length; i++){

  //     if(cartItems[i].id === cartItem.id){
  //       cartItems[i].quantity = cartItems[i].quantity + 1;

  //       return
  //     }
  // }

  for(let i=0 ; i < cartItems.length; i++){

    if(cartItems[i].ProductID === cartItem.ProductID){
      cartItems[i].Quantity = cartItems[i].Quantity + 1;

      return
    }
}

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
         
         <Text style={{alignSelf:'center' , fontSize:20}}>{item.name}</Text> 

<View>
 <Image style={styles.image} source={{uri:'https://cashierapi.ibtikar-soft.sa/' + item.image}} />
</View>

<View style={{flexDirection:'row', justifyContent:'space-between' }}>
 
<Text style={{ margin:5, fontWeight:'bold' }}>SR:{item.price}</Text>
</View>
      </Pressable>
  );
};

export default ProductItem;
