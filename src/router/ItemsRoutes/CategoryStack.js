import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryHome from '../../screens/CategoryScreens/CategoryHome';
import CategoryCreate from '../../screens/CategoryScreens/CategoryCreate';
import CategoryEdit from '../../screens/CategoryScreens/CategoryEdit';
import AddButton from '../../components/AddButton';
import {colors} from '../../assets/Colors';
 


const Stack = createStackNavigator();

export default function CategorytStack({navigation}) {






    return (
            <Stack.Navigator screenOptions={{ 
              cardStyle: { backgroundColor:'#e1e1e6'},
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: '#fff',
               headerTitleAlign:'center'
               }} 
               
               >

              <Stack.Screen name="CategoryHome" 
                options={{
                headerRight: () => (<AddButton routeName = "CategoryCreate"  navigation={navigation}/>),
                title:'الفئات'
               }}
                component={CategoryHome}/>
              <Stack.Screen name="CategoryCreate" options={{title:'اضافة فئة جديدة'}} component={CategoryCreate}/>
              <Stack.Screen name="CategoryEdit"  options={{title:'تعديل الفئة'}} component={CategoryEdit}/>
            </Stack.Navigator>
     
        
    )
};
