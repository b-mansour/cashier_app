import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscountHome from '../../../screens/DiscountScreens/DiscountHome';
import DiscountCreate from '../../../screens/DiscountScreens/DiscountCreate';
import DiscountEdit from '../../../screens/DiscountScreens/DiscountEdit';
import AddButton from './../../../components/AddButton';
 


const Stack = createStackNavigator();

 function Discount({navigation}) {
    return (

        
            <Stack.Navigator screenOptions={{ 
              cardStyle: { backgroundColor:'#e1e1e6'},
              headerStyle: {
                backgroundColor: '#b8b4b4',
              },
              headerTintColor: '#fff',
               headerTitleAlign:'center'
               }} 
              >
              <Stack.Screen name = "DiscountHome" 
               options={{
                headerRight: () => (<AddButton routeName ="DiscountCreate"  navigation={navigation}/>),
                title:'الخصومات'
               }}
              
              component = {DiscountHome}/>
              <Stack.Screen name="DiscountCreate" options={{title:'اضافة خصم جديد'}} component={DiscountCreate} />
              <Stack.Screen name="DiscountEdit" options={{title:'تعديل الخصم'}} component={DiscountEdit} />
            </Stack.Navigator>
        
    )
};

export default  Discount;