import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import DiscountItem from '../../../components/DiscountItem/index';
import Discount from './Discount';
import DiscountScreen from '../../../screens/DiscountScreens/DiscountScreen';
import ProductDiscount from './ProductDiscount';
 


const Stack = createStackNavigator();

 function DiscountStack() {
    return (

        
            <Stack.Navigator>
                  <Stack.Screen options={{ headerStyle: {
                       backgroundColor: '#12b520',
                          }, 
                      headerTintColor: '#fff',
                      headerTitleAlign:'center',
                    //   headerLeft: () => ( 
                    //  <Menu  navigation={navigation} /> 
                    // ),
                 title:'الخصومات'

                }}  
               name = "Items" component={DiscountScreen}/>
                <Stack.Screen name="Discount" component={Discount} />
              <Stack.Screen name ="DiscountItem" component = {ProductDiscount}/>
            </Stack.Navigator>
        
    )
};

export default  DiscountStack;
