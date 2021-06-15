import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ReceiptHome from '../screens/ReceiptScreen/ReceiptHome';
import Menu from '../components/Menu';
import ReceiptDetails from './../screens/ReceiptScreen/ReceiptDetails';
 
 


const Stack = createStackNavigator();

export default function ReceiptStack({navigation}) {
    return (

            <Stack.Navigator screenOptions={{headerTitleAlign:'center'}}>

              <Stack.Screen name="ReceiptHome"  options={{ 
                headerStyle: {
                backgroundColor: '#12b520',
              }, 
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
