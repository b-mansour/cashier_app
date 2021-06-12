import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/CartScreen/cart';
import CartItemDetails from './../../screens/CartScreen/CartItemDetails';
import {Pressable, Text} from 'react-native';
import AntDesign  from  'react-native-vector-icons/AntDesign';
import { color } from 'react-native-reanimated';
 

 


const Stack = createStackNavigator();

export default function CartStack({navigation}) {
    return (


        
    <Stack.Navigator   >
      <Stack.Screen name="CartScreen"  options={{ headerStyle: {
        backgroundColor: '#12b520',
        }, 
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        title:'السلة',
        headerLeft: () =>  <Pressable onPress={() => navigation.goBack()}> 
        <AntDesign style={{fontSize:25, color:'#fff', marginLeft:10}} name="arrowleft"></AntDesign>
        </Pressable>
         
        
  
       }} component={CartScreen}/>
      <Stack.Screen name="CartItemDetails"   component={CartItemDetails}/>
       
    </Stack.Navigator>
        
    )
}
