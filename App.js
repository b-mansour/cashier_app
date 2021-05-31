import   React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen/Home';
import ReceiptScreen from './src/screens/ReceiptScreen/Receipt';
import  CartScreen from './src/screens//CartScreen/cart';
import ItemsScreen from './src/screens/ItemsScreen/Item';
import ItemsStack from './src/router/ItemsStack';
import settingsScreen from './src/screens/settingsScreen/settings';

const Drawer = createDrawerNavigator();

  export const productContext = React.createContext();
  export const categoryContext = React.createContext();
  export const receiptContext = React.createContext();

function App() {




   



  const categoryData = [
    {
        id: 1,
        name: "shoes",
         
    },
  
    {
        id: 2,
        name: "men",
        
     },
    {
        id: 3,
        name: "women",
         
         
    },
    {
        id: 4,
        name: "children",
         
    },
    {
        id: 5,
        name: "accessories",
        
    },
    {
        id: 6,
        name: "furniture",
         
    },
    {
        id: 7,
        name: "Snacks",
        
    },
    {
        id: 8,
        name: "Sushi",
         
    },
    {
        id: 9,
        name: "Desserts",
         
    },
    {
        id: 10,
        name: "Drinks",
        
    },
  
  ];

  const productsData =  [
    {
      id: '1',
      title: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      avgRating: 4,
      ratings: 1325,
      price: 20.98,
      oldPrice: 24.06,
      categories: [5, 7],
    },
    {
      id: '2',
      title: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      avgRating: 4.8,
      ratings: 2989,
      price: 32.98,
      oldPrice: 34.06,
      categories: [2, 4, 6],
    },
    {
      id: '3',
      title: "shoes",
      image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
       
      avgRating: 3.8,
      ratings: 2989,
      price: 4206.9,
      categories: [2, 4, 5],
    },
    {
      id: '4',
      title: "nike shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      price: 99.98,
      oldPrice: 120.06,
      categories: [2, 5, 6],
    },
    {
      id: '5',
      title: "red shoes",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      avgRating: 4.8,
      ratings: 2989,
      price: 32.98,
      oldPrice: 34.06,
      categories: [2, 4, 6],
    },
    {
      id: '6',
      title: "puma shoes",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
      categories: [1,5],
    },
    {
      id: '7',
      title: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      avgRating: 4,
      ratings: 1325,
      price: 20.98,
      oldPrice: 24.06,
      categories: [5, 7],
    },
  ];




    const [categories, setCategories] = React.useState(categoryData);
    const [products, setProducts] = React.useState(productsData);
    const [receipts, setReceipts] = React.useState([]);



   

  return (
    <productContext.Provider value={{ product:[ products , setProducts]}}> 
    <categoryContext.Provider value={{ category:[ categories , setCategories]}}> 
    < receiptContext.Provider value={{ product:[ receipts , setReceipts]}}>
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen } />
        <Drawer.Screen name="Receipt" component={ReceiptScreen} />
        <Drawer.Screen name="Item" component={ItemsStack} />
        <Drawer.Screen name="Cart" component={CartScreen} />
         <Drawer.Screen name="Settings" component={settingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    
    </ receiptContext.Provider>
    </categoryContext.Provider>
    </productContext.Provider>
  );
}

export default App;