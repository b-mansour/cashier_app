import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './../../../screens/ProductDiscountScreens/Home';
import {colors} from '../../../assets/Colors'
 


const Stack = createStackNavigator();

 function ProductDiscount() {
      return (

        
            <Stack.Navigator screenOptions={{ 
              cardStyle: { backgroundColor:'#e1e1e6'},
              headerStyle: {
                backgroundColor:colors.primary,
              },
              headerTintColor: '#fff',
               headerTitleAlign:'center'
               }} 
               
               >
              <Stack.Screen name = "DiscountHome" options={{title:'اضافة خصم'}}  component = {Home}/>
              {/* <Stack.Screen name="DiscountCreate" component={DiscountCreate}/>
              <Stack.Screen name="DiscountEdit" component={DiscountEdit}/> */}
            </Stack.Navigator>
        
        )
};

export default  ProductDiscount;
