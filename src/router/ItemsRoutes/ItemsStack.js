import React from 'react';
import ProductStack from './ProductStack';
import CategoryStack from './CategoryStack';
import  Items  from '../../screens/ItemsScreen/Items';
import Menu from '../../components/Menu';
import { createStackNavigator } from '@react-navigation/stack';
import Discount from './DiscountRoutes/Discount';
import ProductDiscount from './DiscountRoutes/ProductDiscount';
import {colors} from '../../assets/Colors'

const Stack = createStackNavigator();

function ItemsStack({navigation}) {
  return (
    <Stack.Navigator >
      <Stack.Screen options={{
      cardStyle: { backgroundColor:'#e1e1e6'},
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerLeft: () => ( 
        <Menu  navigation={navigation} /> 
      ),
      title:'المنتجات'
     }}  
     name = "Items" component={Items}/>
    <Stack.Screen options={{headerShown:false}} name="Product" component={ProductStack}/>
      <Stack.Screen options={{headerShown:false}} name="Category" component={CategoryStack}/>
      <Stack.Screen options={{headerShown:false}} name="Discounts" component={Discount}/>
      <Stack.Screen options={{headerShown:false}} name="ProductDiscount" component={ProductDiscount}/>
    </Stack.Navigator>
  );
}

export default ItemsStack;



 