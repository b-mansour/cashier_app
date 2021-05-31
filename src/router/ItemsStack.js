import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet } from 'react-native';
import ProductStack from './ProductStack';
import CategoryStack from './ProductStack';
import  DiscountStack from './DiscountStack';
import  ItemsButton  from './ItemsButton';
 


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ItemsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Items" component={ItemsButton}/>
      <Stack.Screen name="Product" component={ProductStack} />
      <Stack.Screen name="Category" component={CategoryStack} />
      <Stack.Screen name="Discounts" component={DiscountStack} />
    </Stack.Navigator>
  );
}

export default ItemsStack;