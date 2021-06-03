import React from 'react';
import { Button, View, Text , FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import {cartContext} from '../../../App';
import CartItem from '../../components/CartItem';

 function CartScreen() {

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;

  var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity, 0);

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

          <View>
          <Text style={{fontSize:30}}>total price is {totalPrice.toFixed(2)}</Text>
           {/* <Text style={{fontSize:30}}>total price is {Number((totalPrice).toFixed(3))}</Text> */}
          </View>

           
    
           <TouchableOpacity style={styles.checkout} >
             <Text style={{color:'#fff' }}>Check Out</Text>
           </TouchableOpacity>

      </View>
   
    )
}

 

export default CartScreen;



const styles = StyleSheet.create({

  checkout: {
    marginTop:20,
    alignSelf:'center',
     backgroundColor:'#12b520',
      width:200, height:50, 
      alignItems:'center',
      justifyContent:'center',
      borderRadius:10
     
    }


})





 