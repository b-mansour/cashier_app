import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  PrinterStack from './PrinterStack';
import  QRStack from './QRStack';
import  GeneralStack from './QRStack';
import Settings from '../../screens/settingsScreen/settings'
 
 


 

const Stack = createStackNavigator();


function SettingsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#12b520'}

    }} >
      <Stack.Screen name="Settings" component={Settings}/>
      <Stack.Screen options={{headerShown:false}} name="Printer" component={PrinterStack}/>
      <Stack.Screen options={{headerShown:false}} name="QR" component={QRStack}/>
      <Stack.Screen options={{headerShown:false}} name="General" component={GeneralStack}/>
       
    </Stack.Navigator>
  );
}

export default  SettingsStack;