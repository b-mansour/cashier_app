import React from 'react';
import ProductStack from './ProductStack';
import CategoryStack from './CategoryStack';
import  DiscountStack from './DiscountStack';
import  Items  from '../../screens/ItemsScreen/Items';
import Menu from '../../components/Menu';
 


import { createStackNavigator } from '@react-navigation/stack';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();


function ItemsStack({navigation}) {
  return (
    <Stack.Navigator  >
      <Stack.Screen options={{ headerStyle: {
      backgroundColor: '#12b520',
      }, 
      headerTintColor: '#fff',
      headerTitleAlign:'center',
      headerLeft: () => ( 
        <Menu  navigation={navigation} /> 
      ),
      // title:'my items'

     }}  
     name="Items" component={Items}/>



    <Stack.Screen options={{headerShown:false}} name="Product" component={ProductStack}/>
      <Stack.Screen options={{headerShown:false}} name="Category" component={CategoryStack}/>
      <Stack.Screen options={{headerShown:false}} name="Discounts" component={DiscountStack}/>
    </Stack.Navigator>
  );
}

export default ItemsStack;



// options={{
         
//   headerLeft: () => (
//     <Button
//       onPress={() => console.warn('This is a button!')}
//       title="Info"
//       color="#fff"
//     />
//   ),
// }}