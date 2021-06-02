import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/Home';
import CartScreen from '../../screens/CartScreen/cart';

 


const Stack = createStackNavigator();

export default function HomeStack() {
    return (


        
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen}/>
      <Stack.Screen name="CartScreen" component={CartScreen} />
    </Stack.Navigator>
        
    )
}
