import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryHome from '../../screens/CategoryScreens/CategoryHome';
import CategoryCreate from '../../screens/CategoryScreens/CategoryCreate';
import CategoryEdit from '../../screens/CategoryScreens/CategoryEdit';
import AddButton from '../../components/AddButton';
 
 


const Stack = createStackNavigator();

export default function CategorytStack({navigation}) {
    return (

            <Stack.Navigator  screenOptions={{headerTitleAlign:'center'}} >

              <Stack.Screen name="CategoryHome" 
                options={{
                headerRight: () => (<AddButton routeName = "CategoryCreate"  navigation={navigation}/>),
               }}
                component={CategoryHome}/>
              <Stack.Screen name="CategoryCreate" component={CategoryCreate}/>
              <Stack.Screen name="CategoryEdit" component={CategoryEdit} />
              
            </Stack.Navigator>
        
    )
};
