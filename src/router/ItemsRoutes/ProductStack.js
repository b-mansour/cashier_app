import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductHome from '../../screens/productScreens/ProductHome';
import ProductCreate from '../../screens/productScreens/ProductCreate';
import ProductEdit from '../../screens/productScreens/ProductEdit';
import BarcodeScan from '../../screens/productScreens/BarcodeScanner';
import AddButton from '../../components/AddButton';
import {colors} from '../../assets/Colors'

 

 export const categoryContext = React.createContext();

const Stack = createStackNavigator();

export default function ProductStack({navigation}) {

  const [categories, setCategories ] = React.useState();
  useEffect(() => {
          let isMounted = true;               
          fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetSections/1')
          .then((response) => response.json())
          .then((json) => { if(isMounted) setCategories(json.response)})
          .catch((error) => console.error('Error:' + error))
          return () => { isMounted = false }; 
        },[categories]);                               


    return (
 

   <categoryContext.Provider value={{ category:[ categories ,setCategories]}}>  

        
    <Stack.Navigator  screenOptions={{ 
      cardStyle: { backgroundColor:'#e1e1e6'},
      headerStyle: {
        backgroundColor: colors.primary,
      },
      headerTintColor: '#fff',
       headerTitleAlign:'center'
       }} 
       >
      <Stack.Screen name="ProductHome" options={{
       headerRight: () => (<AddButton routeName ='ProductCreate'  navigation={navigation}/>),
       title:'المنتجات'
      }}

       component={ProductHome}/>
       
      <Stack.Screen name='ProductCreate' options={{title:'اضافة منتج جديد'}}  component={ProductCreate} />
      <Stack.Screen name="ProductEdit" options={{title:'تعديل المنتج'}} component={ProductEdit} />
      <Stack.Screen name="BarcodeScanner" component={BarcodeScan}/>
    </Stack.Navigator>

     </categoryContext.Provider>
        
    )
}
