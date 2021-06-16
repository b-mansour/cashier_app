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
    <Stack.Navigator  screenOptions={{ 
      cardStyle: { backgroundColor:'#e1e1e6'},
      headerStyle: {
        backgroundColor: '#b8b4b4',
      },
      headerTintColor: '#fff',
       headerTitleAlign:'center'
       }}  >

      <Stack.Screen name="Settings"
      options={{ 
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