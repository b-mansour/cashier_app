import React from 'react';
import ProductStack from './ProductStack';
import CategoryStack from './CategoryStack';
import  DiscountStack from './DiscountStack';
import  Items  from '../../screens/ItemsScreen/Items';
 


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function ItemsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#12b520'}

    }} >
      <Stack.Screen name="Items" component={Items}/>
      <Stack.Screen options={{headerShown:false}} name="Product" component={ProductStack}/>
      <Stack.Screen options={{headerShown:false}} name="Category" component={CategoryStack}/>
      <Stack.Screen options={{headerShown:false}} name="Discounts" component={DiscountStack}/>
    </Stack.Navigator>
  );
}

export default ItemsStack;