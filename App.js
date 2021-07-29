import  React, {useEffect} from 'react';
import DrawerNav from './src/router/DrawerNav/DrawerNav';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from './src/screens/loginScreen/login';
import FlashMessage from "react-native-flash-message";

const Stack = createStackNavigator();
 

 

const discountTypes = ['amount','percentage'];

  export const productContext = React.createContext();
  export const categoryContext = React.createContext();
  export const cartContext = React.createContext();
  export const discountContext = React.createContext();
  export const barcodeContext = React.createContext();
  export const receiptContext = React.createContext();
  export const userContext = React.createContext();
  export const cashierContext = React.createContext();
  export const shopContext = React.createContext();
 
   

function App() {

    const [users, setUsers] = React.useState();
    const [categories, setCategories] = React.useState();
    const [products, setProducts] = React.useState([]); 
    const [discounts, setDiscounts] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([]);
    const [receipts, setReceipts] = React.useState([]);
    const [barcode, setBarcode] = React.useState('');

    const [cashierNo, setCashierNo] = React.useState('');
    const [userPassword, setUserPassword] = React.useState('');
    const [shopId, setShopId] = React.useState('');



 
  
  

async function getDiscounts() {
  await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetDiscounts/1')
        .then((response) => response.json())
        .then((json) => setDiscounts(json.response))
        .catch((error) => console.error('Error:' + error))
      }

// async function getProducts() {
//   await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
//   .then((response) => response.json())
//   .then((json) => setProducts(json.response.productsList))
//   .catch((error) => console.error(error))
// }

async function getProducts() {
  let isMounted = true;               
  fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
  .then((response) => response.json())
  .then((json) => { if(isMounted) setProducts(json.response.productsList)})
  .catch((error) => console.error('Error:' + error))
  return () => { isMounted = false }; 
}

// async function getCategories() {
//   await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
//   .then((response) => response.json())
//   .then((json) => setCategories(json.response.sectionList))
//   .catch((error) => console.error(error))
// }

async function getCategories() {
  let isMounted = true;               
  fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetProductsBySections/1')
  .then((response) => response.json())
  .then((json) => { if(isMounted) setCategories(json.response.sectionList)})
  .catch((error) => console.error('Error:' + error))
  return () => { isMounted = false }; 
}

    useEffect(() => {
      getProducts();
      getCategories();
      getDiscounts();
    },[]);
  

  return (
    <cashierContext.Provider value={{cashier:[cashierNo, setCashierNo]}}>
      <shopContext.Provider value={{ shop :[shopId, setShopId]}}>
        <productContext.Provider value={{product:[products ,setProducts]}}> 
          <categoryContext.Provider value={{ category:[ categories ,setCategories]}}> 
             <discountContext.Provider value={{discount:[discounts, setDiscounts]}}> 
               <cartContext.Provider value={{Cart:[cartItems, setCartItems]}}>
                  <receiptContext.Provider value = {{Receipt:[receipts, setReceipts]}}> 
                       <barcodeContext.Provider value={{Barcode:[barcode, setBarcode]}}>
      



       <NavigationContainer>
      <Stack.Navigator>
        {/* SplashScreen which will come once for 5 Seconds */}
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        /> */}
        {/* Auth Navigator which includer Login Signup will come once */}
        <Stack.Screen
          name="Auth"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
        <Stack.Screen
          name="DrawerNavigationRoutes"
          component={DrawerNav}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    <FlashMessage  position="top" /> 
        {/* <DrawerNav/> */}

    </barcodeContext.Provider>
    </receiptContext.Provider>
   </cartContext.Provider>
    </discountContext.Provider>
    </categoryContext.Provider>
    </productContext.Provider>
    </shopContext.Provider>
    </cashierContext.Provider>

   
  );
}

export default App;






























 

















