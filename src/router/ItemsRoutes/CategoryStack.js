import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryHome from '../../screens/CategoryScreens/CategoryHome';
import CategoryCreate from '../../screens/CategoryScreens/CategoryCreate';
import CategoryEdit from '../../screens/CategoryScreens/CategoryEdit';
 
 


const Stack = createStackNavigator();

export default function CategorytStack() {
    return (

            <Stack.Navigator>

              <Stack.Screen name="CategoryHome" component={CategoryHome}/>
              <Stack.Screen name="CategoryCreate" component={CategoryCreate}/>
              <Stack.Screen name="CategoryEdit" component={CategoryEdit} />
              {/* <Stack.Screen name="Settings" component={Settings} /> */}


            </Stack.Navigator>
        
    )
};
