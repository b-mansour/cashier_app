import React from 'react';
import { Button, View, Text , FlatList } from 'react-native';
import ReceiptItem from '../../components/ReceitItItem/index';
import {receiptContext} from '../../../App';

function  ReceiptScreen({ navigation }) {


  const productsData =  [
    {
      id: '1',
      title: "sneaker",
      avgRating: 4,
      ratings: 1325,
      price: 20.98,
      oldPrice: 24.06,
      categories: [5, 7],
    },
    {
      id: '2',
      title: "red shoes",
      avgRating: 4.8,
      ratings: 2989,
      price: 32.98,
      oldPrice: 34.06,
      categories: [2, 4, 6],
    },
    {
      id: '3',
      title: "shoes",
      avgRating: 3.8,
      ratings: 2989,
      price: 4206.9,
      categories: [2, 4, 5],
    },
    {
      id: '4',
      title: "nike shoes",
      price: 99.98,
      oldPrice: 120.06,
      categories: [2, 5, 6],
    },
    {
      id: '5',
      title: "red shoes",
      avgRating: 4.8,
      ratings: 2989,
      price: 32.98,
      oldPrice: 34.06,
      categories: [2, 4, 6],
    },
    {
      id: '6',
      title: "puma shoes",
      avgRating: 4.8,
      ratings: 2989,
      price: 99.98,
      oldPrice: 120.06,
      categories: [1,5],
    },
    {
      id: '7',
      title: "sneaker",
      avgRating: 4,
      ratings: 1325,
      price: 20.98,
      oldPrice: 24.06,
      categories: [5, 7],
    },
  ];


  return (

  <View>
    <Text style={{fontSize:50}}>Receipts</Text>
       <FlatList
        data={productsData}
        renderItem={({item}) => <ReceiptItem item={item} />}
        keyExtractor={(item, index) => item.id }
        // horizontal 
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      />
  </View>
  );
}
export default ReceiptScreen;





  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>


 
