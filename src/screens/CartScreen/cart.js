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
  var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.UnitPrice * currentvalue.Quantity, 0);
  // var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.price * currentvalue.quantity, 0);
  // var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.price, 0);

   
  const onCheckout = () => {

    const formData = {
                      "VatNo" : "2354", 
                      "Location" : "الشوقية", 
                      "Price" : ".50", 
                      "Vat" : ".075", 
                      "TotalPrice": totalPrice,
                      "IsPrinted" : "True", 
                      "IsPaid" : "True", 
                      "Invoice" : "", 
                      "CashierNo" : "209889",
                      "ShopId" : "1", 
                      "ProductDetails" : cartItems
                    }
    
          // formData.append('name', name);
         // formData.append('price', price);
        // formData.append('cost', cost);
       // formData.append('image', image);
      // formData.append('barcode', barcode);
    
    fetch('https://cashierapi.ibtikar-soft.sa/api/Bills/AddBill', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type':'application/json'
       },
       body : JSON.stringify(formData)
      // body: formData
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);

      
      // navigation.goBack();
    })
    .catch(error => {
      console.error('Error:', error);
    });
    }

// const onCheckout = () => {
//   console.warn('checked out successfully');
//   setCartItems([]);
// }

  var cart;

  if(cartItems.length > 0) {
    cart = <View style={{flex:1, alignItems:'center'}}>
    <FlatList
     data={cartItems}
     renderItem={({item}) => <CartItem  cartItems={cartItems} item={item}/>}
     keyExtractor={(item, index) => item.id }
     contentContainerStyle={{paddingBottom:10}}

     numColumns={3}
     showsVerticalScrollIndicator={false}
     ListFooterComponent={<View />}
     ListFooterComponentStyle={{height:100}}
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



 



 