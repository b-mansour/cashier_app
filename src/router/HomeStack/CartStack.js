import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/CartScreen/cart';
import CartItemDetails from './../../screens/CartScreen/CartItemDetails';

 


const Stack = createStackNavigator();

export default function CartStack({navigation}) {
    return (


        
    <Stack.Navigator   >
      <Stack.Screen name="CartScreen"  options={{ headerStyle: {
        backgroundColor: '#12b520',
        }, 
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        title:'السلة'
  
       }} component={CartScreen}/>
      <Stack.Screen name="CartItemDetails"   component={CartItemDetails}/>
    </Stack.Navigator>
        
    )
}
