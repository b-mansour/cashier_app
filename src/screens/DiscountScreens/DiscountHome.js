import React, {useEffect} from 'react';
import { View, Text ,Button, StyleSheet, FlatList } from 'react-native';
import {discountContext} from '../../../App';
import DiscountItem from '../../components/DiscountItem/index';

function  DiscountHome({navigation}) {



    // const {discount} = React.useContext(discountContext);
    // const [ discounts, setDiscounts] = discount;

    const [discounts, setDiscounts] = React.useState()
    
    // async function getDiscounts() {
    //   await fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetDiscounts/1')
    //         .then((response) => response.json())
    //         .then((json) => setDiscounts(json.response))
    //         .catch((error) => console.error('Error:' + error))
    //       }

    // useEffect(() => {
    //         getDiscounts();
    //       },[discounts]);

          
        
          useEffect(() => {
            let isMounted = true;               
            fetch('https://cashierapi.ibtikar-soft.sa/api/Store/GetDiscounts/1')
            .then((response) => response.json())
            .then((json) => { if(isMounted) setDiscounts(json.response)})
            .catch((error) => console.error('Error:' + error))
            return () => { isMounted = false }; 
          },[discounts]);                               

    return (
        <View>
        {/* <Text style={{fontSize:50, color:'#12b520'}}>Categories</Text> */}
           <FlatList
            data={discounts}
            renderItem={({item}) => <DiscountItem item={item}/>}
            keyExtractor={(item, index) => item.id }
            // horizontal 
            // showsHorizontalScrollIndicator={false}
            // showsVerticalScrollIndicator={false}
          />
      </View>
    )
}

export default DiscountHome;
