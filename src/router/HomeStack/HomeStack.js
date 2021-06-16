import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../screens/HomeScreen/Home';
import CartScreen from '../../screens/CartScreen/cart';
import CartStack from './CartStack';
import BarcodeScanner from './../../screens/HomeScreen/BarcodeScanner';

 


const Stack = createStackNavigator();

export default function HomeStack() {
    return (


        
    <Stack.Navigator   screenOptions={{ cardStyle: { backgroundColor:'#e1e1e6'},
    headerStyle: {
      backgroundColor: '#b8b4b4',
    }
    }}>
      <Stack.Screen name="HomeScreen" options={{headerShown:false}} component={HomeScreen}/> 
      <Stack.Screen name="BarcodeScanner" component={BarcodeScanner}/>
      <Stack.Screen name="CartStack" options={{headerShown:false}} component={CartStack}/>
    </Stack.Navigator>
        
    )
}
