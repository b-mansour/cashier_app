import React from 'react';
import { Button, View, Text , FlatList } from 'react-native';
import {cartContext} from '../../../App';

 function CartScreen() {



  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;

    return (
        <View>
             

           


        </View>
          
   
    )
}

export default CartScreen;
