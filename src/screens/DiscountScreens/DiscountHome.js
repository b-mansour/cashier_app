import React from 'react';
import { View, Text ,Button, StyleSheet, FlatList } from 'react-native';
import {discountContext} from '../../../App';
import DiscountItem from '../../components/DiscountItem/index';

function  DiscountHome({navigation}) {



    const {discount} = React.useContext(discountContext);
    const [ discounts, setDiscounts] = discount;



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

<Button
        title="create new Discount"
         onPress={() =>  navigation.navigate('DiscountCreate')}
        
      />
      </View>
    )
}

export default DiscountHome;
