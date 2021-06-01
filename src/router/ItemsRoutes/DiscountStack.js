import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscountHome from '../../screens/DiscountScreens/DiscountHome'
 


const Stack = createStackNavigator();

 function DiscountStack() {
    return (

        
            <Stack.Navigator>

              <Stack.Screen name="DiscountHome" component={DiscountHome}/>
              {/* <Stack.Screen name="Notifications" component={Notifications} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Settings" component={Settings} /> */}


            </Stack.Navigator>
        
    )
};

export default  DiscountStack;
