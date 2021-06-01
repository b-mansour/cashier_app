import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductHome from '../../screens/productScreens/ProductHome';
import ProductCreate from '../../screens/productScreens/ProductCreate';
import ProductEdit from '../../screens/productScreens/ProductEdit';

 


const Stack = createStackNavigator();

export default function ProductStack() {
    return (


        
    <Stack.Navigator>
      <Stack.Screen name="ProductHome" component={ProductHome}/>
      {/* <Stack.Screen name="ProductCreate" component={ProductCreate} /> */}
      <Stack.Screen name='اضافة منتج جديد'  component={ProductCreate} />
      <Stack.Screen name="ProductEdit" component={ProductEdit} />
    </Stack.Navigator>
        
    )
}
