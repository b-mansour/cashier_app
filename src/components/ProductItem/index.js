import React from 'react';
import {Image, View, Text, Pressable, TouchableOpacity,FlatList, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';


 

const ProductItem = ({item, cartItems, setCartItems}) => {

  
  const navigation = useNavigation();

  // const onPress = () => {
  //   navigation.navigate('ProductDetails', {item}); 
  // };

  let onadd = () => {
    var cartItem = {
      id: item.id,
      name: item.name,
      image: item.image,
      price: item.price ,
      quantity: item.quantity 
      
   }

    console.log('2')

    for(let i=0 ; i < cartItems.length ; i++){

      console.log('3')
      if(cartItems[i].id === cartItem.id){
        cartItems[i].quantity = cartItems[i].quantity + 1;
          // cartItems.splice(i,1);
          console.log('4');
        
        // setCartItems(currentItems => [...currentItems,cartItem]);
        return
      }
     
     
  }
  
    console.log('5')
    // setCartItems([...cartItems,route.params.item])
    setCartItems(currentItems => [...currentItems,cartItem]);
    console.log(cartItems);
  }

  return (

    <View  style={styles.root}>
      <TouchableOpacity
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
         </TouchableOpacity>
        <View>
        <Image style={styles.image} source={{uri: item.image}}/>
        </View>
        <Text style={{left:'50%'}}>{item.name}</Text> 
        <Text style={{left:'50%', fontWeight:'bold'}}>SR:{item.price}</Text>
      </View>
  );
};



export default ProductItem;
