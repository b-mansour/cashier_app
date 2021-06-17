import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReceiptHome from '../screens/ReceiptScreen/ReceiptHome';
import Menu from '../components/Menu';
import ReceiptDetails from './../screens/ReceiptScreen/ReceiptDetails';
import {colors} from '../assets/Colors'
 
 


const Stack = createStackNavigator();

export default function ReceiptStack({navigation}) {
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
                 title:'الفواتير'
                 }} 
                 component={ReceiptHome} />
                <Stack.Screen name="ReceiptDetails" component={ReceiptDetails}/>
            </Stack.Navigator>
        
    )
};
