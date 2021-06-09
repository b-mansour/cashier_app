import React from 'react';
import {  View, Text , FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {cartContext} from '../../../App';
import CartItem from '../../components/CartItem';
import Button from '../../components/Button/index'

 function CartScreen(){

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;
  

  var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity, 0);


  




  var cart;

  if(cartItems.length > 0){
    cart = <View>
    <FlatList
     data={cartItems}
     renderItem={({item}) => <CartItem  cartItems={cartItems} item={item}/>}
     keyExtractor={(item, index) => item.id }
   />
     <View>
     {/* <Text style={{fontSize:30}}>total price is{totalPrice.toFixed(2)}</Text> */}
    <Text style={{fontSize:30}}>total price is {Number((totalPrice).toFixed(3))}</Text>
     </View>
    <Button title='checkout'/> 
    </View>
  } else {
    cart = <Text>cart is empty</Text>
  }

  return (
       cart
    )
   
    
}

 

export default CartScreen;



 



 