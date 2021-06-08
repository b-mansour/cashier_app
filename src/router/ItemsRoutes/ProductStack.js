import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductHome from '../../screens/productScreens/ProductHome';
import ProductCreate from '../../screens/productScreens/ProductCreate';
import ProductEdit from '../../screens/productScreens/ProductEdit';
import ProductCamera from '../../screens/productScreens/ProductCamera';
import AddButton from '../../components/AddButton';

 


const Stack = createStackNavigator();

export default function ProductStack({navigation}) {
    return (


        
    <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
      <Stack.Screen name="ProductHome" options={{
       headerRight: () => (<AddButton routeName ='ProductCreate'  navigation={navigation}/>),
      }}
       component={ProductHome}/>
      {/* <Stack.Screen name="ProductCreate" component={ProductCreate} /> */}
      <Stack.Screen name='ProductCreate'  component={ProductCreate} />
      <Stack.Screen name="ProductEdit" component={ProductEdit} />
      <Stack.Screen name="ProductCamera" component={ProductCamera}/>
    </Stack.Navigator>
        
    )
}
