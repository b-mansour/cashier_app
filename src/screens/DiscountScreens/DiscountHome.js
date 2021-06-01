import React from 'react';
import { View, Text , Pressable, StyleSheet, FlatList } from 'react-native';
import {discountContext} from '../../../App';

function  DiscountHome() {



    const {discount} = React.useContext(discountContext);
    const [ discounts, setDiscounts] = product;



    return (
        <View>
             <Text>Discounthome page</Text> 
        </View>
    )
}

export default DiscountHome;
