import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 
import Home from './../../../screens/ProductDiscountScreens/Home';
 


const Stack = createStackNavigator();

 function ProductDiscount() {
      return (

        
            <Stack.Navigator screenOptions={{ 
              headerStyle: {
              backgroundColor: '#12b520',
              }, 
               headerTintColor:'#fff', 
               headerTitleAlign:'center'
               }}>
              <Stack.Screen name = "DiscountHome" options={{title:'اضافة خصم'}}  component = {Home}/>
              {/* <Stack.Screen name="DiscountCreate" component={DiscountCreate}/>
              <Stack.Screen name="DiscountEdit" component={DiscountEdit}/> */}
            </Stack.Navigator>
        
        )
};

export default  ProductDiscount;
