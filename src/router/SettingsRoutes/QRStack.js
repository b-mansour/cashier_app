import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import QRHome from '../../screens/QRScreens/QRHome';
// import PrinterCreate from '../../screens/CategoryScreens/CategoryCreate';
// import PrinterEdit from '../../screens/CategoryScreens/CategoryEdit';
 
 


const Stack = createStackNavigator();

export default function QRStack() {
    return (

            <Stack.Navigator>

              <Stack.Screen name="QRHome" component={QRHome}/>
              {/* <Stack.Screen name="CategoryCreate" component={CategoryCreate}/>
              <Stack.Screen name="CategoryEdit" component={CategoryEdit} /> */}
               


            </Stack.Navigator>
        
    )
};
