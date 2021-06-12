import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import  PrinterStack from './PrinterStack';
import  QRStack from './QRStack';
import  GeneralStack from './QRStack';
import Settings from '../../screens/settingsScreen/settings'
import Menu from './../../components/Menu';
 
 


 

const Stack = createStackNavigator();


function SettingsStack({navigation}) {
  return (
    <Stack.Navigator screenOptions={{ headerStyle:{backgroundColor:'#12b520'}

    }} >
      <Stack.Screen name="Settings"
      options={{ headerStyle: {
        backgroundColor: '#12b520',
        }, 
        headerTintColor: '#fff',
        headerTitleAlign:'center',
        headerLeft: () => ( 
          <Menu navigation={navigation} /> 
        ),
        title:'الضبط'
  
       }}  component={Settings}/>
      <Stack.Screen options={{headerShown:false}} name="Printer" component={PrinterStack}/>
      <Stack.Screen options={{headerShown:false}} name="QR" component={QRStack}/>
      <Stack.Screen options={{headerShown:false}} name="General" component={GeneralStack}/>
       
    </Stack.Navigator>
  );
}

export default  SettingsStack;