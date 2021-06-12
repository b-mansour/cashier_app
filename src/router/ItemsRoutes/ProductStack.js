import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductHome from '../../screens/productScreens/ProductHome';
import ProductCreate from '../../screens/productScreens/ProductCreate';
import ProductEdit from '../../screens/productScreens/ProductEdit';
import BarcodeScan from '../../screens/productScreens/BarcodeScanner';
import AddButton from '../../components/AddButton';

 


const Stack = createStackNavigator();

export default function ProductStack({navigation}) {
    return (


        
    <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>
      <Stack.Screen name="ProductHome" options={{
       headerRight: () => (<AddButton routeName ='ProductCreate'  navigation={navigation}/>),
       title:'المنتجات'
      }}

       component={ProductHome}/>
       
      <Stack.Screen name='ProductCreate' options={{title:'اضافة منتج جديد'}}  component={ProductCreate} />
      <Stack.Screen name="ProductEdit" options={{title:'تعديل المنتج'}} component={ProductEdit} />
      <Stack.Screen name="BarcodeScanner" component={BarcodeScan}/>
    </Stack.Navigator>
        
    )
}
