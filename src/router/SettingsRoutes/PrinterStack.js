import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrinterHome from '../../screens/PrinterScreens/PrinterHome';
// import PrinterCreate from '../../screens/CategoryScreens/CategoryCreate';
// import PrinterEdit from '../../screens/CategoryScreens/CategoryEdit';
 
 


const Stack = createStackNavigator();

export default function PrintertStack() {
    return (

            <Stack.Navigator>

              <Stack.Screen name="PrinterHome" component={PrinterHome}/>
              {/* <Stack.Screen name="CategoryCreate" component={CategoryCreate}/>
              <Stack.Screen name="CategoryEdit" component={CategoryEdit} /> */}
               


            </Stack.Navigator>
        
    )
};
