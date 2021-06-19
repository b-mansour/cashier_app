import React from 'react';
import { Button, View, Text , FlatList } from 'react-native';
import ReceiptItem from '../../components/ReceitItItem/index';
import {productContext} from '../../../App';
// import {receiptContext} from '../../../App';



function  ReceiptHome({ navigation }) {



  const {product} = React.useContext(productContext);
  const [ products, setProducts] = product;


  // const {Receipt} = React.useContext(receiptContext);
  // const [receipts, setReceipts] = Receipt;


  return (

  <View> 
       <FlatList
        data={products}
        renderItem={({item}) => <ReceiptItem navigation={navigation} item={item} />}
        keyExtractor={(item, index) => item.id }
        // horizontal 
        // showsHorizontalScrollIndicator={false}
        // showsVerticalScrollIndicator={false}
      />
  </View>
  );
}
export default ReceiptHome;





  // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       
    //   <Button onPress={() => navigation.goBack()} title="Go back home" />
    // </View>


 
