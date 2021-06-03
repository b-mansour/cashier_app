import React from 'react';
import { Button, View, Text , FlatList } from 'react-native';
import {cartContext} from '../../../App';
import CartItem from '../../components/CartItem'

 function CartScreen() {

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;

 return (
        <View>
        {/* <Text style={{fontSize:50, color:'#12b520'}}>Categories</Text> */}
           <FlatList
            data={cartItems}
            renderItem={({item}) => <CartItem  cartItems={cartItems} item={item}/>}
            keyExtractor={(item, index) => item.id }
            // horizontal 
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
          />

      </View>
   
    )
}

 

export default CartScreen;





 