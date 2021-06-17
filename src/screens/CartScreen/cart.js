import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView, Button } from 'react-native';
import {cartContext} from '../../../App';
import CartItem from '../../components/CartItem';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

 function CartScreen(){

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;
  

  var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity, 0);


const onCheckout = () => {
  console.warn('checked out successfully');
  setCartItems([]);
}








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
    <Text style={{fontSize:20}}> اجمالي السعر {Number((totalPrice).toFixed(3))}</Text>
    <Button styles={styles.button} onPress={onCheckout} title='checkout'/> 
    </View>
    </View>
  } else {
    cart =  <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
            <MaterialIcons style={{fontSize:70, color:"gray"}} name="shopping-cart"></MaterialIcons>
            <Text style={{fontSize:20, color:"gray"}}>لا يوجد شيء في السلة</Text>
            </View>
  }

  return (
       cart
    )
   
    
}

 

export default CartScreen;



const styles = StyleSheet.create({

  button : {
    position:'absolute',
 
  }
})



 



 