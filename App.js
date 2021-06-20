import   React, {useEffect} from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerNav from './src/router/DrawerNav/DrawerNav';
import {View} from 'react-native';
 

const Drawer = createDrawerNavigator();

  export const productContext = React.createContext();
  export const categoryContext = React.createContext();
  export const cartContext = React.createContext([]);
  export const discountContext = React.createContext();
  export const barcodeContext = React.createContext();
  export const receiptContext = React.createContext();

function App() {


   const discountTypes = ['amount','percentage'];
   const discountsData = [
    {
      id: 1,
      name: "dscount",
      type: 'percentage',
      value: 10
       
  },

  {
      id: 2,
      name: "discount2",
      type:'amount', 
      value: 20
      
   },

  {
      id: 3,
      name: "discount3",
      type: 'percentage',
      value: 30
  },
];


  const categoryData = [
     {
      id: -1,
      name: "الكل",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', 
    },

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
      name: "تفاح ",
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
      name: "lemon",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 99.98,
      cost:70,
      categories: [2, 5, 6],
      quantity: 1,
      barcode:'123456789'
    },
    {
      id: '5',
      name: "apple",
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 32.98,
      cost:20,
      categories: [2, 4, 6],
      quantity: 1 ,
      barcode:'0012000048098'
    },
    {
      id: '6',
      name: "ليمون",
      image: 'https://images.unsplash.com/flagged/photo-1587302164675-820fe61bbd55?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 99.98,
      cost: 16,
      categories: [1,5,6],
      quantity: 1 ,
      barcode:'3474374600017'
    },
    {
      id: '7',
      name: "sneaker",
      image: 'https://images.unsplash.com/photo-1615484476889-2830f980a5e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGdyb2Nlcnl8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      price: 20.98,
      cost: 16,
      categories: [5, 7],
      quantity: 1 ,
      barcode:'0752481496352'
    },
  ];



  // const ReceitsData =  [
  //   {
  //     id: '1',
  //     name: "sneaker",
  //     price: 20.98,
  //     cost:15,
  //     categories: [5, 7],
  //     quantity: 1 ,
  //     barcode:'123456789'
  //   },
  //   {
  //     id: '2',
  //     name: "تفاح ",
  //     price: 32.98,
  //     cost:20,
  //     categories: [2, 4, 6],
  //     quantity: 1 ,
  //     barcode:'123456789'
  //   },
  //   {
  //     id: '3',
  //     billNo: '26252',
  //     cashierNo: 34,
  //     vatNo:20,
  //     createdDate:'2021/06/20',
  //     quantity: 1 ,
  //     discountPrice:'200',
  //     totalPrice: '500'
  //   },
  //   {
  //     id: '4',
  //     name: "lemon",
  //     price: 99.98,
  //     cost:70,
  //     categories: [2, 5, 6],
  //     quantity: 1,
  //     barcode:'123456789'
  //   },
  //   {
  //     id: '5',
  //     name: "apple",
  //     price: 32.98,
  //     cost:20,
  //     categories: [2, 4, 6],
  //     quantity: 1 ,
  //     barcode:'0012000048098'
  //   },
  //   {
  //     id: '6',
  //     name: "ليمون",
  //     price: 99.98,
  //     cost: 16,
  //     categories: [1,5,6],
  //     quantity: 1 ,
  //     barcode:'3474374600017'
  //   },
  //   {
  //     id: '7',
  //     name: "sneaker",
  //     price: 20.98,
  //     cost: 16,
  //     categories: [5, 7],
  //     quantity: 1 ,
  //     barcode:'0752481496352'
  //   },
  // ];


  




    const [categories, setCategories] = React.useState(categoryData);
    const [products, setProducts] = React.useState(productsData); 
    const [discounts, setDiscounts] = React.useState(discountsData);
    const [cartItems, setCartItems] = React.useState([]);
    const [receipts, setReceipts] = React.useState([]);
    const [barcode, setBarcode] = React.useState('');

  //   useEffect(() => {
  //     async function fetchMyAPI() {
  //       await fetch('https://reactnative.dev/movies.json')
  //       .then((response) => response.json())
  //       .then((json) => setProducts(json.movies))
  //       .catch((error) => console.error(error))
  //   }
  //   fetchMyAPI()
  
  // }, []);
  

  return (
 
    <productContext.Provider value={{product:[products ,setProducts]}}> 
     <categoryContext.Provider value={{ category:[ categories , setCategories]}}> 
       <discountContext.Provider value={{discount:[discounts, setDiscounts]}}> 
       <cartContext.Provider value={{Cart:[cartItems, setCartItems]}}>
       <receiptContext.Provider value = {{Receipt:[receipts, setReceipts]}}> 
       <barcodeContext.Provider value={{Barcode:[barcode, setBarcode]}}>

        <DrawerNav/>

    </barcodeContext.Provider>
    </receiptContext.Provider>
   </cartContext.Provider>
    </discountContext.Provider>
    </categoryContext.Provider>
    </productContext.Provider>

   
  );
}

export default App;