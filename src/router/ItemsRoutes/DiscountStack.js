import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscountHome from '../../screens/DiscountScreens/DiscountHome';
import DiscountCreate from '../../screens/DiscountScreens/DiscountCreate';
import DiscountEdit from '../../screens/DiscountScreens/DiscountEdit';
 


const Stack = createStackNavigator();

 function DiscountStack() {
    return (

        
            <Stack.Navigator>

              <Stack.Screen name = "DiscountHome" component = {DiscountHome}/>
              <Stack.Screen name="DiscountCreate" component={DiscountCreate} />
              <Stack.Screen name="DiscountEdit" component={DiscountEdit} />


            </Stack.Navigator>
        
    )
};

export default  DiscountStack;
