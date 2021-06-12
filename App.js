import   React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ReceiptStack from './src/router/ReceiptStack';
import ItemsStack from './src/router/ItemsRoutes/ItemsStack';
import SettingsStack from './src/router/SettingsRoutes/SettingsStack';
import HomeStack from './src/router/HomeStack/HomeStack';
import {DrawerContent} from './src/screens/DrawerContent';
import CartStack from './src/router/HomeStack/CartStack';
import Entypo from  'react-native-vector-icons/Entypo';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5';
import Feather  from 'react-native-vector-icons/Feather';

const Drawer = createDrawerNavigator();

  export const productContext = React.createContext();
  export const categoryContext = React.createContext();
  export const cartContext = React.createContext([]);
  export const discountContext = React.createContext();

function App() {

   const discountsData = [
    {
      id: 1,
      name: "dscount1",
      value: 10
       
  },

  {
      id: 2,
      name: "discount2",
      value: 20
      
   },

  {
      id: 3,
      name: "discount3",
      value: 30
  },
];


  const categoryData = [
    {
        id: 1,
        name: "الخضار",
        image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         
    },
  
    {
        id: 2,
        name: "الفواكه",
        image: 'https://images.unsplash.com/photo-1474564862106-1f23d10b9d72?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGZydWl0c3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        
     },
    {
        id: 3,
        name: "الاجبان",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         
         
    },
    {
        id: 4,
        name: "المشروبات",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         
    },
    {
        id: 5,
        name: "المخبوزات",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
        
    },
    {
        id: 6,
        name: "المثلجات",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
         
         
    },
    {
        id: 7,
        name: "الخردوات",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        
    },
    {
        id: 8,
        name: "ادوات النظافة",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
         
    },
    {
        id: 9,
        name: "الحلويات",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
         
    },
    {
        id: 10,
        name: "تشيبس",
        image:'https://images.unsplash.com/photo-1568909344668-6f14a07b56a0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8anVpY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        
    },
  
  ];

  const productsData =  [
    {
      id: '1',
      name: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 20.98,
      cost:15,
      categories: [5, 7],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '2',
      name: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 32.98,
      cost:20,
      categories: [2, 4, 6],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '3',
      name: "shoes",
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 46.9,
      cost:20,
      categories: [2, 4, 5],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '4',
      name: "nike shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 99.98,
      cost:70,
      categories: [2, 5, 6],
      quantity: 1,
      barcode:'123456789'
    },
    {
      id: '5',
      name: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 32.98,
      cost:20,
      categories: [2, 4, 6],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '6',
      name: "puma shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 99.98,
      cost: 16,
      categories: [1,5,6],
      quantity: 1 ,
      barcode:'123456789'
    },
    {
      id: '7',
      name: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 20.98,
      cost: 16,
      categories: [5, 7],
      quantity: 1 ,
      barcode:'123456789'
    },
  ];




    const [categories, setCategories] = React.useState(categoryData);
    const [products, setProducts] = React.useState(productsData); 
    const [discounts, setDiscounts] = React.useState(discountsData);
    const [cartItems, setCartItems] = React.useState([]);



  return (
    <productContext.Provider value={{product:[products ,setProducts]}}> 
     <categoryContext.Provider value={{ category:[ categories , setCategories]}}> 
       <discountContext.Provider value={{discount:[discounts, setDiscounts]}}> 
       <cartContext.Provider value={{Cart:[cartItems, setCartItems]}}> 
        

    <NavigationContainer>
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
    </NavigationContainer>

   </cartContext.Provider>
    </discountContext.Provider>
    </categoryContext.Provider>
    </productContext.Provider>
  );
}

export default App;