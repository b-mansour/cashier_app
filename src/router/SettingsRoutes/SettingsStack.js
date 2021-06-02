import React from 'react';
import { Button, View, Text , FlatList, Pressable, StyleSheet } from 'react-native';
import ProductStack from '../ItemsRoutes/ProductStack';
import CategoryStack from '../ItemsRoutes/CategoryStack';
import  DiscountStack from '../ItemsRoutes/DiscountStack';
import  Settings  from '../../screens/settingsScreen/settings';
 


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#12b520'}

    }} >
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen options={{headerShown:false}} name="PrintersStack" component={PrintersStack}/>
      <Stack.Screen options={{headerShown:false}} name="GeneralStack" component={GeneralStack}/>
    </Stack.Navigator>
  );
}

export default  SettingsStack;