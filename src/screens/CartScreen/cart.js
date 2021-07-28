import React, {useEffect} from 'react';
import { View, Text, FlatList, StyleSheet,Button,Pressable } from 'react-native';
import {cartContext} from '../../../App';
import CartItem from '../../components/CartItem';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import {cashierContext} from '../../../App';
import {
  BLEPrinter,
} from "react-native-thermal-receipt-printer";
 

 function CartScreen(){

  const {Cart} = React.useContext(cartContext);
  const [ cartItems, setCartItems] = Cart;
  const {cashier} = React.useContext(cashierContext);
  const [ cashierNo, setCashierNo] = cashier;

   
  var totalPrice =  cartItems.reduce((accumulator, currentvalue) => accumulator + currentvalue.UnitPrice * currentvalue.Quantity, 0);
  var tax = (totalPrice/100) * 15
  var totalPricePlusTax = totalPrice + tax;

   
  const onCheckout = () => {

    // BLEPrinter.printText("<C>sample text</C>\n")

    BLEPrinter.printText(response=> {
      console.log('dddddd',response)
    })

    // BLEPrinter.printText(
    //                     `<B>Shop Name</B>\n
    //                     <C>:${totalPrice}  </C>  <C> :234343</C>\n
    //                     <C>:${cashierNo}</C>`

                        
    //                     )
   


    const formData = {
                      "VatNo" : "2354", 
                      "Location" : "الشوقية", 
                      "Price" : totalPrice,
                      "Vat" : tax, 
                      "TotalPrice": totalPricePlusTax,
                      "IsPrinted" : "True", 
                      "IsPaid" : "True", 
                      "Invoice" : "", 
                      "CashierNo" : cashierNo,
                      "ShopId" : "1", 
                      "ProductDetails" : cartItems
                      }
    
       
    fetch('https://cashierapi.ibtikar-soft.sa/api/Bills/AddBill', {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type':'application/json'
       },
       body : JSON.stringify(formData)
      
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      // setCartItems([]);
      // navigation.goBack();
    })
    .catch(error => {
      console.error('Error:', error);
    });
    }

    

    useEffect(() => { 
      console.log(cartItems)
    },[cartItems])

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
    <Button styles={styles.button} onPress={onCheckout} title='اكمال عملية الدفع'/> 
    <Pressable  onPress={onCheckout}><Text>اكمال عملية الدفع</Text></Pressable>  
    </View>
    </View>
  } else {
    cart = <View style={{alignItems:'center', flex:1, justifyContent:'center'}}>
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



 



 