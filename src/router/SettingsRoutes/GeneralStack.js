import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GeneralHome from '../../screens/GeneralScreens/GeneralHome';
// import PrinterCreate from '../../screens/CategoryScreens/CategoryCreate';
// import PrinterEdit from '../../screens/CategoryScreens/CategoryEdit';
 
 


const Stack = createStackNavigator();

export default function GeneraltStack() {
    return (

            <Stack.Navigator>

              <Stack.Screen name="GeneralHome" component={GeneralHome}/>
              {/* <Stack.Screen name="CategoryCreate" component={CategoryCreate}/>
              <Stack.Screen name="CategoryEdit" component={CategoryEdit} /> */}
               


            </Stack.Navigator>
        
    )
};
