import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
 
import {colors} from '../../assets/Colors'
import ProfileHome from './../../screens/ProfileScreens/ProfileHome';
import Menu from '../../components/Menu'
 
 


const Stack = createStackNavigator();

export default function ProfileStack({navigation}) {
    return (

            <Stack.Navigator  screenOptions={{ 
              cardStyle: { backgroundColor:'#e1e1e6'},
              headerStyle: {
                backgroundColor: colors.primary,
              },
              headerTintColor: '#fff',
               headerTitleAlign:'center'
               }} >

              <Stack.Screen name="ReceiptHome"  options={{ 
                headerTintColor: '#fff',
                headerTitleAlign:'center',
                headerLeft: () => ( 
                 <Menu navigation={navigation}/> 
               ),
                 title:'الصفحة الشخصية'
                 }} 
                 component={ProfileHome} />
                {/* <Stack.Screen name="ReceiptDetails" component={ReceiptDetails}/> */}
            </Stack.Navigator>
        
    )
};
