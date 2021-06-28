import React from 'react';
import { View, Text, FlatList, SafeAreaView , StyleSheet, ScrollView, Button } from 'react-native';
import {cartContext} from '../../../App';
// import {receiptContext} from '../../../App';
import CartItem from '../../components/CartItem';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';

 function CartScreen(){

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;

  // const {Receipt} = React.useContext(receiptContext);
  // const [receipts, setReceipts] = Receipt;

  var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity, 0);


  // const [billNo, setBillNo] = React.useState();
  // const [CashierNo, setCashierNo] = React.useState();
  // const [discountPrice, setDiscountPrice] = React.useState();
  // const [product, setProduct] = React.useState();
  // const [Quantity, setQuantity] = React.useState();
  // const [totalAmount, setTotalAmount] = React.useState(totalPrice);
  // const [vatNo, setVatNo] = React.useState();


  // const onCheckout = () => {

  // const formData = new FormData();
  // const fileField = document.querySelector('input[type="file"]');
  
  // formData.append('billNo', billNo);
  // formData.append('CashierNo', CashierNo);
  // formData.append('product', product);
  // formData.append('Quantity', Quantity);
  // formData.append('discountPrice', discountPrice);
  // formData.append('totalAmount', totalAmount);
  // formData.append('vatNo', vatNo);

  
  // fetch('https://example.com/profile/avatar', {
  //   method:'POST',
  //   body: formData
  // })
  // .then(response => response.json())
  // .then( result => {
  //   console.log('Success:', result);
  // })
  // .catch( error => {
  //   console.error('Error:', error);
  // });
  // }

const onCheckout = () => {
  console.warn('checked out successfully');
  setCartItems([]);
}






  var cart;

  if(cartItems.length > 0) {
    cart = <View style={{flex:1}}>
    <FlatList
     data={cartItems}
     renderItem={({item}) => <CartItem  cartItems={cartItems} item={item}/>}
     keyExtractor={(item, index) => item.id }
     contentContainerStyle={{paddingBottom:10}}
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



 



 