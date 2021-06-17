import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../../screens/CartScreen/cart';
import CartItemDetails from './../../screens/CartScreen/CartItemDetails';
import {Pressable, Text} from 'react-native';
import AntDesign  from  'react-native-vector-icons/AntDesign';
import {colors} from '../../assets/Colors';
 

 


const Stack = createStackNavigator();

export default function CartStack({navigation}) {
    return (


        
    <Stack.Navigator   screenOptions={{ 
      cardStyle: { backgroundColor:'#e1e1e6'},
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
       headerTitleAlign:'center'
       }}  >
      <Stack.Screen name="CartScreen"  options={{  
        headerTintColor: '#fff',
        title:'السلة',
        headerLeft: () =>  <Pressable onPress={() => navigation.goBack()}> 
        <AntDesign style={{fontSize:25, color:'#fff', marginLeft:10}} name="arrowleft"></AntDesign>
        </Pressable>
         
        
  
       }} component={CartScreen}/>
      <Stack.Screen name="CartItemDetails"   component={CartItemDetails}/>
       
    </Stack.Navigator>
        
    )
}
