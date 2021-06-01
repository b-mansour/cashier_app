import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet } from 'react-native';
import ProductStack from './ProductStack';
import CategoryStack from './CategoryStack';
import  DiscountStack from './DiscountStack';
import  ItemsButton  from './ItemsButton';
 


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ItemsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#12b520'}

    }} >
      <Stack.Screen name="Items" component={ItemsButton}/>
      <Stack.Screen options={{headerShown:false}} name="Product" component={ProductStack}/>
      <Stack.Screen options={{headerShown:false}} name="Category" component={CategoryStack}/>
      <Stack.Screen options={{headerShown:false}} name="Discounts" component={DiscountStack}/>
    </Stack.Navigator>
  );
}

export default ItemsStack;