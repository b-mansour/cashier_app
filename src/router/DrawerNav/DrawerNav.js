import   React, {useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer , DarkTheme } from '@react-navigation/native';
import SettingsStack from './../SettingsRoutes/SettingsStack';
import HomeStack from './../HomeStack/HomeStack';
import ReceiptStack from '../ReceiptStack/ReceiptStack';
import ItemsStack from './../ItemsRoutes/ItemsStack';
import { DrawerContent } from '../../screens/DrawerContent';
import Entypo from  'react-native-vector-icons/Entypo';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5';
import Feather  from 'react-native-vector-icons/Feather';
import  AntDesign  from 'react-native-vector-icons/AntDesign';
import Profile from './../ProfileStack/Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';



const Drawer = createDrawerNavigator();
export default function DrawerNav({navigation}) {

  const [cashierNo, setCashierNo] = React.useState('');
  const [userPassword, setUserPassword] = React.useState('');



  useEffect(() => {
   getData();
}, []);

const getData = () => {
   try {
       AsyncStorage.getItem('CashierData')
           .then(value => {
               if (value != null) {
                   let  cashier = JSON.parse(value);
                   setCashierNo(cashier.cashierNo);
                   setUserPassword(cashier.userPassword);
               } else if(value == null){
                  navigation.navigate('Auth')
               }
           })
   } catch (error) {
       console.log(error);
   }
}




    return (
      //   <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home"  drawerContent={props => <DrawerContent {...props} />}>
  
          <Drawer.Screen name="Home" 
             options={{
              title: 'الرئيسية',
              drawerIcon: ({focused, size}) => (
                 <Entypo
                    name="home"
                    size={size}
                    color={focused ? '#7cc' : '#ccc'}
                 />
              ),
           }}
           component={HomeStack}/>
  
          <Drawer.Screen name="Receipt" 
          options={{
            title:'الفواتير',
            drawerIcon: ({focused, size}) => (
               <FontAwesome5
                  name="money-bill"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
               />
            ),
         }}
           component={ReceiptStack}/>
  
          <Drawer.Screen name="Item" 
           options={{
            title:'المنتجات',
            drawerIcon: ({focused, size}) => (
               <FontAwesome5
                  name="sitemap"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
               />
            ),
         }}
          component={ItemsStack}/>
  
          {/* <Drawer.Screen name="Cart" 
           options={{
            title:'السلة',
            drawerIcon: ({focused, size}) => (
               <Entypo
                  name="shopping-cart"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
               />
            ),
         }}

          component={CartStack}/> */}

<Drawer.Screen name="Profile"
           options={{
            title:'الملف الشخصي',
            drawerIcon: ({focused, size}) => (
               <AntDesign
                  name="user"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
               />
            ),
         }}
        component={Profile}/>
  
  
          <Drawer.Screen name="Settings"
           options={{
            title:'الضبط',
            drawerIcon: ({focused, size}) => (
               <Feather
                  name="settings"
                  size={size}
                  color={focused ? '#7cc' : '#ccc'}
               />
            ),
         }}
        component={SettingsStack}/>
  
        </Drawer.Navigator>

        
      // </NavigationContainer>
    )
}
